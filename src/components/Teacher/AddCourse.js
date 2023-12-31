import { Link, Navigate, useNavigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


function AddCourse(){


    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [subscriptionAmount, setSubscriptionAmount] = useState("")
    const [techs, settechs] = useState("")
    const [catas, setCatas] = useState([])
    const [cata, setCata] = useState("")
    const [warning, usercheck] = useState(false)
    const [pic, setpic] = useState("")
    const goHome = useNavigate()

    const handleSubmit = async () => {
        const credential = { title, description, subscriptionAmount, techs, cata }

        fetch("/course/addcourse", {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
            body: JSON.stringify(credential)
        })
        .then(pic && handleImage())
        .then(goHome("/teacher-course"))
    }

    const handleImage = () => {
        let formdata = new FormData()
        formdata.append("file", pic)
        console.log(formdata)
        fetch(`/course/getpic/${title}`, {
            method: "POST",
            headers : {"X-CSRFtoken": Cookies.get("csrftoken")},
            body : formdata
        })
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
                    <h5 className="card-header">Add Course</h5>
                    <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    {/* Category */}
                    <div className="mb-3 row">
                        <label htmlFor="title" className="form-label">Category</label> 
                        <select name="category" className="form-control"  onChange={(e)=> {setCata(e.target.value)}}>
                            <option value="" ></option>
                            {catas.map((name, index) =>
                                <option value={catas[index].id} key = {index}>{catas[index].title}</option> )}
                            
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

                        <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Upload Featuredd Image</label>
                        <input className="form-control" accept = "image/*" type="file" id="formFile" onChange={(e) => setpic(e.target.files[0])}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Course Subscription Amount</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter amount" value={subscriptionAmount} onChange={(e) => setSubscriptionAmount(e.target.value)} />
                        </div>

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