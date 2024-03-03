import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { user , setUser} = useUserContext();

  console.log(user)

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link active" href="#">
            {user?.user.name}
            </Link>
            <Link to="/Login" class="nav-item nav-link">
              Login
            </Link>
            <Link
              to="/Login"
              class="nav-item nav-link"
              onClick={() => {
                localStorage.clear();
                location.reload();
                navigate("/");
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
