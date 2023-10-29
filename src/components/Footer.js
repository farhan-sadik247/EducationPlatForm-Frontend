import { Link } from "react-router-dom";
function Footer() {
    return (
    <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-1 mb-1">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
        <Link className="nav-link" to="/about">About Us</Link>
        </ul>
        <p className="text-center text-body-secondary">©Professors Hideout</p>
        <p className="text-center text-body-secondary">Univarsity Project Fall 2023</p>
    </footer>
    );
  }
  
  export default Footer;