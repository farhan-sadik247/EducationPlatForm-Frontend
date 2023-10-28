import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetail(){
    let {course_id}=useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo001.png" className="img-thumbnail" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Course Title</h3>
                    <p>Course Description</p>
                    <p className="fw-bold">Course By: <a href="#">Teacher 1</a></p>
                    <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
                    <p className="fw-bold">Total Enrolled Student: 99</p>
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
                    <h5>Course Contents</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                    <span className="float-end">
                        <button className="btn btn-sm btn-outline-primary float-end">Open</button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--1
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i class="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--2
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i class="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--3
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i class="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--4
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i class="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--5
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i class="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--6
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i class="bi bi-youtube"></i></button>
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            
            <h3 className="border-bottom pb-2 md-4 mt-5">Related Courses<a href="#" className="float-end" style={{ color: 'blue', fontSize: '18px' }} ></a></h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
                    <Link to="/details/1"><img src="/logo001.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link to="/details/1">Course Title</Link></h5>
                        {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                    </div>
                </div> 
                <div className="col-md-3">
                    <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
                        <a href="#"><img src="/logo001.png" className="card-img-top" alt="..." /></a>
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Course Title</a></h5>
                        {/* <a href="#" className="btn btn-primary">Details</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CourseDetail;