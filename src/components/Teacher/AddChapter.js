import { Link, Navigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState } from "react";


function AddChapter(){


    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [techs, settechs] = useState("")
    const [warning, usercheck] = useState(false)
    const [home, goHome] = useState(false)



    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                    <h5 className="card-header">Add Chapter</h5>
                    <div className="card-body">

                        <div className="mb-3 row">
                            <label htmlFor="textInput" className="col-sm-2 col-form-label">Course Title</label> 
                            <input type="text" className="form-control mb-3" id="textInput" />
                            {/* {warning && <div className="text-danger">Course name already used</div>}                            */}
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Course Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupFile01">Upload Content video</label>
                        <input type="file" className="form-control" id="inputGroupFile01" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Remarks</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"  placeholder="This video or content is based on (particular topic)" rows="3"></textarea>
                        </div>

                        <hr/>
                        <button className="btn btn-primary">Submit</button>
                        <div className="mb-3 row">        
                        </div>        
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
}

export default AddChapter;