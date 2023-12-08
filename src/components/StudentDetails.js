import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function StudentDetails() {

    const [user, setUser] = useState([])
    const {student_id} = useParams()

    const getUser = async () => {
        let res = await fetch(`/auth/getteacher/${student_id}`)
        let data = await res.json()
        setUser(data)
    }

    useState(
        () => (getUser()), []
    )

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    {user.pic === null && <img src="/logo001.png" className="img-thumbnail" alt="Student Image" />}
                    {user.pic !== null && <img src={`http://127.0.0.1:8000/${user.pic}`} className="img-thumbnail" alt="Student Image" />}
                </div>
                <div className="col-8">
                    <h3 className="ms-5">{user.fullname}</h3>
                    <h5 className="ms-5">Username: {user.username}</h5>
                    <h5 className="ms-5">Email Address: {user.email}</h5>
                    <h5 className="ms-5">Interested in: {user.it}</h5>
                </div>
            </div>  
        </div>
    );
}

export default StudentDetails;