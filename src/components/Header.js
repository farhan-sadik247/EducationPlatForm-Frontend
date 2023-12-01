import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import SearchBox from './SearchBox';
import ProfilePicture from "./ProfilePicture";

function Header(props) {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          <i className="bi bi-mortarboard-fill"></i>Professor's Hideout
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className="navbar-nav   ms-auto">

            <SearchBox search = {props.search} setSearch={props.setSearch}/>

            <Link className="nav-link btn-outline-success" aria-current="page" to="/">
            <i className="fa-solid fa-house"></i>Home
            </Link>

            <Link className="nav-link btn-outline-success" to="/all-courses">Courses</Link>
            <Link className="mt-2" to="/add-to-cart"><i class="fa-solid fa-cart-plus btn btn-outline-light "></i></Link>

                {props.user === "" ? (
                  <>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="teachersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-chalkboard-user"></i>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="teachersDropdown">
                  <center><li>Teacher</li></center>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <center><li><Link className="dropdown-item" to="/teacher-login"><i className="bi bi-box-arrow-in-right"></i>Login</Link></li></center>
                    <center><li><Link className="dropdown-item" to="/teacher-register">Register</Link></li></center>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-users"></i>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="userDropdown">
                  <center><li>Student</li></center>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                    <center><li><Link className="dropdown-item" to="/user-login"><i className="bi bi-box-arrow-in-right"></i>Login</Link></li></center>
                    <center><li><Link className="dropdown-item" to="/user-register">Register</Link></li></center>
                  </ul>
                </li>
                </>)
                :
            (< ProfilePicture user={props.user} setUser = {props.setUser}/>)}
          </div>
        </div>

      </div> { /** END OF Container **/ }
    </nav>
  );
}

export default Header;






