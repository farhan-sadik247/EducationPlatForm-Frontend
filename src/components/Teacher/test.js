import { useEffect, useState } from "react";
import { Link, resolvePath, useNavigate, useParams } from "react-router-dom";




function Test(){
    const goHome = useNavigate()

    const {para} = useParams()


    const [username, setusername] = useState("")

    useEffect (
        () => {
            fetch(`auth/test`)
            .then (response => response.json())
            .then(data => data === "ase" ? (true) : (false) )

        },
        [username]
    )

    const handleSubmit = () => {
        // const credential = { pass1, pass2}
        // fetch("/auth/change_pass", {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(credential)})
        // .then(res => {return res.json()})
        // .then(data => {
        //     if (data === "g"){usercheck(true)}   
        //     if (data === "gg") {goHome("/")}  
        // })
        let asd = "asdd"
        fetch("/auth/test")
        .then(res => {
            return res.json()})
        .then(data => {
            console.log(data)
        })
    }

    return(
        // <div className="card">
            
        //     <div className="list-group list-group-flush">
        //         <Link to="/teacher-dashboard" className="list-group-item list-group-item-action"><center>Dashboard{para}</center></Link>
        //         <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
        //     </div>
        // </div>

        <div className="form-floating mb-3 mt-1">
        <input required type="text" className="form-control mb-2" id="floatingUsername" placeholder="Username"/>
        <label htmlFor="floatingUsername">Username {username}</label>
        </div>
    );
}

export default Test;