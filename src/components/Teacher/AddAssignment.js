import { Link, Navigate, useNavigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


function AddAssignment(){


    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [subscriptionAmount, setSubscriptionAmount] = useState("")
    const [techs, settechs] = useState("")
    const [catas, setCatas] = useState([])
    const [cata, setCata] = useState("")
    const [warning, usercheck] = useState(false)
    const goHome = useNavigate()

    const handleSubmit = () => {
        const credential = { title, description, techs, subscriptionAmount, cata}
        fetch("/course/addcourse", {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFtoken" : Cookies.get("csrftoken")},
            body: JSON.stringify(credential)
        }).then(goHome("/teacher-courses"))
    }

    const getCatas = async() => {
        let res = await fetch("course/getcata")
        let data = await res.json()
        setCatas(data)
    }

    useEffect (
        () => {
            fetch(`course/checkname/1${title}`)
            .then (response => response.json())
            .then(data => data === "ase" ? usercheck(true) : usercheck(false) )
        },
        [title]
    )

    useEffect(
        () => {getCatas()},[]
    )

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Add Assignment</h5>
                    <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                            <label htmlFor="textInput" className="form-label">Assignment Title</label> 
                            <input type="text" className="form-control mb-3" id="textInput" value = {title} onChange={(e) => settitle(e.target.value)}/>                          
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Assignment Details</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value = {description} onChange={(e) => setdescription(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="textInput" className="form-label">Assignment Link</label> 
                            <input type="text" className="form-control mb-3" id="textInput" value = {title} onChange={(e) => settitle(e.target.value)}/>                          
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="textInput" className="form-label">Submission Link</label> 
                            <input type="text" className="form-control mb-3" id="textInput" value = {title} onChange={(e) => settitle(e.target.value)}/>                          
                        </div>

                        <hr/>
                        {!warning && <button className="btn btn-primary">Submit</button>}
                        {warning && <button className="btn btn-primary" disabled>Submit</button>}
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

export default AddAssignment;