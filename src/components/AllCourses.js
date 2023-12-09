import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllCourses() {


    let [course, setCourses] = useState([])

    useEffect(
        () => {getCourses()}, []
    )

    let getCourses = async () => {

        let response = await fetch(`/course/allcourse`)
        let data = await response.json()
        setCourses(data)
    }
    useEffect (()=>{
      document.title = 'All Latest Courses'
  })
  return(
    <div className="container mt-4">
    {/* <> */}
    {/* Latest Courses */}
    <h3 className="border-bottom pb-2 md-4"> All Latest Courses {course.id}</h3> 
    <div className="row mb-4">
      {course.map((name, index) => 
        (<div className="col-md-3 mb-4" key={index}>
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to={`/details/${course[index].id}`}>{course[index].pic === null && <img src="logo001.png" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="..." />}{course[index].pic !== null && <img src={`http://127.0.0.1:8000/${course[index].pic}`} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="..." />}</Link>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/details/${course[index].id}`}>{course[index].title}</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div> 
      ))}
    </div>
    <nav aria-label="Page navigation example mt-5">
      <ul className="pagination justify-content-center">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
    {/* Pagination End */}
    </div>
  );
}

export default AllCourses