import React, { useState } from 'react';

function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    quantity: 0,
    price: 0,
    feature_img: '',
    other_imgs: [],
    category: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  
    // Handle form submission, e.g., send data to backend
    try {
      const response = await fetch('http://localhost:1212/api/prodForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setMessage(data.message);
    } catch (error) {
      console.log('Error:', error);
    }
    };

  return (
    <div>
      <h1>Product Form</h1>
      <div>{message}</div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <label>
          Feature Image:
          <input type="text" name="feature_img" value={formData.feature_img} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;
