import { useEffect, useState } from "react";
import React,{ Link } from "react-router-dom";
import './AddToCart.css';
import Cookies from "js-cookie";

function AddToCart(){

  let [courses, setCourses] = useState({"course":[], "teacher":[]})
  let [price, setPrice] = useState(0)
    let [url, setLink] = useState(0)

    useEffect(
        () => {getCourses()}, []
    )
    let getPrice = (data) => {
        let total = 0
        data.course.map((name, index) => (
            total = total + ((data.course[index].price*(100-Number(data.course[index].discount))/100))
        ))
        setPrice(total)
        let link = ""
        data.course.map((name, index) => {
            link = link.concat("$")
            link = link.concat(data.course[index].id)
    })
        setLink(link)
    }

    let getCourses = async () => {

        let response = await fetch(`/course/cartCourses`)
        let data = await response.json()
        setCourses(data)
        getPrice(data)
    }

    const handleDelete = async (index) =>{
        let credential = {index}
        console.log(credential)
        fetch(`/course/removefav`, {
            method: "POST",
            headers: {"Content-Type": "application/json", "X-CSRFtoken": Cookies.get("csrftoken")},
            body: JSON.stringify(credential)
        })
        window.location.reload()
    }
    useEffect (()=>{
        document.title = 'My Cart'
    }, [])

  return(
    <div className="container card-header mt-4">
    <div className="row">
    <section className="col-md-9">
    <div className="d-flex align-items-center px-1">
    <div className="container-fluid">
    <div className="card-body">
    <div className="cart-page">
    <table className="table">
      <thead>
        <tr>
        <th>Select</th>
        <th>Image</th>
        <th className=''>Name</th>
        <th className=''>Price</th>
        <th className=''>Action</th>
        <hr/>
        </tr>
      </thead>
      {courses.course.map((name, index) =>
      (<tbody key = {index}>
          <tr>
          <td>
          <input type="checkbox" />
          </td>
          <td>
          {courses.course[index].pic !== null && <img src={`http://127.0.0.1:8000/${courses.course[index].pic}`} className="rounded border-0 object-fit-cover mr-2" style={{ width: '200px', height: '200px' }} alt="Course Image" />}
          {courses.course[index].pic === null && <img src="/logo001.png" className="rounded border-0 object-fit-cover mr-2" style={{ width: '200px', height: '200px' }} alt="Course Image" />}
          </td>
          <td>
              <div className="course-details">
              <h3>{courses.course[index].title}</h3>
              <p>{courses.course[index].details}</p>
              <p>Created by: {courses.teacher[index].fullname}</p>
              <p>Rating: {courses.course[index].rating}</p>
              </div>
          </td>
          <td>
              <div className="price-block">
              {Number(courses.course[index].discount) === 0 && <span>${courses.course[index].price}</span>}
              {Number(courses.course[index].discount) !== 0 && <><span className="text-decoration-line-through">${courses.course[index].price}</span><p>${(courses.course[index].price*(100-Number(courses.course[index].discount))/100)}</p></>}
              </div>
          </td>
          <td>  
            <div className="remove">
                <button className="btn btn-warning">Remove</button> 
            </div>
          </td>
          </tr>
      </tbody>))}
      <tbody>
          <tr>
          <td>
          <input type="checkbox" />
          </td>
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
          <td>  
            <div className="remove">
            <button className="btn btn-warning">Remove</button> 
            </div>
            
          </td>
          </td>
          </tr>
      </tbody>
    </table>
    <div className="cart-total">
    <strong className="float-start">Total: ${price}</strong>
     
    <Link to={`/payment-gateway/${price}${url}`}>
    <button className='btn btn-success'>
       Proceed to Payment
    </button>
    </Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    </div>
  );
}
export default AddToCart;