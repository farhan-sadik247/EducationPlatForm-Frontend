import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

function UserAssignment(){

    let [contents, setContents] = useState([])
    let [teacher, setTeacher] = useState([])


    useEffect(
        () => {getContents()}, []
    )


    useEffect(() => {
        contents.map((name, index) =>{
            fetch(`/course/${contents[index].id}/contentteacher`)
            .then(res => res.json())
            .then(data => teacher[index] = data.fullname)
            .then(() => console.log(teacher))
        })
    }, [contents]
    )
    
    let getContents = async () => {

        let response = await fetch(`/course/$/getcontent`)
        let data = await response.json()
        setContents(data)
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
                            {contents.map((name, index) =>
                            (<tbody key = {index}> 
                                    <td><center><Link to="">{contents[index].title}</Link></center></td>
                                    <td><center><Link to={contents[index].link}> {contents[index].link} </Link> </center></td>
                                    <td><center><Link to={contents[index].sub_link}> {contents[index].sub_link} </Link> </center></td>
                                    <td><center>{teacher[index]}</center></td>
                                    
                            </tbody>))}
                        </table>
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default UserAssignment;














