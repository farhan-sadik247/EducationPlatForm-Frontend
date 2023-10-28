import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">
      {/* Latest Courses */}
      <h3 className="border-bottom pb-2 md-4">Latest Courses<a href="#" className="float-end" style={{ color: 'blue', fontSize: '18px' }} >See All</a></h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
          <Link to="/details/1"><img src="logo001.png" className="card-img-top" alt="..." /></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/details/1">Course Title</Link></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div> 
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course Title</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course Title</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div>
        <div className="col-md-3">
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

      {/* Popular Courses */}
      <h3 className="border-bottom pb-3 md-3 mt-5">Popular Courses<a href="#" className="float-end" style={{ color: 'blue', fontSize: '18px' }} >See All</a></h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course Title</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div> 
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course Title</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course Title</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Course Title</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div>   
      </div>
      {/* End Popular Courses */} 

      {/* Featured Teacher */}
      <h3 className="border-bottom pb-2 md-4">Featured Teacher<a href="#" className="float-end" style={{ color: 'blue', fontSize: '18px' }} >See All</a></h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Teacher Name</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div> 
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Teacher Name</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Teacher Name</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className=" card" style={{ color: 'blue', fontSize: '18px' }}>
            <a href="#"><img src="logo001.png" className="card-img-top" alt="..." /></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Teacher Name</a></h5>
              {/* <a href="#" className="btn btn-primary">Details</a> */}
            </div>
          </div>
        </div>   
      </div>
      {/* End Featured Teacher */}   

      {/* Student Testimonial */}
      <h3 className="border-bottom pb-2 md-4">Student Testimonial</h3>
      <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
      </div>
      <div className="carousel-item">
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
      </div>
      <div className="carousel-item">
      <figure class="text-center">
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
      </figure>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>      
      {/* End Featured Teacher */}       
    </div>
  );
}

export default Home;