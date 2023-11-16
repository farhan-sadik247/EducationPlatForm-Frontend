import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CourseDetail(){
    let {course_id}=useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/cse471.png" className="img-thumbnail" alt="Course Image" />
                </div>
                <div className="col-8">
                    <h5>CSE471</h5>
                    <h3>SYSTEM ANALYSIS AND DESIGN</h3>
                    <p>Introduces students to tools and techniques in systems analysis and design such as data flow diagram and E-R diagrams. Projects by students where they analyse and design a system using these tools.</p>
                    <p className="fw-bold">Course By: <Link to="/teacher-detail/1">Md. Farhan sadik</Link></p>
                    <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
                    <p className="fw-bold">Total Enrolled Student: 99</p>
                    <p className="fw-bold">Rating:
                    <select id="rationSelect" name="quantity">
                        <option value="1">1</option>
                        <option value="1">1.5</option>
                        <option value="2">2</option>
                        <option value="2">2.5</option>
                        <option value="3">3</option>
                        <option value="3">3.5</option>
                        <option value="4">4</option>
                        <option value="4">4.5</option>
                        <option value="5">5</option>
                    </select>
                    /5 <button className=" btn btn-success" type="submit">Submit</button>
                    
                    </p>

                </div>
            </div>  
            {/* Course Video */}
            <div className="card">
            <div className="card" >
                <div className="fw-bold card-header">
                    <h5 className="card-header">Course Contents</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                    <span className="float-end">
                    <button className="btn btn-sm btn-outline-danger float-end" data-bs-toggle="modal" data-bs-target="#videpModal1"><i className="bi bi-youtube"></i></button>
                    </span>
                    {/* start video modal */}
                        <div className="modal fade" id="videpModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Introduction</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/b_eYxsR8WLk?" title="YouTube video" allowfullscreen></iframe>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    {/* End video modal */}
                    </li>
                    <li className="list-group-item">Content--1
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i className="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--2
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i className="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--3
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i className="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--4
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i className="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--5
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i className="bi bi-youtube"></i></button>
                    </span>
                    </li>
                    <li className="list-group-item">Content--6
                    <span className="float-end">
                        <span className="me-5"> 1 Hour 10 Min 45 Sec</span>
                        <button className="btn btn-sm btn-outline-danger float-end"><i className="bi bi-youtube"></i></button>
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            
            <h3 className="border-bottom pb-2 md-4 mt-5">Related Courses<Link href="#" className="float-end" style={{ color: 'blue', fontSize: '18px' }} ></Link></h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
                    <Link to="/details/1"><img src="/logo001.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link to="/details/1">Course Title</Link></h5>
                        {/* <Link href="#" className="btn btn-primary">Details</Link> */}
                        </div>
                    </div>
                </div> 
                <div className="col-md-3">
                    <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
                        <Link href="#"><img src="/logo001.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link href="#">Course Title</Link></h5>
                        {/* <Link href="#" className="btn btn-primary">Details</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CourseDetail;