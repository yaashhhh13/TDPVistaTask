import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateBookDets = () => {

  const navigate = useNavigate()
  const params = useParams();
  const [BookDets, setBookDets] = useState([]);

  const GetBookDets = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/book/book-Dets/${params.id}`
      );

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
    console.log(e);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const Description = form.Description.value;
    const publicationDate = form.publicationDate.value;

    // console.log(title, author, genre, Description, publicationDate);

    try {
      const res = await axios.put(
        "http://localhost:8000/api/v1/book/UpdateBookdetails",
        {
          bookID: BookDets._id,
          title,
          author,
          genre,
          Description,
          publicationDate,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
        form.reset();
        navigate("/Readbook");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="border">
        <center className="fw-bold fs-1">Update book Details</center>
        <section className="w-100 h-100 p-4 d-flex justify-content-center pb-4">
          <form className="width: 22rem;" onSubmit={handleUpdateBook}>
            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example1">
                Title
              </label>
              <input
                type="text"
                placeholder={BookDets.title}
                id="form2Example1"
                name="title"
                className="form-control"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example2">
                Author
              </label>
              <input
                type="text"
                placeholder={BookDets.author}
                id="form2Example2"
                name="author"
                className="form-control"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example3">
                genre
              </label>
              <input
                type="email"
                id="form2Example3"
                placeholder={BookDets.genre}
                name="genre"
                className="form-control"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example4">
                Book Description
              </label>
              <textarea
                rows={4}
                type="email"
                id="form2Example4"
                className="form-control"
                placeholder={BookDets.Description}
                name="Description"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example5">
                publication Date
              </label>
              <input
                type="text"
                id="form2Example5"
                name="publicationDate"
                placeholder={BookDets.publicationDate}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              update book
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default UpdateBookDets;
