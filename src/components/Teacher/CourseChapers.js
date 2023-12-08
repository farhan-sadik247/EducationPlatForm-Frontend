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
    const Swal = require('sweetalert2');  
    const handleDelete =(index)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'error',
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            showCancelButton: true
          }).then(result =>{
            if (result.isConfirmed) {
                doDelete(index)
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
          })
    }   

    const doDelete = async (index) =>{
        let credential = {index}
        console.log(credential)
        fetch(`/course/deleltecontent`, {
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
                <h5 className="card-header">Chapter List 
                    <div className="btn-group float-end">
                    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Add Content
                    </button>
                    <ul className="dropdown-menu">
                        <center><li><Link className="dropdown-item" to={`/add-chapter/${chapter_id}`}>Add Chapter</Link></li></center>
                        <li><hr className="dropdown-divider"/></li>
                        <center><li><Link className="dropdown-item" to={`/add-assignment/${chapter_id}`}>Add Assignment</Link></li></center>
                        
                        
                    </ul>
                    </div>
                </h5>
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
                            (<tr key = {index}>
                                <td>{content[index].title}</td>
                                {/* <td>
                                  <div className="embed-responsive embed-responsive-16by9">
                                    <video controls className="embed-responsive-item">
                                      <source src={content[index].link} type="video/mp4" />
                                    </video>
                                  </div>
                                </td> */}
                                <td>{content[index].remarks}</td>
                                <td>
                                  <center>
                                    <Link to={`/edit-chapters/${content[index].id}`}><button className="btn btn-info text-dark ">Edit</button></Link> 
                                    <button className="btn btn-danger text-dark ms-2" onClick={()=>(handleDelete(content[index].id))}>Delete</button> 
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
















