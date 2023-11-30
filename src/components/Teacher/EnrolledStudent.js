import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import Swal from 'sweetalert2'


function EnrolledStudent(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Enrolled Student</h5>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th><center>Student Name</center></th>
                                    <th><center>Email</center></th>
                                    <th><center>username</center></th>
                                    <th><center>Action</center></th>
                                </tr>
                            </thead>
                                    <tbody>
                                    <td><center><Link>Full Name</Link></center></td>
                                    <td><center>Email ID </center></td>
                                    <td><center> Username </center></td>
                                    <td><center><Link to="/user-details" className="btn btn-primary text-dark">View Details</Link></center> </td>  
                                    </tbody>
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default EnrolledStudent;














