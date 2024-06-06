import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = () => {
  const [products,setProducts] = useState([])

  useEffect(() => {
    axios.get('https://6657b1b55c3617052645998a.mockapi.io/products/products')
    .then(response => setProducts(response.data))
    .catch(error=>console.log(error))
  },[]);

  function deleteProduct(id) {
    useEffect(() => {
      axios.delete(`https://6657b1b55c3617052645998a.mockapi.io/products/products/${id}`)
      .then(() => setProducts(products.filter(product=> product.id !==id)))
    },[]);
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Product</Link>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Promotion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.promotion}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-warning mr-2">Edit</Link>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
