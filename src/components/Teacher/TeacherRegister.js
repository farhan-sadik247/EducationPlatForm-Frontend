import { Link } from "react-router-dom";

function TeacherLogin(){
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
                                <label for="floatingUsername">Username</label>
                            </div>
                            <div className="form-floating mb-3 mt-1">
                                <input type="text" className="form-control mb-2" id="floatingUsername" placeholder="FullName"/>
                                <label for="floatingUsername">Full Name</label>
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                                <div id="emailHelp" className="form-text text-dark"><li>name@example.com</li></div>
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                                <div id="passwordHelpBlock" className="form-text fw-bold text-danger">
                                    <li>Your password must be 8-20 characters long</li>
                                    <li>contain letters and numbers</li>
                                    <li>and must not contain spaces</li>
                                    <li>special characters or emoji.</li>
                                </div>
                            </div>
                            {/* <div className="form-floating mb-3 mt-1">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="confirmPassword"/>
                                <label for="floatingPassword">Confirm Password</label>
                            </div> */}

                            <div className="form-floating mb-3 mt-1">
                                <input type="text" className="form-control mb-2" id="floatingQualification" placeholder="Qualification"/>
                                <label for="floatingUsername">Qualification</label>
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="number" className="form-control mb-2" id="floatingMobileNumber" placeholder="MobileNumber"/>
                                <label for="floatingUsername">Mobile number</label>
                            </div>

                            <div className="form-floating mb-3 mt-1">
                                <input type="text" className="form-control mb-2" id="floatingUsername" placeholder="Skills"/>
                                <label for="floatingInput">Skills</label>
                                <div id="textHelp" className="form-text text-dark">python,css,java, etc.</div>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                        </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default TeacherLogin;
