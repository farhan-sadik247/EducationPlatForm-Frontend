import { Link, useNavigate, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
// import { useState } from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function AddChapter(){


    const {courseid}=useParams();
    
    const [course, setCourse] = useState("")
    const [description, setdescription] = useState("")
    const [title, setTitle] = useState("")
    const [remark, setRemark] = useState("")
    const [link, setLink] = useState("")
    const goHome = useNavigate()
    const {course_id} = useParams()
    const type = "chapter"

    const getCourse = async() => {
        let res = await fetch(`/course/${course_id}/getcourse`)
        let data = await res.json()
        setCourse(data)
    }

    const handleSubmit = async (e) => {
        const credential = { course_id, description, title, remark, link, type}
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
        document.title = 'Add new chapter'
    })

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Add Chapter for {course.title}</h5>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                            <label htmlFor="textInput" className="col-sm-2 col-form-label">Chapter Title</label> 
                            <input type="text" className="form-control mb-3" id="textInput" value = {title} onChange={(e) => setTitle(e.target.value)}/>
                            {/* {warning && <div className="text-danger">Course name already used</div>}                            */}
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Chapter Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value = {description} onChange={(e) => setdescription(e.target.value)}></textarea>
                        </div>

                        {/* <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupFile01">Upload Content video</label>
                        <input type="file" className="form-control" id="inputGroupFile01" />
                        </div> */}

                        <div className="mb-3 row">
                            <label htmlFor="textInput" className="col-sm-3 col-form-label">Upload Video Content</label> 
                            <input type="text" className="form-control" id="textInput" value = {link} onChange={(e) => setLink(e.target.value)}/>
                            <label id="textInput" className="col-sm col-form-label">E.g.: https://www.youtube.com/embed/pRybm9lXW2c?si=OueAUQgS08F2FtFx</label>
                        </div>



                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Remarks</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"  placeholder="This video or content is based on (particular topic)" rows="3" value = {remark} onChange={(e) => setRemark(e.target.value)}></textarea>
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

export default AddChapter;