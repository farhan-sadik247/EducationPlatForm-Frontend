import { Link } from "react-router-dom";
import Sidebar from "./TeacherSidebar";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
function TeacherDashboard(){
    useEffect (()=>{
        document.title = 'Teacher Dashboard'
    })
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    Teacher Dashboard
                </section>
            </div>
        </div>
    );
}

export default TeacherDashboard;
