import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function CourseDetail(props){


    const {courseid}=useParams();
    // console.log(props.user.id)
    
    let [course, setCourse] = useState([])
    let [cata, setCata] = useState([])
    let [content, setContent] = useState([])
    let [rating, setRating] = useState(1)
    let [teacher, setTeacher] = useState(0)
    let [total, setTotal] = useState(0)
    let [submit, setSubmit] = useState(false)
    let [courses, setCourses] = useState([])
    let [bought, setBought] = useState(false)
    

    useEffect(
        () => {getCourse()}, [submit]
    )

    useEffect(
        () => {getTeacher()
        getCata()}, [course]
    )

    useEffect(
        () => {getCourses()}, [cata]
    )
    
    useEffect(
        () => {getContent()},[]
    )
    useEffect(
        () => {getBought()},[]
    )

    let getCourse = async () => {
        let response = await fetch(`/course/${courseid}/getcourse`)
        let data = await response.json()
        setCourse(data)
    }

    let getCourses = async () => {
        let response = await fetch(`/course/ff${cata.id}/coursesearch`)
        let data = await response.json()
        setCourses(data)
    }

    let getTeacher = async () => {
        let response = await fetch(`/auth/getteacher/${course.teacher}`)
        let data = await response.json()
        setTeacher(data)
        response = await fetch(`/course/${course.teacher}/totalstd`)
        data = await response.json()
        setTotal(data)

    }

    let getContent = async () => {
        let response = await fetch(`/course/${courseid}/getcontent`)
        let data = await response.json()
        setContent(data)
    }
    
    let getCata = async () => {
        let response = await fetch(`/course/${course.catagory}/getcata`)
        let data = await response.json()
        setCata(data)
    }
    let getBought = async () => {
        let response = await fetch(`/course/$/boughtCourses`)
        let data = await response.json()
        console.log(data)
        data.map((name, index)=> 
            (data[index].id === Number(courseid) ? (setBought(true)) :(false))
        )
    }

    const handleSubmit = async () => {
        let cred = { rating}
        fetch(`/course/${courseid}/getcourse`, {
            method : "POST",
            headers: {"Content-Type" : "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
            body: JSON.stringify(cred)
        })
        setSubmit(true)
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/cse471.png" className="img-thumbnail" alt="Course Image" />
                </div>
                <div className="col-8">
                    <h3>{course.title}</h3>
                    <p>{course.details}</p>
                    <p className="fw-bold">Course By: <Link to={`/teacher-detail/${teacher.id}`}>{teacher.fullname}</Link></p>
                    <p className="fw-bold">Category: <Link to="/category-details/1">{cata.title}</Link></p>
                    {/* <p className="fw-bold">Technologies used: Doo</p> */}
                    <p className="fw-bold">Total Enrolled Student: {total}</p>
                    <p className="fw-bold">Rating:
                    {course.rating}/5
                    <div>{!submit && bought && <select id="rationSelect" name="quantity" onChange={(e) => setRating(e.target.value)}>
                        <option value="1" >1</option>
                        <option value="1" >1.5</option>
                        <option value="2" >2</option>
                        <option value="2" >2.5</option>
                        <option value="3" >3</option>
                        <option value="3" >3.5</option>
                        <option value="4" >4</option>
                        <option value="4" >4.5</option>
                        <option value="5" >5</option>
                    </select>}
                    {!submit && bought && <button className=" btn btn-success" type="submit" onClick={handleSubmit}>Submit</button>}</div>
                    
                    </p>
                    {bought && <p><Link className="btn btn-success" to="/my-courses">You are Enrolled!</Link>
                    </p>}
                    {!bought && <p><Link className="btn btn-success" to="/my-courses">Enroll Now</Link>
                    <Link className="ms-2 btn btn-outline-info border border-primary" to="/favourite-courses"><i class="fa-solid fa-heart btn-outline-danger"></i>  Add to Wishlist</Link>
                    </p>}

                </div>
            </div>  
            {/* Course Video */}
            <div className="card">
            <div className="card" >
                <div className="fw-bold card-header">
                    {props.user.id === teacher.id ? (<h5 className="card-header"><Link to = {`/course-chapters/${courseid}`}>Course Contents</Link></h5>)
                    :(<h5 className="card-header">Course Contents</h5>)}
                </div>

                <ul className="list-group list-group-flush">
                {content.map((name, index) => 
                (<li className="list-group-item"> {content[index].title}
                <span className="float-end">
                <button className="btn btn-sm btn-outline-danger float-end" data-bs-toggle="modal" data-bs-target="#videpModal1"><i className="fa-brands fa-youtube"></i></button>
                </span>
                {/* start video modal */}
                    <div className="modal fade" id="videpModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{content[index].title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="ratio ratio-16x9">
                        <iframe allowFullScreen src={content[index].link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                {/* End video modal */}
                </li>
                ))}
                    <li className="list-group-item">Content--1
                    <span className="float-end">
                        {/* <span className="me-5"> 1 Hour 10 Min 45 Sec</span> */}
                        <button className="btn btn-sm btn-outline-danger float-end"><i className="fa-brands fa-youtube"></i></button>
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            
            <h3 className="border-bottom pb-2 md-4 mt-5">Related Courses<Link href="#" className="float-end" style={{ color: 'blue', fontSize: '18px' }} ></Link></h3>
            <div className="row mb-4">
                {courses.map((name, index)=>
                (courses[index].title !== course.title &&
                <div className="col-md-3">
                    <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
                    <Link to={`/details/${courses[index].id}`}><img src="/logo001.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link to={`/details/${courses[index].id}`}>{courses[index].title}</Link></h5>
                        {/* <Link href="#" className="btn btn-primary">Details</Link> */}
                        </div>
                    </div>
                </div> ))}
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