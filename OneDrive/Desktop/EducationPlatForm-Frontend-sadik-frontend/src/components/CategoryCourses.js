import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CategoryCourses() {
  const [courses, setCourses] = useState([]);
  const [cata, setCata] = useState("");
  const { cata_id } = useParams("");

  let getCourses = async () => {
    let response = await fetch(`/course/ff${cata_id}/coursesearch`);
    let data = await response.json();
    setCourses(data);
  };

  let getCata = async () => {
    let response = await fetch(`/course/${cata_id}/getcata`);
    let data = await response.json();
    setCata(data);
  };

  useEffect(() => getCourses(), [cata]);

  useEffect(() => getCata(), []);

  return (
    <div className="container mt-4">
      {/* <> */}
      {/* Latest Courses */}
      <h3 className="border-bottom pb-2 md-4"> {cata.title}</h3>
      <div className="row mb-4">
        {courses.map((name, index) => (
          <div className="col-md-3 mb-4">
            <div className=" card" style={{ color: "blue", fontSize: "18px" }}>
              <a href="#">
                <img src="/logo001.png" className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="#">{courses[index].title}</a>
                </h5>
                {/* <a href="#" className="btn btn-primary">Details</a> */}
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-3 mb-4">
          <div className=" card" style={{ color: "blue", fontSize: "18px" }}>
            <a href="#">
              <img src="/logo001.png" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <a href="#">Course Title</a>
              </h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div>
      </div>
      {/* End Latest Courses */}
      {/* </> */}
      {/* Pagination Start */}
      <nav aria-label="Page navigation example mt-5">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* Pagination End */}
    </div>
  );
}

export default CategoryCourses;
