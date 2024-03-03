import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ReadBook = () => {
  const [book, setBook] = useState([]);

  const params = useParams()

  const GetBooks = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/book/GetAllBooks`
      );

      console.log(res.data);

      if (res.data.success) {
        setBook(res.data.data.book);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(food);
  useEffect(() => {
    GetBooks();
  }, []);

  const handleUpdateBook = () => {

  }

  const handleDeleteBook = () => {

  }

  return (
    <>
      <center>
        <h1 className="fw-bold">Read Books</h1>
      </center>
      <div class="row row-cols-1 row-cols-md-4 p-4">
        {book.map((book) => {
          const publicationDate = new Date(book.publicationDate);

          // Format the date as desired
          const formattedPublicationDate = `${publicationDate.getFullYear()}-${
            publicationDate.getMonth() + 1
          }-${publicationDate.getDate()}`;
          return (
            <div class="col mb-4">
              <div class="card">
                <div class="card-body">
                  <h1 class="card-title">{book.title}</h1>
                  <h3 class="card-title">{book.author}</h3>
                  <h5 class="card-title">{book.genre}</h5>
                  <p class="card-text">{book.Description}</p>
                  <h4 class="card-title">{formattedPublicationDate}</h4>
                  <Link to={`/UpdateBook/${book._id}`}>
                    <button type="button" class="btn btn-primary">
                      Edit Bood Details
                    </button>
                  </Link>
                  <Link to={`/DeleteBook/${book._id}`}>
                    <button type="button" class="btn btn-primary m-2">
                      Delete Book 
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReadBook;
