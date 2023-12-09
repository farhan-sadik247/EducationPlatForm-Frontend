import { Link, useNavigate, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


function EditCourse(){


    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [subscriptionAmount, setSubscriptionAmount] = useState("")
    const [discount, setDiscount] = useState("")
    const [warning, usercheck] = useState(false)
    const [course, setCourse] = useState("")
    const goHome = useNavigate()
    const {course_id} = useParams()

    const handleSubmit = () => {
        const credential = { title, description, subscriptionAmount, discount}
        fetch(`/course/editcourse/${course_id}`, {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFtoken" : Cookies.get("csrftoken")},
            body: JSON.stringify(credential)
        })
        // goHome(`/details/${course.id}`)
    }


    let getCourse = async () => {
        let response = await fetch(`/course/${course_id}/getcourse`)
        let data = await response.json()
        setCourse(data)
    }

    useEffect (
        () => {
            fetch(`/course/checkname/1${title}`)
            .then (response => response.json())
            .then(data => data === "ase" ? usercheck(true) : usercheck(false) )
        },
        [title]
    )

    useEffect(
        () => {getCourse()},[]
    )

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Edit Course</h5>
                    <div className="card-body">
                    <form onSubmit={handleSubmit}>

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
                            <label htmlFor="exampleFormControlInput1" className="form-label">Course Subscription Amount</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter amount" value={subscriptionAmount} onChange={(e) => setSubscriptionAmount(e.target.value)} />
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="floatingNumber" className="col-sm-2 col-form-label" > <i className="fa-solid fa-percent"></i>Discount</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="floatingNumber" placeholder="10%" value = {discount} onChange={(e) => setDiscount(e.target.value)}/>

                            </div>
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

export default EditCourse;