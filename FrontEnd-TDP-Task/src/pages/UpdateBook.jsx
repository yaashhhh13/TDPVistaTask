import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateBookDets = () => {

  const params = useParams();
  const [BookDets, setBookDets] = useState([]);

  const GetBookDets = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/book/book-Dets/${params.id}`
      );

      //   console.log("sent food dets request")

      if (res.data.success) {
        setBookDets(res.data.data.book);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetBookDets();
  }, []);

  // console.log(BookDets)

  const handleUpdateBook = async (e) => {
    console.log(e)
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const Description = form.Description.value;
    const publicationDate = form.publicationDate.value;

    console.log(title,author,genre,Description,publicationDate)

      try {
        const res = await axios.put(
          "http://localhost:8000/api/v1/book/UpdateBookdetails",
          {
            bookID: BookDets._id,
            title,
             author, genre, Description, publicationDate
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(res)
        if (res.success) {
          toast.success(res.message);
          form.reset();
          navigate("/Readbook");
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <>
      <div class="border">
        <center className="fw-bold fs-1">Update book Details</center>
        <section class="w-100 h-100 p-4 d-flex justify-content-center pb-4">
          <form className="width: 22rem;" onSubmit={handleUpdateBook}>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">
                Title
              </label>
              <input type="text" placeholder={BookDets.title} id="form2Example1" name="title" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">
                Author
              </label>
              <input type="text" placeholder={BookDets.author} id="form2Example2" name="author" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example3">
                genre
              </label>
              <input type="email" id="form2Example3" placeholder={BookDets.genre} name="genre" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example4">
                Book Description
              </label>
              <textarea
                rows={4}
                type="email"
                id="form2Example4"
                class="form-control"
                placeholder={BookDets.Description}
                name="Description"
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example5">
                publication Date
              </label>
              <input type="text" id="form2Example5" name="publicationDate" placeholder={BookDets.publicationDate} class="form-control" />
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">
              update book 
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default UpdateBookDets;
