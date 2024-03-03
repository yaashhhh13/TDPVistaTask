import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-4">Readisphere</h1>
            <p className="lead">
              Welcome to BookVerse, your premier destination for all things
              literary. Immerse yourself in a universe where tales unfurl with
              every turn of the page. With a vast selection of genres and
              authors at your fingertips, there's a story waiting for every
              reader. Dive into classic literature, get lost in contemporary
              bestsellers, or uncover hidden gems yet to be discovered. Our
              user-friendly interface ensures seamless navigation, allowing you
              to lose yourself in the magic of storytelling.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <Link to='Readbook'>
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Read Books
              </button></Link>
              <Link to='publishbook'><button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Publish Book
              </button></Link>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://cdn.pixabay.com/photo/2020/09/07/09/30/tablet-5551322_640.jpg"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
