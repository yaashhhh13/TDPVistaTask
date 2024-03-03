import { Link } from "react-router-dom";

const PublishBook = () => {

  const handlePublishBoookSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const Description = form.Description.value;
    const publicationDate = form.publicationDate.value;
    const bookData = { title, author, genre, Description, publicationDate };
  
    console.log(bookData);
  
    try {
      const response = await fetch('http://localhost:8000/api/v1/book/publishBook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('Data received from backend successfully');
        localStorage.setItem('token', data.token);
        toast.success(data.message);
        form.reset();
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while registering the user.');
    }
  };

  return (
    <>
      {" "}
      <div class="border">
        <center className="fw-bold fs-1">Publish a book </center>
        <section class="w-100 h-100 p-4 d-flex justify-content-center pb-4">
          <form className="width: 22rem;" onSubmit={handlePublishBoookSubmit}>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">
                Title
              </label>
              <input type="text" id="form2Example1" name="title" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">
                Author
              </label>
              <input type="text" id="form2Example2" name="author" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example3">
                genre
              </label>
              <input type="text" id="form2Example3" name="genre" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example4">
                Book Description
              </label>
              <textarea rows={4} type="text" name="Description" id="form2Example4" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example5">
                publication Date
              </label>
              <input type="date" id="form2Example5" name="publicationDate" class="form-control" />
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">
              publish
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default PublishBook;
