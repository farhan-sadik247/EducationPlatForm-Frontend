import { Link } from "react-router-dom";

function AllCourses() {
  return(
    <div className="container mt-4">
    {/* <> */}
    {/* Latest Courses */}
    <h3 className="border-bottom pb-2 md-4"> All Latest Courses</h3>
    <div className="row mb-4">
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="logo001.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Course Title</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="logo001.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Course Title</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="logo001.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Course Title</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="logo001.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Course Title</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
        <Link to="/details/1"><img src="logo001.png" className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="/details/1">Course Title</Link></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div> 
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course Title</a></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course Title</a></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course Title</a></h5>
            {/* <a href="#" className="btn btn-primary">Details</a> */}
          </div>
        </div>
      </div>   
    </div>
    {/* End Latest Courses */}
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

export default AllCourses