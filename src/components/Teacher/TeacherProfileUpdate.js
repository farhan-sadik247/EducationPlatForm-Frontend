import { Link, Navigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState } from "react";


function TeacherProfileUpdate(){

    const [username, setUsername] = useState("")
    const [phone, setphone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassw] = useState("")
    const [dob, setdob] = useState("")
    // const [skills, setSkills] = useState("")
    const [gender, setgender] = useState("")
    const [pic, setpic] = useState("")
    const [warning, usercheck] = useState(false)
    const [address, setadd] = useState(false)
    
    const [home, goHome] = useState(false)

    if (home){
        return <Navigate to = "/"/>;
    }

    const handleSubmit = () => {
        const credential = { username, email, password, dob, phone, pic, gender}
        fetch("/auth/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credential)
        })
        .then(res => {return res.json()})
        .then(data => {
            if (data === "hacker"){usercheck(true)}
            else{usercheck(false)}
            if (data === "success"){goHome(true)}
})}


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
                            <label htmlFor="floatingUsername" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="floatingUsername" value = {username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="floatingNumber" className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="floatingNumber" placeholder="+8801xxxxxxxxx" value = {phone} onChange={(e) => setphone(e.target.value)}/>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" value = {password} onChange={(e) => setPassw(e.target.value)}/>
                            </div>
                        </div> 

                        <div className="mb-3">
                            <label htmlFor="dobInput" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" id="dobInput" value = {dob} onChange={(e) => setdob(e.target.value)}/>
                        </div>
                        
                        <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Profile Picture</label>
                        <input className="form-control" type="file" id="formFile" value = {pic} onChange={(e) => setpic(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value = {address} onChange={(e) => setadd(e.target.value)}></textarea>
                        </div>

                        <div className="mb-3">
                        <select className="form-select" aria-label="Default select example" onSelect={(e) => setgender(e.target.value)}>
                        <option selected>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                        </select>
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

export default TeacherProfileUpdate;