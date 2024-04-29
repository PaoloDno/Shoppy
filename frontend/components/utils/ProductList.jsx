import React from 'react';
import "./styles/productListSection.css"


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <div className="card-text">
      <span><h3>{product.name}</h3></span>
      <span><p>Price: P </p><p>{product.price}</p></span>
      </div>
    </div>
  );
};

const ProductListings = ({ productList }) => {
  // Shuffle the productList array
  const shuffledProducts = productList.sort(() => Math.random() - 0.5);
  // Get up to 10 random items
  const randomProducts = shuffledProducts.slice(0, 15);

  return (
    <div className="product-listings-sections">
      {randomProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};


export default ProductListings;