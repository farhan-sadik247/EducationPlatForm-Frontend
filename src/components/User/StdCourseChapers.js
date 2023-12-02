import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Sidebar from "./Sidebar";

function StdCourseChapters(){

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

    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <Sidebar />
            </aside>
            <section className="col-md-9">
            <div className="card">
                <h5 className="card-header">Chapter List 
                    <div className="btn-group float-end">
                    </div>
                </h5>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th><center>Chapter Name</center></th>
                                <th><center>Video</center></th>
                                <th><center>Remarks</center></th>
                            </tr>
                        </thead>  
                        <tbody>
                            {content.map((name, index) => 
                            ( content[index].type === "assignment" ?
                                (<tr>
                                    <td>{content[index].title}</td>
                                    <td>
                                      {content[index].link}
                                    </td>
                                    <td>{content[index].sub_link}</td>
                                </tr>)
                                :
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
                            </tr>)))}
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

export default StdCourseChapters;
















