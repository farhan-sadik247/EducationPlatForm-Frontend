import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PopularTeachers() {

  let [teacher, setTeacher] = useState([])

  useEffect(
      () => {getTeacher()}, []
  )

  let getTeacher = async () => {

      let response = await fetch(`/auth/allteacher`)
      let data = await response.json()
      setTeacher(data)
  }

  return(
    <div className="container mt-4">
    {/* <> */}
    {/* Popular Courses */}
    <h3 className="border-bottom pb-2 md-4"> All Popular Teachers</h3>
    <div className="row mb-4">
    {teacher.map((name, index) => 
        (<div className="col-md-3 mb-4" key = {index}>
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to={`/teacher-detail/${teacher[index].id}`}>{teacher[index].pic === null && <img src="teacher.png" className="card-img-top" style={{ height: '450px', objectFit: 'cover' }} alt="..." />}{teacher[index].pic !== null && <img src={`http://127.0.0.1:8000/${teacher[index].pic}`} className="card-img-top" style={{ height: '450px', objectFit: 'cover' }} alt="..." />}</Link>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/teacher-detail/${teacher[index].id}`}>{teacher[index].fullname}</Link></h5>
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: {teacher[index].rating}</span>
                
              </div>
            </div>
        </div>
      </div>  
      ))}
      
      {/* <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="teacher.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Teacher Name</Link></h5>
            
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                
              </div>
            </div>
        </div>
      </div>  */}
    </div>
    {/* Pagination End */}
    </div>
  );
}

export default PopularTeachers