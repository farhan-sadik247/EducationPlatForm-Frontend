import { Link } from "react-router-dom";

function PopularTeachers() {
  return(
    <div className="container mt-4">
    {/* <> */}
    {/* Popular Courses */}
    <h3 className="border-bottom pb-2 md-4"> All Popular Teachers</h3>
    <div className="row mb-4">
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/teacher-detail/1"><img src="teacher.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                
              </div>
            </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="teacher.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Teacher Name</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                
              </div>
            </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="teacher.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Teacher Name</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                
              </div>
            </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="teacher.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Teacher Name</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                
              </div>
            </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="teacher.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Teacher Name</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                
              </div>
            </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <a href="#"><img src="teacher.png" className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                
              </div>
            </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <a href="#"><img src="teacher.png" className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
            <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                
              </div>
            </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <a href="#"><img src="teacher.png" className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Teacher Name</a></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
              <div className="card-footer">
              <div className="title">
                <span className="text-dark">Rating: 4.5/5</span>
                
              </div>
            </div>
        </div>
      </div>   
    </div>
    {/* End Popular Courses */}
    {/* </> */}
    {/* Pagination Start */}
    <nav aria-label="Page navigation example mt-5">
      <ul className="pagination justify-content-center">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
    {/* Pagination End */}
    </div>
  );
}

export default PopularTeachers