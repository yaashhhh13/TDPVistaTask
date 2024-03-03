import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = { name, email, password };
  
    console.log(userData);
  
    try {
      const response = await fetch('http://localhost:8000/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
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
      <div class="border">
        <center className="fw-bold fs-1">Register a New User </center>
        <section class="w-100 h-100 p-4 d-flex justify-content-center pb-4">
          <form className="width: 22rem;" onSubmit={handleFormSubmit}>
            <div class="form-outline mb-4">
              <input type="text" id="form2Example1" name="name" class="form-control" />
              <label class="form-label" for="form2Example1">
                Full name
              </label>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form2Example2" name="email" class="form-control" />
              <label class="form-label" for="form2Example2">
                Email address
              </label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form2Example3" name="password" class="form-control" />
              <label class="form-label" for="form2Example3">
                Password
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Register
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

export default Register;
