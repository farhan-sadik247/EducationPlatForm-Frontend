import { useState } from "react";
import SearchPageSidebar from "./SearchPageSidebar";

function AfterSearchPage(props){

    const [course, setCourse] = useState([])

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <SearchPageSidebar course= {setCourse} search = {props.search}/>
                </aside>
                <section className="col-md-9">
                <div className="d-flex align-items-center px-1">
                    {/* <img
                        id="userProfileImageDropdown"
                        src="/logo001.png"
                        alt="User Profile"
                        className="rounded border-0 object-fit-cover mr-2" style={{ width: '200px', height: '200px' }}
                    /> */}

                    <div className="container-fluid">
                        <table className="table">
                        <thead>
                            <tr>
                            <th>Picture</th>
                            <th>Course Details</th>
                            <th>Price</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {course.map((name, index) =>
                            (<tr>
                            <td>
                                <img src="/logo001.png" className="rounded border-0 object-fit-cover mr-2" style={{ width: '200px', height: '200px' }} alt="Course Image" />
                            </td>
                            <td>
                                <div className="course-details">
                                <h3>{course[index].title}</h3>
                                <p>{course[index].details}</p>
                                {/* <p>Created by: John Doe</p> */}
                                <p>Rating: {course[index].rating}</p>
                                </div>
                            </td>
                            <td>
                                <div className="price-block">
                                <span>${course[index].price}</span>
                                </div>
                            </td>
                            <td>
                            <button className="btn btn-primary">Enroll Now</button>
                            </td>
                            </tr>))}
                            <tr>
                            <td>
                            <img src="/logo001.png" className="rounded border-0 object-fit-cover mr-2" style={{ width: '200px', height: '200px' }} alt="Course Image" />
                            </td>
                            <td>
                                <div className="course-details">
                                <h3>Another Course Name</h3>
                                <p>Course Description</p>
                                <p>Created by: Jane Doe</p>
                                <p>Rating: 4.8</p>
                                </div>
                            </td>
                            <td>
                                <div className="price-block">
                                <span>$29.99</span>
                                </div>
                            </td>
                            <td>
                            <button className="btn btn-primary">Enroll Now</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                    </section>
            </div>
        </div>
    );
}
export default AfterSearchPage;
