import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
function TeacherProfileUpdate(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Profile Update</h5>
                    <div className="card-body">


                        <div className="mb-3 row">
                            <label for="floatingUsername" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="floatingUsername" />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label for="floatingNumber" className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="floatingNumber" placeholder="+8801xxxxxxxxx" />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" />
                            </div>
                        </div> 

                        <div className="mb-3">
                            <label for="dobInput" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="dobInput" />
                        </div>
                        
                        <div className="mb-3">
                        <label for="formFile" className="form-label">Profile Picture</label>
                        <input className="form-control" type="file" id="formFile" />
                        </div>

                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Address</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="mb-3">
                        <select className="form-select" aria-label="Default select example">
                        <option selected>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Others</option>
                        </select>
                        </div>
                        <hr/>
                        <button className="btn btn-primary">Update</button>
                        <div className="mb-3 row">        
                        </div>        
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default TeacherProfileUpdate;