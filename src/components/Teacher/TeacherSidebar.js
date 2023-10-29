import { Link } from "react-router-dom";
function TeacherSidebar(){
    return(
        <div className="card">
            
            <div className="list-group list-group-flush">
                <Link to="/teacher-dashboard" className="list-group-item list-group-item-action"><center>Dashboard</center></Link>
                <Link to="/teacher-courses" className="list-group-item list-group-item-action"><center>My Courses</center></Link>
                <Link to="/add-courses" className="list-group-item list-group-item-action"><center>Add Course</center></Link>
                <Link to="/teacher-courses" className="list-group-item list-group-item-action"><center>My Users</center></Link>
                <Link to="/teacher-profile-update" className="list-group-item list-group-item-action"><center>Profile Update</center></Link>
                <Link to="/teacher-change-password" className="list-group-item list-group-item-action"><center>Change Password</center></Link>
                <Link to="/teacher-login" className="list-group-item list-group-item-action text-danger"><center>Sign out</center></Link>
            </div>
        </div>
    );
}

export default TeacherSidebar;