import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = { email, password };

    // console.log(userData);

    fetch("http://localhost:8000/api/v1/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // console.log("data sent to backend successfully");
          localStorage.setItem("token", data.data.token),
            toast.success(data.message);
          form.reset();
          navigate("/");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <div class="border">
        <section class="w-100 h-100 p-4 d-flex justify-content-center pb-4">
          <form className="width: 22rem;" onSubmit={handleLoginFormSubmit}>
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form2Example1"
                name="email"
                class="form-control"
              />
              <label class="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                name="password"
                class="form-control"
              />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">
              Sign in
            </button>

            <div class="text-center">
              <p>
                Not a member? <Link to="/Register">Register</Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
