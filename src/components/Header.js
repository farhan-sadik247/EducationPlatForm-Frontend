import { Link } from "react-router-dom";

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/"><i className="bi bi-mortarboard-fill"></i>Professor's Hideout</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active btn-outline-success" aria-current="page" to="/"><i className="bi bi-house"></i>Home</Link>
              <Link className="nav-link btn-outline-success" to="#">Courses</Link>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Teachers
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/teacher-login"><i className="bi bi-box-arrow-in-right"></i>Login</Link></li>
                    <li><Link className="dropdown-item" to="/teacher-register">Register</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/teacher-dashboard"><i className="bi bi-speedometer2"></i>Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="teacher-signout"><i className="bi bi-box-arrow-right"></i>Sign out</Link></li>
                  </ul>
                </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  User
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/user-login"><i className="bi bi-box-arrow-in-right"></i>Login</Link></li>
                  <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/user-dashboard"><i className="bi bi-speedometer2"></i>Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/user-signout"><i className="bi bi-box-arrow-right"></i>Sign out</Link></li>
                </ul>
              </li>              
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;