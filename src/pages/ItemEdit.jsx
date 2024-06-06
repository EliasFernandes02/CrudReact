import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import axios from "axios"
const EditProduct = () => {
const {id} = useParams()
const [title,setTitle] = useState("")
const [price,setPrice] = useState("")
const [promotion,setPromotion] = useState("")
useEffect(() => {
  axios.get(`https://6657b1b55c3617052645998a.mockapi.io/products/products/${id}`)
  .then(response => setTitle(response.data.title))
  .catch(error=>console.log(error))
},[]);

function handleSubmit(event) {
  event.preventDefault();
  axios.put(`https://6657b1b55c3617052645998a.mockapi.io/products/products/${id}`)
}

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Promotion</label>
          <input
            type="text"
            className="form-control"
            value={promotion}
            onChange={(event) => setPromotion(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
