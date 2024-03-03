import { Link } from "react-router-dom";

const NoBookMsg = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 w-100 text-center">
        <h1 className="display-5 fw-bold">No Books</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            But don't fret! Your next favorite book could be just around the
            corner. We're constantly on the lookout for captivating stories to
            fill our collection. Why not be a part of the excitement? Share your
            masterpiece with us today, and let it enchant readers from all
            corners of the globe. Click the button below to embark on your
            journey as a published author.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/publishbook">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                Publish a book
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoBookMsg;
