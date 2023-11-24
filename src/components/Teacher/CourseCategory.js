import { Link, Navigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
// import { useEffect ,useState } from "react";
import { useEffect, useState } from "react";


function CourseCategory(){


    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [techs, settechs] = useState("")
    const [warning, usercheck] = useState(false)
    const [home, goHome] = useState(false)

    if (home){
        return <Navigate to = "/"/>;
    }

    const handleSubmit = () => {
        const credential = { title, description, techs}
        fetch("/course/addCourse", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credential)
        })
        .then (res => {return res.json()})
        .then(data => {
            if (data === "cf"){usercheck(true)}
            else {usercheck(false)}
            if (data === "cgg"){goHome(true)}
        })

    }
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Course Category</h5>
                    <div className="card-body">

                        <div className="mb-3 row">
                            <label for="textInput" className="form-label">Category Title</label> 
                            <input type="text" className="form-control" id="textInput" value = {title} onChange={(e) => settitle(e.target.value)}/>
                            {warning && <div className="text-danger">Course name already used</div>}                           
                        </div>

                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Category Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value = {description} onChange={(e) => setdescription(e.target.value)}></textarea>
                        </div>

                        <hr/>
                        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        <div className="mb-3 row">        
                        </div>        
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default CourseCategory;