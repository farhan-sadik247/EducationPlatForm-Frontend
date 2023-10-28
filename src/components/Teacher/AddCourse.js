import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
function AddCourse(){
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

                        <div className="mb-3 row">
                            <label for="textInput" className="col-sm-2 col-form-label">Course Title</label> 
                            <input type="text" className="form-control mb-3" id="textInput" />                           
                        </div>

                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Course Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="input-group mb-3">
                        <label className="input-group-text" for="inputGroupFile01">Upload Content</label>
                        <input type="file" className="form-control" id="inputGroupFile01" />
                        </div>

                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Technologies</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default AddCourse;