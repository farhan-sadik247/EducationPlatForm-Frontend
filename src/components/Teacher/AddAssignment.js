import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


function AddAssignment(){

    const {teacher_id} = useParams()
    const [title, settitle] = useState("")
    const [course, setCourse] = useState("")
    const [description, setdescription] = useState("")
    const [link, setLink] = useState("")
    const [sub_link, setSublink] = useState("")
    const goHome = useNavigate()
    const type = "assignment"


    const getCourse = async() => {
        let res = await fetch(`/course/${teacher_id}/getcourse`)
        let data = await res.json()
        setCourse(data)
    }

    const handleSubmit = async (e) => {
        let course_id = teacher_id
        const credential = { course_id, description, title, sub_link, link, type}
        fetch(
            "/course/addcontent", 
            {
                method : "POST",
                headers: {"Content-Type" : "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
                body: JSON.stringify(credential)
            })
        goHome("/")
    }

    useEffect (()=>{
        getCourse()
    }, [])

    useEffect (()=>{
        document.title = 'Add an Assignment'
    })

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
                            <input type="text" className="form-control mb-3" id="textInput" value = {link} onChange={(e) => setLink(e.target.value)}/>                          
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="textInput" className="form-label">Submission Link</label> 
                            <input type="text" className="form-control mb-3" id="textInput" value = {sub_link} onChange={(e) => setSublink(e.target.value)}/>                          
                        </div>

                        <hr/>
                        <button className="btn btn-primary">Submit</button>
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