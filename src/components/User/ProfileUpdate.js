import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Sidebar from "./Sidebar";


function ProfileUpdate(){

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
    const [user, setUser] = useState([])
    
    const navigate = useNavigate()

    const handleSubmit = () => {
        const credential = { username, email, password, dob, phone, gender, address}

        fetch("/auth/update", {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
            body: JSON.stringify(credential)
        })
        .then(pic && handleImage())
        .then(navigate("/"))
    }

    const handleImage = () => {
        let formdata = new FormData()
        formdata.append("file", pic)
        console.log(formdata)
        fetch("/auth/getpic", {
            method: "POST",
            headers : {"X-CSRFtoken": Cookies.get("csrftoken")},
            body : formdata
        })
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
            getUser()
        },
        []
    )
    
    const getUser= async () => {
        let res = await fetch("auth/getuser")
        let data = await res.json()
        setUser(data)
    }



    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header bg-info">Profile Update</h5>
                    <div className="card-body">

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                            <label htmlFor="floatingUsername" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="floatingUsername"  placeholder = {user.username} value = {username} onChange={(e) => setUsername(e.target.value)}/>
                            {warning && <div className="text-danger">Username already used</div>}
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            {user.email === "" ? (<input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" value = {email} onChange={(e) => setEmail(e.target.value)}/>)
                            :
                            (<input type="text" className="form-control" id="staticEmail" placeholder={user.email} value = {email} onChange={(e) => setEmail(e.target.value)}/>)}
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="floatingNumber" className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                            {user.phone === "" ?
                                (<input type="text" className="form-control" id="floatingNumber" placeholder="+8801xxxxxxxxx" value = {user.phone} onChange={(e) => setphone(e.target.value)}/>)
                                :
                                (<input type="text" className="form-control" id="floatingNumber" placeholder={user.phone} value = {user.phone} onChange={(e) => setphone(e.target.value)}/>)}
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
                            <input type="date" className="form-control" id="dobInput" value = {user.dob} onChange={(e) => setdob(e.target.value)}/>
                        </div>
                        
                        <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Profile Picture</label>
                        <br/>
                        <input className="form-control"  accept = "image/*" type="file" id="formFile" onChange={(e) => setpic(e.target.files[0])}/>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value = {user.address} onChange={(e) => setadd(e.target.value)}></textarea>
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
                        {!warning && <button className="w-100 btn btn-lg btn-primary" type="submit">Update</button>}
                        {warning && <button className="w-100 btn btn-lg btn-primary" disabled>Update</button>}
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

export default ProfileUpdate;