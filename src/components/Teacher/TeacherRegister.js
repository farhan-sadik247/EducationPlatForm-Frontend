import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function TeacherLogin(){

    const [username, setUsername] = useState("")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassw] = useState("")
    const [cpass, setcpass] = useState("")
    const [skills, setSkills] = useState("")
    const [warning, usercheck] = useState(false)
    const [warning2, usercheck2] = useState(false)
    const [home, goHome] = useState(false)

    if (home){
        return <Navigate to = "/"/>;
    }

    const handleSubmit = (e) => {
        const credential = { username, fullname, email, password, cpass, it}
        fetch("/auth/t_signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credential)
        })
        .then(res => {return res.json()})
        .then(data => {
            if (data === "f"){usercheck(true)}
            else{usercheck(false)}
            if (data === "g"){usercheck2(true)}
            if (data === "gg"){
                const cred = {username, password}
                fetch("/auth/signin",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(cred)})
                .then(res => {return res.json()})
                .then (() =>{goHome(true)}

                )}})}


    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h4 className="card-header bg-success">Teacher Registration</h4> 
                        <div className="card-body">
                        <form>
                            <img className="mb-3 mt-0 img-thumbnail bg-success" src="logo002.png" alt="Centered Image" width="600" height="100"/>

                            <div className="form-floating mb-3 mt-1">
                                <input type="text" className="form-control mb-2" id="floatingUsername" placeholder="Username"/>
                                <label htmlFor="floatingUsername">Username</label>
                                {warning && <div className="text-danger">Username already used</div>}
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="text" className="form-control mb-2" id="floatingUsername" placeholder="Username"/>
                                <label htmlFor="floatingUsername">Full Name</label>
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com" value = {username} onChange={(e) => setUsername(e.target.value)}/>
                                <label htmlFor="floatingInput">Email address</label>
                                <div id="emailHelp" className="form-text text-dark"><li>name@example.com</li></div>
                            </div>
                            <div className="form-floating mb-3 mt-1">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value = {password} onChange={(e) => setPassw(e.target.value)}/>
                                <label htmlFor="floatingPassword">Password</label>
                                <div id="passwordHelpBlock" className="form-text fw-bold text-danger">
                                    <li>Your password must be 8-20 characters long</li>
                                    <li>contain letters and numbers</li>
                                    <li>and must not contain spaces</li>
                                    <li>special characters or emoji.</li>
                                </div>
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="confirmPassword" value = {cpass} onChange={(e) => setcpass(e.target.value)}/>
                                <label htmlFor="floatingPassword">Confirm Password</label>
                                {warning2 && <div className="text-danger">Password did not match</div>}
                            </div>
                            <div className="form-floating mb-3 mt-1">
                                <input type="text" className="form-control mb-2" id="floatingUsername" placeholder="Username" value = {skills} onChange={(e) => setSkills(e.target.value)}/>
                                <label htmlFor="floatingInput">Skills</label>
                                <div id="textHelp" className="form-text text-dark">python,css,java, etc.</div>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
                        </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default TeacherLogin;
