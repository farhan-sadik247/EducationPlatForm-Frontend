import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function CourseChapters(){

    const {chapter_id} = useParams()


    let [content, setContent] = useState([])

    useEffect(
        () => {getContent()}, []
    )

    let getContent = async () => {

        let response = await fetch(`/course/${chapter_id}/getcontent`)
        let data = await response.json()
        setContent(data)
    }

    const handleDelete = async (index) =>{
        let credential = {index}
        fetch(`/course/delelteCourse`, {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
            body: JSON.stringify(credential)
        })
        window.location.reload()
    }

    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <TeacherSidebar />
            </aside>
            <section className="col-md-9">
            <div className="card">
                <h5 className="card-header">Chapter List</h5>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th><center>Chapter Name</center></th>
                                <th><center>Video</center></th>
                                <th><center>Remarks</center></th>
                                <th><center>Action</center></th>
                            </tr>
                        </thead>  
                        <tbody>
                            {content.map((name, index) => 
                            (<tr>
                                <td>{content[index].title}</td>
                                <td>
                                  <div className="embed-responsive embed-responsive-16by9">
                                    <video controls className="embed-responsive-item">
                                      <source src={content[index].link} type="video/mp4" />
                                      {/* Your browser does not support the video tag. */}
                                    </video>
                                  </div>
                                </td>
                                <td>{content[index].remarks}</td>
                                <td>
                                  <center>
                                    <button className="btn btn-danger text-dark" onClick={()=>(handleDelete(content[index].id))}>Delete</button> 
                                    <button className="btn btn-info text-dark ms-2">Edit</button> 
                                  </center>
                                </td>  
                            </tr>))}
                            {/* Add more rows for other chapters */}
                        </tbody>
                    </table>
                </div>
            </div>
            </section>
        </div>
    </div>
    );
}

export default CourseChapters;
















