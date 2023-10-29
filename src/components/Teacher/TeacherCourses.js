import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import djserver from "../..";

function TeacherCourses(teacher_id){

    let [courses, setCourses] = useState([])

    useEffect(
        () => {getCourses()}, []
    )

    let getCourses = async () => {

        let response = await fetch(djserver + `course/${teacher_id}/teachercourses`)
        let data = await response.json()
        setCourses(data)
    }

    
    const handleDelete = (index) =>{
        let credential = {index}
        fetch(djserver + `course/${teacher_id}/delelteCourse`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credential)
        })
        .then( getCourses())
    }

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
                                    <th><center>Created by</center></th>
                                    <th><center>Action</center></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <td><center>Learn ReactJs for begginers </center></td>    
                                <td><center><Link to="/">Farhan Sadik</Link></center></td>  
                                <td>
                                <center><button className="btn btn-danger text-dark">Remove</button></center>  
                                </td>   */}
                                {courses.map((coursetitle, teacher, index) => (
                                    <>
                                    <td><center><Link to="/">{coursetitle}</Link></center></td>
                                    <td><center><Link to="/">{teacher}</Link> </center></td>
                                    <td><center><button className="btn btn-danger text-dark" onClick={()=>{handleDelete(index)}}>Remove</button></center></td>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default TeacherCourses;














