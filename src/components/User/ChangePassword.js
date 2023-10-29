import { Link, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import djserver from "../..";


function ChangePassword(){

    const [pass1, setpass1] = useState("")
    const [pass2, setpass2] = useState("")
    const [home, goHome] = useState(false)
    const [warning, usercheck] = useState(false)

    if (home){
        return <Navigate to = "/"/>;
    }


    const handleSubmit = () => {
        const credential = { pass1, pass2}
        fetch(djserver + "auth/change_pass", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credential)})
        .then(res => {return res.json()})
        .then(data => {
            if (data === "g"){usercheck(true)}   
            if (data === "gg") {goHome(true)}  
        })
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Change Password</h5>
                    <div className="card-body">

                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">New Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" value = {pass1} onChange={(e) => setpass1(e.target.value)}/>
                            </div>
                        </div>        

                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" value = {pass2} onChange={(e) => setpass2(e.target.value)}/>
                            {warning && <div className="text-danger">Username already used</div>}
                            </div>
                        </div>  
                        <hr/>
                        <button className="btn btn-primary" onClick={handleSubmit}>Update</button>
                        <div className="mb-3 row">        
                        </div>       
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default ChangePassword;