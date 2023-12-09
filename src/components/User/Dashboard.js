import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Dashboard(){

    const { student_id } = useParams()
    
    let [courses, setCourses] = useState([])

    useEffect(
        () => {getCourses()}, []
    )

    let getCourses = async () => {

        let response = await fetch(`/course/&/boughtCourses`)
        let data = await response.json()
        setCourses(data)
    }

    const handleDelete = async (index) =>{
        let credential = {index}
        console.log(credential)
        fetch(`/course/removebought`, {
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
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">My Dashboard</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th><center>Course Name</center></th>
                                    <th><center>Created by</center></th>
                                </tr>
                            </thead>
                                {courses.course?.map((student, index) => (
                                <tbody key = {index}>
                                    <td><center><Link to={`/details/${courses.course[index].id}`}>{courses.course[index].title}</Link></center></td>
                                    <td><center><Link to={`/teacher-detail/${courses.teacher[index].id}`}>{courses.teacher[index].fullname}</Link> </center></td>
                                </tbody>))} 
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;














