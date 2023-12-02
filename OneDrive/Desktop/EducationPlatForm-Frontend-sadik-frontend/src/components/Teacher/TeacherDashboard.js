import { Link } from "react-router-dom";
import Sidebar from "./TeacherSidebar";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
function TeacherDashboard(){
    
    let [totalstd, setTotalstd] = useState(0)
    let [totalcourse, setTotalcourse] = useState(0)
    
    const getTotal = async () => {
        let res = await fetch(`course/$/totalstd`)
        let data = await res.json()
        setTotalstd(data.std)
        setTotalcourse(data.course)
    }

    useEffect (()=>{
        getTotal()
    }, [])

    useEffect (()=>{
        document.title = 'Teacher Dashboard'
    }, [])
    
    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
            <TeacherSidebar />
            </aside>
            <section className="col-md-9 mt-2">
            <div className="row">
                <div className="col-md-4 ms-5">
                <div className="card border border-primary">
                    <center><div className="card-header bg-info fw-bolder">Total Enrolled Students</div></center>
                    <div className="card-body">
                    <Link to="/enrolled-student">{totalstd}</Link>
                    </div>
                </div>
                </div>
                <div className="col-md-4 ms-5">
                <div className="card border border-primary">
                    <center><div className="card-header bg-primary text-white fw-bolder">Total Courses</div></center>
                    <div className="card-body">
                        <Link to="/teacher-courses">{totalcourse}</Link>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
        </div>
    );
}

export default TeacherDashboard;
