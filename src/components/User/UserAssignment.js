import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

function UserAssignment(){

    const { student_id } = useParams()


    let [courses, setCourses] = useState([])

    useEffect(
        () => {getCourses()}, []
    )

    let getCourses = async () => {

        let response = await fetch(`/course/${student_id}/boughtcourses`)
        let data = await response.json()
        setCourses(data)
    }


    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">My Assignments</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th><center>Assignment Title</center></th>
                                    <th><center>Assignment Link</center></th>
                                    <th><center>Submission Link</center></th>
                                    <th><center>Created by</center></th>
                                </tr>
                            </thead>
                            <tbody>
                                    <td><center><Link to="">Assignment-1</Link></center></td>
                                    <td><center><Link to=""> Post assignment link </Link> </center></td>
                                    <td><center><Link to=""> Post submission link </Link> </center></td>
                                    <td><center>Teacher Name</center></td>
                                    
                            </tbody>
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default UserAssignment;














