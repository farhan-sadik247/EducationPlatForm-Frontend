import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import Swal from 'sweetalert2'


function EnrolledStudent(){

    let [student, setStd] = useState([])

    const getStd = async () => {
        let res = await fetch("/course/getstd")
        let data = await res.json()
        setStd(data)
    }

    useEffect(()=>{getStd()}, [])

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
                                    {student.map((name, index) => 
                                    (<tbody>
                                    <td><center>{student[index].fullname}</center></td>
                                    <td><center>{student[index].email} </center></td>
                                    <td><center> {student[index].username} </center></td>
                                    <td><center><Link to={`/user-details/${student[index].id}`} className="btn btn-primary text-dark">View Details</Link></center> </td>  
                                    </tbody>))}
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default EnrolledStudent;














