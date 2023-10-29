import { Link } from "react-router-dom";

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Professor's Hideout</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active btn-outline-success" aria-current="page" to="/">Home</Link>
              <a className="nav-link btn-outline-success" href="#">Courses</a>
              <a className="nav-link btn-outline-success" href="#">Teachers</a>
              <Link className="nav-link btn-outline-success" to="/user-login">Login</Link>
              <Link className="nav-link btn-outline-success" to="/user-register">Register</Link>
              
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;