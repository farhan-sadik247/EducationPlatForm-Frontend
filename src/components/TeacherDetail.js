import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TeacherDetail() {

    const {teacher_id}=useParams();

    let [teacher, setTeacher] = useState([])
    let [course, setCourse] = useState([])
    let [rating, setRating] = useState(0)
    let [courses, setCourses] = useState([])

    useEffect(
        () => {getTeacher()}, []
    )

    let getTeacher = async () => {

        let response = await fetch(`/auth/getteacher/${teacher_id}`)
        let data = await response.json()
        setTeacher(data)
    }

    useEffect(
        () => {getCourse()}, []
    )

    let getCourse = async () => {

        let response = await fetch(`/course/${teacher_id}/recentcourse`)
        let data = await response.json()
        setCourse(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let cred = { rating}
        let response = await fetch(`/auth/getteacher/${teacher_id}`, {
            method : "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(cred)
        })
        let data = await response.json()
        setRating(data)
    }

    useEffect(
        () => {getCourses()}, []
    )

    let getCourses = async () => {

        let response = await fetch(`/course/${teacher_id}/teachercourses`)
        let data = await response.json()
        setCourses(data)
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo001.png" className="img-thumbnail" alt="Teacher Image" />
                </div>
                <div className="col-8">
                    <h3>{teacher.fullname}</h3>
                    <p>Teacher Description</p>


                    <p className="fw-bold">Skills: {teacher.skills} </p>
                    <p className="fw-bold">Recent Course: <Link to={`/details/${course.id}`}>{course.title}</Link></p>
                    <p className="fw-bold">Rating:
                    <select id="rationSelect" name="quantity" onChange= {(e) => (setRating(e))}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    out of 5 <button className=" btn btn-success" type="submit" onClick={handleSubmit}>Submit</button>
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
                {courses.map((name, index) => 
                    (<Link to={`/details/${courses[index].id}`} className="list-group-item list-group-item-active ">{courses[index].title}</Link> 
                ))}
                    <Link to="/details/1" className="list-group-item list-group-item-active ">ReactJS Course 1</Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherDetail;