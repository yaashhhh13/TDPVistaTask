import { Link } from "react-router-dom";

const PublishBook = () => {
  return (
    <>
      {" "}
      <div class="border">
        <center className="fw-bold fs-1">Publish a book </center>
        <section class="w-100 h-100 p-4 d-flex justify-content-center pb-4">
          <form className="width: 22rem;">
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">
                Title
              </label>
              <input type="text" id="form2Example1" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">
                Author
              </label>
              <input type="text" id="form2Example2" class="form-control" />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example3">
                genre
              </label>
              <input type="email" id="form2Example3" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example4">
                Book Description
              </label>
              <textarea rows={4} type="email" id="form2Example4" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example5">
                publication Date
              </label>
              <input type="date" id="form2Example5" class="form-control" />
            </div>

            <button type="button" class="btn btn-primary btn-block mb-4">
              Publish
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default PublishBook;
