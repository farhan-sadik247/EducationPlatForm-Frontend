import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function CourseDetail(props){

    const {courseid}=useParams();
    
    let [course, setCourse] = useState([])
    let [cata, setCata] = useState([])
    let [content, setContent] = useState([])
    let [rating, setRating] = useState(1)
    let [teacher, setTeacher] = useState(0)
    let [total, setTotal] = useState(0)
    let [submit, setSubmit] = useState(false)
    let [courses, setCourses] = useState([])
    let [bought, setBought] = useState(false)
    let [wish, setWish] = useState(false)
    let [cart, setCart] = useState(false)
    let goHome = useNavigate()
    console.log(props)
    
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
        () => {getBought()
        getWish()
    getCart()},[]
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
        response = await fetch(`/course/${courseid}/totalstd`)
        data = await response.json()
        console.log(data)
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
        let response = await fetch(`/course/$${courseid}/boughtCourses`)
        let data = await response.json()
        if(data === true){
            setBought(true)
            setSubmit(true)
        }
        if(data === false){
            setBought(true)
            setSubmit(false)
        }
        if (data === "f"){
            setBought(false)
            setSubmit(true)
        }
    }

    let getWish = async () => {
        let response = await fetch(`/course/favCourses`)
        let data = await response.json()
        data.course.map((name, index)=> 
            (data.course[index].id === Number(courseid) ? (setWish(true)) :(false))
        )
    }

    let getCart= async () => {
        let response = await fetch(`/course/cartCourses`)
        let data = await response.json()
        console.log(data)
        data.course.map((name, index)=> 
            (data.course[index].id === Number(courseid) ? (setCart(true)) :(false))
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
        props.setuser("")
    }

    const handleEnroll = async () => {
        if(Number(course.price) === 0){let cred = {courseid}
        fetch(`/course/enroll`, {
            method : "POST",
            headers: {"Content-Type" : "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
            body: JSON.stringify(cred)
        })
        goHome("/my-courses")}
        else{
            handleCart()
        }
    }

    const handleWish = async () => {
        let cred = {courseid}
        fetch(`/course/addfav`, {
            method : "POST",
            headers: {"Content-Type" : "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
            body: JSON.stringify(cred)
        })
        goHome("/favourite-courses")
    }

    const handleCart = async () => {
        let cred = {courseid}
        fetch(`/course/addcart`, {
            method : "POST",
            headers: {"Content-Type" : "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
            body: JSON.stringify(cred)
        })
        goHome("/add-to-cart")
    }
    console.log(course)
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    {course.pic === null && <img src="/cse471.png" className="img-thumbnail" alt="Course Image" />}
                    {course.pic !== null && <img src={`http://127.0.0.1:8000/${course.pic}`} className="img-thumbnail" alt="Course Image" />}
                </div>
                <div className="col-8">
                    <h3>{course.title}</h3>
                    <p>{course.details}</p>
                    <p className="fw-bold">Course By: <Link to={`/teacher-detail/${teacher.id}`}>{teacher.fullname}</Link></p>
                    <p className="fw-bold">Category: <Link to={`/category-details/${course.catagory}`}>{cata.title}</Link></p>
                    {/* <p className="fw-bold">Technologies used: Doo</p> */}
                    <p className="fw-bold">Total Enrolled Student: {total}</p>
                    {Number(course.discount) === 0 && <p className="fw-bold">Price: ${course.price}</p>}
                    <p className="text-decoration-line-through">Price: ${course.price}</p>
                    <p className="fw-bold">Price: ${(course.price*(100-Number(course.discount))/100)}</p>
                    <p className="fw-bold">Rating:
                    {course.rating}/5
                    <div>{!submit && bought && props.user.is_teacher !== true && <select id="rationSelect" name="quantity" onChange={(e) => setRating(e.target.value)}>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4" >4</option>
                        <option value="5" >5</option>
                    </select>}
                    {!submit && bought && <button className=" btn btn-success" type="submit" onClick={handleSubmit}>Submit</button>}</div>
                    
                    </p>
                    {bought && <p>You are Enrolled!  <Link className="btn btn-outline-warning" to="/my-courses">View Course</Link>
                    </p>}
                    {(props.user !== "" && !bought && !wish && props.user.is_teacher !== true && !cart) && <p><button className=" btn btn-success" type="submit" onClick={handleEnroll}>Enroll Now</button>
                    <button className="ms-2 btn btn-outline-info border border-primary" onClick={handleWish}><i className="fa-solid fa-heart btn-outline-danger"></i>  Add to Wishlist</button>
                    <button className="ms-2 btn btn-outline-info border border-primary" onClick={handleCart}>  Add to Cart</button>
                    </p>}
                    {(!bought && wish && !cart) && <p><button className=" btn btn-success" type="submit" onClick={handleEnroll}>Enroll Now</button>
                        <Link className="ms-2 btn btn-outline-info border border-primary" to="/favourite-courses">  View Wishlist</Link>
                        <button className="ms-2 btn btn-outline-info border border-primary" onClick={handleCart}>  Add to Cart</button>
                    </p>}
                    {(!bought && wish && cart) && <p><Link className=" btn btn-success" to = "/add-to-cart">View in Cart</Link>
                        <Link className="ms-2 btn btn-outline-info border border-primary" to="/favourite-courses">  View Wishlist</Link>
                    </p>}
                    {(!bought && !wish && cart) && <p><Link className=" btn btn-success" to = "/add-to-cart">View in Cart</Link>
                    <button className="ms-2 btn btn-outline-info border border-primary" onClick={handleWish}><i className="fa-solid fa-heart btn-outline-danger"></i>  Add to Wishlist</button>
                    </p>}
                    {(props.user === "") && <p><Link className=" btn btn-success" type="submit" to = "/user-login">Enroll Now</Link>
                    <Link className="ms-2 btn btn-outline-info border border-primary" to = "/user-login"><i className="fa-solid fa-heart btn-outline-danger"></i>  Add to Wishlist</Link>
                    <Link className="ms-2 btn btn-outline-info border border-primary" to = "/user-login">  Add to Cart</Link></p>}

                </div>
            </div>  
            {/* Course Video */}
            {(props.user.id === teacher.id | bought) && <div className="card mt-5">
            <div className="card" >
                <div className="fw-bold card-header">
                    {props.user.id === teacher.id && <h5 className="card-header"><Link to = {`/course-chapters/${courseid}`}>Course Contents</Link></h5>}
                    {bought && <h5 className="card-header"><Link to = {`/std-course-chapters/${courseid}`}>Course Contents</Link></h5>}
                    {/* {!(props.user.id === teacher.id | bought) && <h5 className="card-header">Course Contents</h5>} */}
                </div>

                <ul className="list-group list-group-flush">
                {content.map((name, index) => 
                (<li className="list-group-item" key = {index}> 
                <>{content[index].title}</>
                {content[index].type !== "assignment" && (<span className="float-end">
                <button className="btn btn-sm btn-outline-danger float-end" data-bs-toggle="modal" data-bs-target={`#videpModal${index}`}><i className="fa-brands fa-youtube"></i></button>
                </span>)}
                {/* start video modal */}
                    <div className="modal fade" id={`videpModal${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    {/* <li className="list-group-item">Content--1
                    <span className="float-end">
                        <button className="btn btn-sm btn-outline-danger float-end"><i className="fa-brands fa-youtube"></i></button>
                    </span>
                    </li> */}
                </ul>
                </div>
            </div>}
            
            <h3 className="border-bottom pb-2 md-4 mt-5">Related Courses<Link href="#" className="float-end" style={{ color: 'blue', fontSize: '18px' }} ></Link></h3>
            <div className="row mb-4">
                {courses.map((name, index)=>
                (courses[index].title !== course.title &&
                <div className="col-md-3" key={index}>
                    <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
                    <Link to={`/details/${courses[index].id}`}><img src="/logo001.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link to={`/details/${courses[index].id}`} onClick= {() => courseid=courses[index].id}>{courses[index].title}</Link></h5>
                        
                        </div>
                    </div>
                </div> ))}
                {/* <div className="col-md-3">
                    <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
                        <Link href="#"><img src="/logo001.png" className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link href="#">Course Title</Link></h5>
                
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}


export default CourseDetail;