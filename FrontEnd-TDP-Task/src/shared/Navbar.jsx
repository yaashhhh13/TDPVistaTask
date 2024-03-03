import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { user , setUser} = useUserContext();

  // console.log(user)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active" href="#">
            Home
            </Link>
            <Link to="/Login" className="nav-item nav-link">
              Login
            </Link>
            <Link
              to="/Login"
              className="nav-item nav-link"
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
