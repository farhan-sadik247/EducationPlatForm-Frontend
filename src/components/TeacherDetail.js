import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TeacherDetail() {
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo001.png" className="img-thumbnail" alt="Teacher Image" />
                </div>
                <div className="col-8">
                    <h3>Md. Farhan sadik</h3>
                    <p>Teacher Description</p>


                    <p className="fw-bold">Skills: <Link to="/category/python">Python</Link>,<Link to="/category/django">Django</Link>,<Link to="/category/reactjs">ReactJS</Link>,<Link to="/category/js">JavaScript</Link></p>
                    <p className="fw-bold">Recent Course: <Link to="/details/1">ReactJS Course</Link></p>
                    <p className="fw-bold">Rating:
                    <select id="rationSelect" name="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    out of 5 
                    </p>
                </div>
            </div>  
            {/* Course Video */}
            <div className="card">
            <div className="card" >
                <div className="fw-bold card-header">
                    <h5>Course list</h5>
                </div>
                <div className="list-group list-group-flush">
                    <Link to="/details/1" className="list-group-item list-group-item-active ">ReactJS Course 1</Link>
                    <Link to="/details/1" className="list-group-item list-group-item-active ">ReactJS Course 2</Link>
                    <Link to="/details/1" className="list-group-item list-group-item-active ">Python Tutorial</Link>
                    <Link to="/details/1" className="list-group-item list-group-item-active ">Django Tutorial</Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherDetail;