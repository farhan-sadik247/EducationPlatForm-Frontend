import { Link } from "react-router-dom";
import AllCourses from "./AllCourses";
import { useEffect, useState } from "react";
function Home() {
  
  let [course1, lateCourses] = useState([])
  let [course2, popCourses] = useState([])
  let [teacher, setTeacher] = useState([])
  
  
  useEffect(
    () => {getlateCourses()
      getpopCourses()
      getTeacher() 
    }, []
    )
    
    
  let getlateCourses = async () => {
      let response = await fetch(`/course/latecourse`)
      let data = await response.json()
      lateCourses(data)
  }
  let getpopCourses = async () => {

      let response = await fetch(`/course/popcourse`)
      let data = await response.json()
      popCourses(data)
  }


  let getTeacher = async () => {

      let response = await fetch(`/auth/allteacher`)
      let data = await response.json()
      setTeacher(data)
  }
  useEffect (()=>{
    document.title = "Professor's Hideout|Home"
  })
  return (
    <div className="container mt-4">
      {/* Latest Courses */}
      <h3 className="border-bottom pb-2 md-4">Latest Courses<Link to="all-courses" className="float-end" style={{ color: 'blue', fontSize: '18px' }} >See All</Link></h3>

      <div className="row mb-4" >
      {course1.map((name, index) => 
        (<div className="col-md-3" key = {index}>
        <div className=" card" style={{ color: 'blue', fontSize: '18px'}}>
        <Link to={`/details/${course1[index].id}`}>{course1[index].pic === null && <img src="cse471.png" className="card-img-top ms-2"  alt="..." />}{course1[index].pic !== null && <img src={`http://127.0.0.1:8000/${course1[index].pic}`} className="card-img-top" alt="..." />}</Link>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/details/${course1[index].id}`}>{course1[index].title}</Link></h5>
            {/* <a to="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div>  
      ))}
        {/* <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <Link to="/details/1"><img src="cse471.png" className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/details/1">SYSTEM ANALYSIS AND DESIGN</Link></h5>
              <a to="#" className="btn btn-primary">Details</a>
            </div>
          </div>
        </div>    */}
      </div>
      {/* End Latest Courses */}

      {/* Popular Courses */}
      <h3 className="border-bottom pb-3 md-3 mt-5">Popular Courses<Link to="popular-courses" className="float-end" style={{ color: 'blue', fontSize: '18px' }} >See All</Link></h3>
      <div className="row mb-4">
      {course2.map((name, index) => 
        (<div className="col-md-3" key = {index}>
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <Link to={`/details/${course2[index].id}`}>{course2[index].pic === null && <img src="cse471.png" className="card-img-top" alt="..." />}{course2[index].pic !== null && <img src={`http://127.0.0.1:8000/${course2[index].pic}`} className="card-img-top" alt="..." />}</Link>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/details/${course2[index].id}`}>{course2[index].title}</Link></h5>
          </div>
          <div className="card-footer">
            <div className="title">
              <span className="text-dark">Rating: {course2[index].rating}</span>
              {/* <span className="float-end text-dark" >Views: 54658</span> */}
            </div>
          </div>
        </div>
      </div>   
      ))}

        {/* <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a to="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a to="#">Course Title</a></h5>
              <a to="#" className="btn btn-primary">Details</a>
            </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                <span className="float-end text-dark" >Views: 54658</span>
              </div>
            </div>
          </div>
        </div>     */}
      </div>
      {/* End Popular Courses */} 

      {/* Featured Teacher */}
      <h3 className="border-bottom pb-2 md-4">Featured Teacher<Link to="popular-teachers" className="float-end" style={{ color: 'blue', fontSize: '18px' }} >See All</Link></h3>
      <div className="row mb-4">
      {teacher.map((name, index) => 
        (<div className="col-md-3 mb-4" key = {index}>
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to={`/teacher-detail/${teacher[index].id}`}>{teacher[index].pic === null && <img src="teacher.png" className="card-img-top" alt="..." />}{teacher[index].pic !== null && <img src={`http://127.0.0.1:8000/${teacher[index].pic}`} className="card-img-top" alt="..." />}</Link>
          <div className="card-body">
            <h5 className="card-title"><Link to={`/teacher-detail/${teacher[index].id}`}>{teacher[index].username}</Link></h5>
          </div>
            <div className="card-footer">
              {/* <div className="title">
                <span className="text-dark">Rating: {teacher[index].rating}</span>
                
              </div> */}
            </div>
        </div>
      </div>  
      ))}
        {/* <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a to="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
            </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
              </div>
            </div>
          </div>
        </div>    */}
      </div>
      {/* End Featured Teacher */}   

      {/* Student Testimonial */}
      <h3 className="border-bottom pb-2 md-4">Some Famous Quote</h3>
      <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>“An investment in knowledge pays the best interest.”</p>
        </blockquote>
        <figcaption className="blockquote-footer text-light">
        Benjamin Franklin
        </figcaption>
      </figure>
      </div>
      <div className="carousel-item">
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>“Intellectual growth should commence at birth and cease only at death.”</p>
        </blockquote>
        <figcaption className="blockquote-footer text-light">
        Albert Einstein
        </figcaption>
      </figure>
      </div>
      <div className="carousel-item">
      <figure className="text-center">
          <blockquote className="blockquote">
            <p>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
          </blockquote>
          <figcaption className="blockquote-footer text-light">
          Malcolm X 
          </figcaption>
      </figure>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>      
      {/* End Featured Teacher */}       
    </div>
  );
}

export default Home;