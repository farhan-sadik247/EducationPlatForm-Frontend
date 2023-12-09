import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


function UserForgotChangePassword(){

    const {username} = useParams()
    const [pass1, setpass1] = useState("")
    const [pass2, setpass2] = useState("")
    const goHome = useNavigate()
    const [warning, passcheck] = useState(false)

    const handleSubmit = async () => {
        const credential = { username, pass1, pass2}
        fetch(`/auth/change_pass/${username}`, {
            method: "POST",
            headers: {"Content-Type": "application/json", 'X-CSRFToken': Cookies.get("csrftoken") },
            body: JSON.stringify(credential)})
        goHome("/")
    }

    useEffect (
        () => {
            pass1===pass2 ? passcheck(false): passcheck(true)
        },
        [pass1,pass2]
    )

    useEffect (()=>{
        document.title = 'Teacher-Change-Password'
    })

    return(
        <div className="container mt-4">
            <div className="row">
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Change Password</h5>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>     
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">New Password </label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" value = {pass1} onChange={(e) => setpass1(e.target.value)}/>
                            </div>
                        </div>        

                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputCPassword" value = {pass2} onChange={(e) => setpass2(e.target.value)}/>
                            </div>
                            {warning && <div className="text-danger">Password did not match</div>}
                        </div>  
                        <hr/>
                        {!warning && <button className="w-100 btn btn-lg btn-primary" type="submit">Change Password</button>}
                        {warning && <button className="w-100 btn btn-lg btn-primary" disabled>Change Password</button>}
                        <div className="mb-3 row">    
                        </div>       
                        </form>    
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default UserForgotChangePassword;