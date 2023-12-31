import { Link } from 'react-router-dom';

function ProfilePicture(props) {

    const handlelogout = async () => {
        await fetch("/auth/signout");
        props.setUser("")
      };

    return (
        <div className="dropdown">
            <button
                className="btn btn-link dropdown-toggle rounded-circle text-white"
                type="button"
                data-bs-toggle="dropdown"
                
            >
                {props.user.pic !== null && <img
                    id="userProfileImage"
                    src={`http://127.0.0.1:8000/${props.user.pic}`}  
                    alt="User Profile"
                    className="rounded-circle border-0 object-fit-cover"
                    style={{ width: '40px', height: '40px' }}
                />}
                {props.user.pic === null && <img
                    id="userProfileImage"
                    src="logo001.png" 
                    alt="User Profile"
                    className="rounded-circle border-0 object-fit-cover"
                    style={{ width: '40px', height: '40px' }}
                />}
            </button>
            
                <ul className="dropdown-menu">
                <li className="d-flex align-items-center">
                    <div className="d-flex align-items-center px-1">
                        {props.user.pic !== null && <img
                            id="userProfileImageDropdown"
                            src={`http://127.0.0.1:8000/${props.user.pic}`}
                            alt="User Profile"
                            className="rounded-circle border-0 object-fit-cover mr-2"
                            style={{ width: '40px', height: '40px' }}
                        />}
                        {props.user.pic === null && <img
                            id="userProfileImageDropdown"
                            src="logo001.png"
                            alt="User Profile"
                            className="rounded-circle border-0 object-fit-cover mr-2"
                            style={{ width: '40px', height: '40px' }}
                        />}
                        <div>
                            <center>
                            <span className="px-2">{props.user.username}</span>
                            <br/>
                            <span className='px-2 fst-italic text-info'>{props.user.email}</span>
                            </center>

                        </div>
                    </div>
                </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <center><Link className="dropdown-item" to="#">
                        <i className="fa-solid fa-heart text-primary"></i>Wishlist
                        </Link></center>
                    </li>
                    <li>
                        {props.user.is_teacher ?
                        (<center><Link className="dropdown-item" to="/teacher-dashboard">
                        <i className="fa-solid fa-gauge"></i>Dashboard
                        </Link></center>):
                        (<center><Link className="dropdown-item" to="/user-dashboard">
                        <i className="fa-solid fa-gauge"></i>Dashboard
                        </Link></center>)}
                    </li>
                    <li>
                        <center><Link
                            className="dropdown-item"
                            // data-bs-toggle="modal"
                            // data-bs-target="#logoutModal"
                            to="/" onClick={handlelogout}
                        >
                           <i className="fa-solid fa-right-from-bracket text-danger"></i> Sign-out
                        </Link></center>
                    </li>
                </ul>
        </div>
    );
}

export default ProfilePicture;
