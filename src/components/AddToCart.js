import React, { useState } from 'react';
import './AddToCart.css';
const CartItem = ({ item, onSelect }) => (
  <tr>
    <td>
      <input type="checkbox" onChange={onSelect} />
    </td>
    <td>
      <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px' }}/>
    </td>
    <td>{item.name}</td>
    <td>{item.details}</td>
    <td>${item.price}</td>
  </tr>
);

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/logo001.png',
      name: 'Product 1',
      details: 'This is a description of product 1.',
      price: 19.99,
    },
    {
      id: 2,
      image: '/logo001.png',
      name: 'Product 2',
      details: 'This is a description of product 2.',
      price: 49.99,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (itemId, checked) => {
    if (checked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  const proceedToPayment = () => {
    // Implement your payment processing logic here
    console.log(`Selected items for payment:`, selectedItems);
  };

  return (
    <div className="container card-header mt-4">
    <div className="row">
    <section className="col-md-9">
    <div className="d-flex align-items-center px-1">
    <div className="container-fluid">
    <div className="card-body">
    <div className="cart-page">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Image</th>
            <th className=''>Name</th>
            <th className=''>Details</th>
            <th className=''>Price</th>
            <hr/>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onSelect={(checked) => handleSelectItem(item.id, checked)} />
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        <strong>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</strong>
      </div>
      <button className='btn btn-success' disabled={!selectedItems.length} onClick={proceedToPayment}>
        Proceed to Payment
      </button>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    </div>
  );
};

export default AddToCart;
