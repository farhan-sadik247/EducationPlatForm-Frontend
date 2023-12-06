import { useState } from "react";
import React,{ Link } from "react-router-dom";
import './AddToCart.css';

function AddToCart(){
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
        <hr/>
        </tr>
      </thead>
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
          </tr>
      </tbody>
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
          </tr>
      </tbody>
    </table>
    <div className="cart-total">
    <strong className="float-start">Total: $</strong>
     
    <button className='btn btn-success'>
       Proceed to Payment
    </button>
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