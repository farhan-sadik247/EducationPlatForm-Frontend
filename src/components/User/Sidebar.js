import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className="card">
            
            <div className="list-group list-group-flush">
                <Link to="/user-dashboard" className="list-group-item list-group-item-action"><center>Dashboard</center></Link>
                <Link to="/my-courses" className="list-group-item list-group-item-action"><center>My Courses</center></Link>
                <Link to="/favourite-courses" className="list-group-item list-group-item-action"><center>Favourite Courses</center></Link>
                <Link to="/recommended-courses" className="list-group-item list-group-item-action"><center>Recommended Courses</center></Link>
                <Link to="/user-assignment/1" className="list-group-item list-group-item-action"><center>Assignments</center></Link>
                <Link to="/profile-update" className="list-group-item list-group-item-action"><center>Profile Update</center></Link>
                <Link to="/change-password" className="list-group-item list-group-item-action"><center>Change Password</center></Link>
                <Link to="/user-login" className="list-group-item list-group-item-action text-danger"><center>Sign out</center></Link>
            </div>
        </div>
    );
}

export default Sidebar;