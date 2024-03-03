import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NoBookMsg from "../component/NobookMsg";

const ReadBook = () => {
  const [book, setBook] = useState([]);

  const params = useParams()

  const GetBooks = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/book/GetAllBooks`
      );

      if (res.data.success) {
        setBook(res.data.data.book);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetBooks();
  }, []);

  const handleDeleteBook = async (bookID) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/v1/book/DeleteBook/${bookID}`
      );

      if (res.data.success) {
        setBook(book.filter(book => book._id !== bookID));
        console.log(res.data.message);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="container">
      <center>
        <h1 className="fw-bold">Read Books</h1>
      </center>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-4">
        {book.length === 0 && <NoBookMsg/>}
        {book.map((book) => {
          const publicationDate = new Date(book.publicationDate);

          const formattedPublicationDate = `${publicationDate.getFullYear()}-${
            publicationDate.getMonth() + 1
          }-${publicationDate.getDate()}`;
          return (
            <div className="col mb-4" key={book._id}>
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">{book.title}</h1>
                  <h3 className="card-title">{book.author}</h3>
                  <h5 className="card-title">{book.genre}</h5>
                  <p className="card-text">{book.Description}</p>
                  <h4 className="card-title">{formattedPublicationDate}</h4>
                  <Link to={`/UpdateBook/${book._id}`}>
                    <button type="button" className="btn btn-primary">
                      Edit Bood Details
                    </button>
                  </Link>
                    <button onClick={() => handleDeleteBook(book._id)} type="button" className="btn btn-primary m-2">
                      Delete Book 
                    </button>
                </div>
              </div>
            </div>
          );
        }).reverse()}
      </div>
    </div>
    </>
  );
};

export default ReadBook;
