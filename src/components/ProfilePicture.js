import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfilePicture() {
    return (
        <div className="dropdown">
            <button
                className="btn btn-link dropdown-toggle rounded-circle text-white"
                type="button"
                data-bs-toggle="dropdown"
                
            >
                <img
                    id="userProfileImage"
                    src="logo001.png"  
                    alt="User Profile"
                    className="rounded-circle border-0 object-fit-cover"
                    style={{ width: '40px', height: '40px' }}
                />
            </button>
            
                <ul className="dropdown-menu">
                    <li>
                        <center><Link className="dropdown-item" to="#">
                        <i className="fa-solid fa-heart text-primary"></i>Wishlist
                        </Link></center>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <center><Link className="dropdown-item" to="#">
                        <i className="fa-solid fa-pen-nib text-info"></i>Update Profile
                        </Link></center>
                    </li>
                    <li>
                        <center><Link className="dropdown-item" to="#">
                        <i class="fa-solid fa-gauge"></i>Dashboard
                        </Link></center>
                    </li>
                    <li>
                        <center><Link
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#logoutModal"
                            to="#"
                        >
                           <i className="fa-solid fa-right-from-bracket text-danger"></i> Sign-out
                        </Link></center>
                    </li>
                </ul>
        </div>
    );
}

export default ProfilePicture;


