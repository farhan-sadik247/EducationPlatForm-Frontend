import { Link, useNavigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


function AddCourse(){


    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [techs, settechs] = useState("")
    const [warning, usercheck] = useState(false)
    const goHome = useNavigate()

    const handleSubmit = () => {
        const credential = { title, description, techs}
        fetch("/course/addcourse", {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFtoken" : Cookies.get("csrftoken")},
            body: JSON.stringify(credential)
        })
    }

    useEffect (
        () => {
            fetch(`course/checkname/1${title}`)
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
                    <h5 className="card-header">Add Course</h5>
                    <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    {/* Category */}
                    <div className="mb-3 row">
                            <label htmlFor="title" className="form-label">Category</label> 
                            <select name="category" className="form-control">
                                
                            </select>                         
                        </div>
                    {/* Category end */}

                        <div className="mb-3 row">
                            <label htmlFor="textInput" className="form-label">Course Title</label> 
                            <input type="text" className="form-control mb-3" id="textInput" value = {title} onChange={(e) => settitle(e.target.value)}/>
                            {warning && <div className="text-danger">Course name already used</div>}                           
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Course Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value = {description} onChange={(e) => setdescription(e.target.value)}></textarea>
                        </div>

                        {/* <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupFile01">Upload Featured Image</label>
                        <input type="file" className="form-control" id="inputGroupFile01" />
                        </div> */}

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Technologies</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"  placeholder="JavaScript,Python,PHP,HTML etc" rows="3" value = {techs} onChange={(e) => settechs(e.target.value)}></textarea>
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

export default AddCourse;