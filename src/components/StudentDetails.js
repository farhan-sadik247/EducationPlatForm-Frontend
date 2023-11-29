import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function StudentDetails() {



    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo001.png" className="img-thumbnail" alt="Student Image" />
                </div>
                <div className="col-8">
                    <h3 className="ms-5">Student Name</h3>
                    <h5 className="ms-5">Username: </h5>
                    <h5 className="ms-5">Email Address:</h5>
                    <h5 className="ms-5">Interested in:</h5>
                </div>
            </div>  
        </div>
    );
}

export default StudentDetails;