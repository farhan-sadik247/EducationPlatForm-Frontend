import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import Swal from 'sweetalert2'


function ShowAssignments(){

    let [courses, setCourses] = useState([])

    useEffect(
        () => {getCourses()}, []
    )

    let getCourses = async () => {

        let response = await fetch(`/course/teachercourses`)
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
                    <h5 className="card-header">Assignments <Link className="btn btn-success float-end" to="/add-assignment/1/3">Add Assignment</Link></h5> <h5></h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th><center>Assignment Title</center></th>
                                    <th><center>Assignment Link</center></th>
                                    <th><center>Submission Link</center></th>
                                    <th><center>Action</center></th>
                                </tr>
                            </thead>
                                
                                
                                    <tbody>
                                    <td><center><Link>Assignment-1</Link></center></td>
                                    <td><center><Link>Assignment Link</Link> </center></td>
                                    <td><center><Link>Submission Link</Link></center></td>
                                    <td>
                                        <center>
                                            <Link to="/edit-assignment/1/2"><button className="btn btn-info text-dark">Edit</button></Link>
                                            <button className="btn btn-danger text-dark ms-2">Remove</button>
                                        </center>
                                    </td>
                                    
                                    </tbody>
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default ShowAssignments;














