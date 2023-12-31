import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import Swal from 'sweetalert2'


function TeacherCourses(){

    let [courses, setCourses] = useState([])

    useEffect(
        () => {getCourses()}, []
    )

    let getCourses = async () => {

        let response = await fetch(`/course/$/teachercourses`)
        let data = await response.json()
        setCourses(data)
    }

    


    const handleDelete = async (index) =>{
        console.log(index)
        let credential = {index}
        console.log(credential)
        fetch(`/course/delelteCourse`, {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
            body: JSON.stringify(credential)
        })
        window.location.reload()
    }
    useEffect (()=>{
        document.title = 'My courses'
    })
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">My Courses</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th><center>Course Name</center></th>
                                    <th><center>Date Created</center></th>
                                    <th><center>Total Enrolled Students</center></th>
                                    <th><center>Action</center></th>
                                    <th><center>Action</center></th>
                                </tr>
                            </thead>
                                
                                {courses.map((coursetitle, index) => (
                                    <tbody key = {index}>
                                    <td><center><Link to={`/details/${courses[index].id}`}>{courses[index].title}</Link></center></td>
                                    <td><center>{courses[index].created_at.slice(0,10)} </center></td>
                                    <td><center><Link to="/enrolled-student">Total Student Count</Link></center></td>
                                    <td><center><Link to={`/add-chapter/${courses[index].id}`} className="btn btn-primary text-dark">Add chapter</Link></center> </td>
                                    <td>
                                        <center>
                                            {/* <Link to="/edit-courses"><button className="btn btn-info text-dark">Edit</button></Link> */}
                                            <button className="btn btn-danger text-dark ms-2" onClick={()=>{handleDelete(courses[index].id)}}>Remove</button>
                                        </center>
                                    </td>
                                    
                                    </tbody>
                                ))}
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default TeacherCourses;














