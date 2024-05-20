import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductListing();
  }, []);

  const ProductListing = async () => {
    try {
      const result = await axios.get("https://dummyjson.com/products");
      console.log(result);
      if (result.status === 200) {
        setProducts(result.data.products);
      } else {
        console.log("Error fetching products");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3>Product Listing</h3>
      {products.length > 0 ? (
        <>
          {products.map((product) => {
            const { brand, category, description, price, thumbnail, id, title } = product;
            return (
              <div key={id}>
                <h4>ID: {id}</h4>
                <h4>Title: {title}</h4>
                <h4>Description: {description}</h4>
                <h4>Price: ${price}</h4>
                <h4>Category: {category}</h4>
                <h4>Brand: {brand}</h4>
                <img src={thumbnail} alt={title} />
              <button >
                <Link to={`${brand}/${id}`}>
                click to see</Link>
                </button>
              
              </div>
            );
          })}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}
