import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";


function FavouriteCourses(){

    const { student_id } = useParams()

    let [courses, setCourses] = useState([])

    useEffect(
        () => {getCourses()}, []
    )

    let getCourses = async () => {

        let response = await fetch(`/course/${student_id}/favCourses`)
        let data = await response.json()
        setCourses(data)
    }

    
    const handleDelete = (index) =>{
        let credential = {index}
        fetch(`/course/${student_id}/removeCourse`, {
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
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Favourite Courses</h5>
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
                                <td>{courses.map((coursetitle, student, index) => (
                                    <>
                                    <td><center><Link to="/">{coursetitle}</Link></center></td>
                                    <td><center><Link to="/">{student}</Link> </center></td>
                                    <td><center><button className="btn btn-danger text-dark" onClick={()=>{handleDelete(index)}}>Remove</button></center></td>
                                    </>
                                ))}</td>  
                            </tbody>
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default FavouriteCourses;














