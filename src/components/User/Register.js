import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){

    const [username, setUsername] = useState("")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassw] = useState("")
    const [cpass, setcpass] = useState("")
    const [skills, setSkills] = useState("")
    const [load, setLoad] = useState(false)
    
    const [warning, usercheck] = useState(false)
    const [warning2, passcheck] = useState(false)
    const navigate = useNavigate()
    const type = false

    const handleSubmit = async (e) => {
        const credential = { username, fullname, email, password, cpass, skills, type}
        setLoad(true)
        fetch(
            "/auth/signup", 
            {
                method : "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(credential)
            })
        navigate("/")
    }

    useEffect (
        () => {
            fetch(`auth/checkname/1${username}`)
            .then (response => response.json())
            .then(data => data === "ase" ? usercheck(true) : usercheck(false) )

        },
        [username]
    )

    useEffect (
        () => {
            password===cpass ? passcheck(false): passcheck(true)
        },
        [password,cpass]
    )
    
    useEffect (()=>{
        document.title = 'Teacher Register'
    })

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h4 className="card-header bg-success">User Registration</h4> 
                        <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <img className="mb-3 mt-0 img-thumbnail bg-success" src="logo002.png" alt="Centered Image" width="600" height="100"/>
                            <div className="form-floating mb-3 mt-1">
                                <input required type="text" className="form-control mb-2" id="floatingUsername" placeholder="Username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
                                <label htmlFor="floatingUsername">Username</label>
                                {warning && <div className="text-danger">Username already used</div>}
                            </div>
                            <div className="form-floating mb-3 mt-1">
                                <input type="text" className="form-control mb-2" id="floatingFullname" placeholder="Username" value = {fullname} onChange={(e) => setFullname(e.target.value)}/>
                                <label htmlFor="floatingFullname">Full Name</label>
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="email" className="form-control mb-2" id="floatingEmail" placeholder="name@example.com" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                                <label htmlFor="floatingEmail">Email address</label>
                                <div id="emailHelp" className="form-text text-dark"><li>name@example.com</li></div>
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value = {password} onChange={(e) => setPassw(e.target.value)} required/>
                                <label htmlFor="floatingPassword">Password</label>
                                <div id="passwordHelpBlock" className="form-text fw-bold text-danger">
                                    {/* <li>Your password must be 8-20 characters long</li>
                                    <li>contain letters and numbers</li>
                                    <li>and must not contain spaces</li>
                                    <li>special characters or emoji.</li> */}
                                </div>
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="password" className="form-control" id="floatingCPassword" placeholder="confirmPassword" value = {cpass} onChange={(e) => setcpass(e.target.value)} required/>
                                <label htmlFor="floatingCPassword">Confirm Password</label>
                                {warning2 && <div className="text-danger">Password did not match</div>}
                            </div>
                            <div className="form-floating mb-3 mt-1">
                                <input type="text" className="form-control mb-2" id="floatingSkill" placeholder="Username" value = {skills} onChange={(e) => setSkills(e.target.value)} />
                                <label htmlFor="floatingSkill">Interested Topics</label>
                                <div id="textHelp" className="form-text text-dark">python,css,java, etc.</div>
                            </div>
                            {!warning && !warning2 && <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>}
                            {!(!warning && !warning2) && <button className="w-100 btn btn-lg btn-primary" disabled>Register</button>}
                        </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Register;