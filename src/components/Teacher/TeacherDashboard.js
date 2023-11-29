import { Link } from "react-router-dom";
import Sidebar from "./TeacherSidebar";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
function TeacherDashboard(){
    useEffect (()=>{
        document.title = 'Teacher Dashboard'
    })
    return(
        <div class="container mt-4">
        <div class="row">
            <aside class="col-md-3">
            <TeacherSidebar />
            </aside>
            <section class="col-md-9 mt-2">
            <div class="row">
                <div class="col-md-4 ms-5">
                <div class="card border border-primary">
                    <center><div class="card-header bg-info fw-bolder">Total Enrolled Students</div></center>
                    <div class="card-body">
                    <Link to="/enrolled-student">totalStudents</Link>
                    </div>
                </div>
                </div>
                <div class="col-md-4 ms-5">
                <div class="card border border-primary">
                    <center><div class="card-header bg-primary text-white fw-bolder">Total Courses</div></center>
                    <div class="card-body">
                        <Link to="/teacher-courses">totalCourses</Link>
                    </div>
                </div>
                </div>
                {/* <div class="col-md-4">
                <div class="card">
                    <div class="card-header">Total Chapters</div>
                    <div class="card-body">
                    totalChapters 
                    </div>
                </div>
                </div> */}
            </div>
            </section>
        </div>
        </div>
    );
}

export default TeacherDashboard;
