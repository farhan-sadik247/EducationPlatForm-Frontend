import { Link } from "react-router-dom";

function TeacherLogin(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h4 className="card-header bg-success">Teacher Login</h4> 
                        <div className="card-body">
                        <form>
                            <img className="mb-3 mt-0 img-thumbnail bg-success" src="logo002.png" alt="" width="600" height="200"/>
                            {/* <h1 className="h3 mb-3 fw-normal">Please sign in</h1> */}
                            {/* <div className="form-floating">
                            <input type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                            </div> */}
                            <div className="form-floating">
                            <input type="text" className="form-control mb-2" id="floatingUsername" placeholder="Username"/>
                            <label for="floatingInput">Username</label>
                            </div>
                            <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                            </div>
                            <div className="checkbox mb-3 mt-1">
                                <input type="checkbox" className="from-check-input" id="exampleCheck1" />
                                <label className="from-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default TeacherLogin;
