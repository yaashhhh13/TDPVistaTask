import { Link } from "react-router-dom";

const ReadBook = () => {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-4 p-4">
        <div class="col mb-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">Book title</h1>
              <h3 class="card-title">Book Author</h3>
              <h5 class="card-title">Book Genre</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <h4 class="card-title">Book Publication date</h4>
              <Link to='/UpdateBook'><button type="button" class="btn btn-primary">Edit Bood Details</button></Link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">Book title</h1>
              <h3 class="card-title">Book Author</h3>
              <h5 class="card-title">Book Genre</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <h4 class="card-title">Book Publication date</h4>
              <Link><button type="button" class="btn btn-primary">Edit Bood Details</button></Link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">Book title</h1>
              <h3 class="card-title">Book Author</h3>
              <h5 class="card-title">Book Genre</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <h4 class="card-title">Book Publication date</h4>
              <Link><button type="button" class="btn btn-primary">Edit Bood Details</button></Link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">Book title</h1>
              <h3 class="card-title">Book Author</h3>
              <h5 class="card-title">Book Genre</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <h4 class="card-title">Book Publication date</h4>
              <Link><button type="button" class="btn btn-primary">Edit Bood Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBook;
