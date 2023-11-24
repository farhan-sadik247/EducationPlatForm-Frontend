import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function TeacherCourses(){

    // let [courses, setCourses] = useState([])
    // let [refresh, setRefresh] = useState(true)

    // useEffect(
    //     () => {getCourses()}, [refresh]
    // )

    // let getCourses = async () => {

    //     let response = await fetch(`/course/teachercourses`)
    //     let data = await response.json()
    //     setCourses(data)
    // }

    
    // const handleDelete = async (index) =>{
    //     console.log(index)
    //     let credential = {index}
    //     console.log(credential)
    //     fetch(`/course/delelteCourse`, {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
    //         body: JSON.stringify(credential)
    //     })
    //     window.location.reload()
    // }

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
                                    <th><center>Action</center></th>
                                </tr>
                            </thead>
                                <td><center>Learn ReactJs for begginers </center></td>    
                                <td><center><Link to="/">Farhan Sadik</Link></center></td>  
                                <td>
                                <center><button className="btn btn-danger text-dark">Remove</button></center> 
                                </td>  
                                <td><center><Link className="btn btn-primary text-dark" to="/add-chapter/2">Add chapter</Link></center> </td>
                                
                                {/* {courses.map((coursetitle, index) => (
                                    <tbody>
                                    <td><center><Link to="/">{courses[index].title}</Link></center></td>
                                    <td><center><Link to="/">{courses[index].created_at.slice(0,10)}</Link> </center></td>
                                    <td><center><button className="btn btn-danger text-dark" onClick={()=>{handleDelete(courses[index].id)}}>Remove</button></center></td>
                                    <td><center><Link className="btn btn-primary text-dark" to="">Add chapter</Link></center> </td>
                                    </tbody>
                                // ))} */}
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default TeacherCourses;














