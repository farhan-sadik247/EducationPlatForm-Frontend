import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PopularCourses() {

  let [course, setCourses] = useState([])

    useEffect(
        () => {getCourses()}, []
    )

    let getCourses = async () => {

        let response = await fetch(`/course/popcourse`)
        let data = await response.json()
        setCourses(data)
    }

  return(
    <div className="container mt-4">
    {/* <> */}
    {/* Popular Courses */}
    <h3 className="border-bottom pb-2 md-4"> All Popular Courses</h3>
    <div className="row mb-4">
    {course.map((name, index) => 
        (<div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to={`/details/${course[index].id}`}>{course[index].pic === null && <img src="logo001.png" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="..." />}{course[index].pic !== null && <img src={`http://127.0.0.1:8000/${course[index].pic}`} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="..." />}</Link>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/details/${course[index].id}`}>{course[index].title}</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: {course[index].rating}</span>
                <span className="float-end text-dark" >Views: 54658</span>
              </div>
            </div>
        </div>
      </div> 
      ))}
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course Title</a></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
              <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                <span className="float-end text-dark" >Views: 54658</span>
              </div>
            </div>
        </div>
      </div>   
    </div>
    {/* End Popular Courses */}
    {/* </> */}
    {/* Pagination Start */}
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

export default PopularCourses