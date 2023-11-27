import { Link, Navigate, useNavigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
// import { useEffect ,useState } from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


function CourseCategory(){


    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [warning, usercheck] = useState(false)
    const goHome = useNavigate()

    const handleSubmit = () => {
        const credential = { title, description}
        fetch("/course/addcatagory", {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFtoken" : Cookies.get("csrftoken")},
            body: JSON.stringify(credential)
        })}

    useEffect (
        () => {
            fetch(`course/cataname/1${title}`)
            .then (response => response.json())
            .then(data => data === "ase" ? usercheck(true) : usercheck(false) )

        },
        [title]
    )

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Course Category</h5>
                    <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label htmlFor="textInput" className="form-label">Category Title</label> 
                            <input type="text" className="form-control" id="textInput" value = {title} onChange={(e) => settitle(e.target.value)}/>
                            {warning && <div className="text-danger">Course name already used</div>}                           
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Category Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value = {description} onChange={(e) => setdescription(e.target.value)}></textarea>
                        </div>

                        <hr/>
                        {!warning && <button className="btn btn-primary">Submit</button>}
                        {warning && <button className="btn btn-primary" disabled>Submit</button>}
                        <div className="mb-3 row">        
                        </div>        
                    </div>
                    </form>
                </div>
                </section>
            </div>
        </div>
    );
}

export default CourseCategory;