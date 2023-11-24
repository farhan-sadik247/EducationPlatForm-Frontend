import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function CourseChapters(){

    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <TeacherSidebar />
            </aside>
            <section className="col-md-9">
            <div className="card">
                <h5 className="card-header">All Chapters</h5>
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
                            <tr>
                                <td>Chapter 1</td>
                                <td>
                                  <div className="embed-responsive embed-responsive-16by9">
                                    <video controls className="embed-responsive-item">
                                      <source src="YOUTUBE_VIDEO_URL" type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video>
                                  </div>
                                </td>
                                <td>Remarks for Chapter 1</td>
                                <td>
                                  <center>
                                    <button className="btn btn-danger text-dark">Delete</button> 
                                    <button className="btn btn-info text-dark ms-2">Edit</button> 
                                  </center>
                                </td>  
                            </tr>
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
















