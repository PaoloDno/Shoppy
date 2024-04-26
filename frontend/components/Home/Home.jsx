import React from 'react';

function Homepage() {
  return (
    <div>
      <header>
        <h1>Welcome to Our E-commerce Store</h1>
      </header>
      <main>
        <section>
          <h2>Featured Products</h2>
          {/* Display featured products here */}
          <div className="product-list">
            {/* Example product */}
            <div className="product">
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button>Add to Cart</button>
            </div>
            {/* Repeat for other featured products */}
          </div>
        </section>
        <section>
          <h2>Latest Arrivals</h2>
          {/* Display latest arrivals here */}
          <div className="product-list">
            {/* Example product  
            <div className="product">
              <img src="product2.jpg" alt="Product 2" />
              <h3>Product Name</h3>
              <p>Description of the product goes here.</p>
              <button>Add to Cart</button>
            </div> */}
            {/* Repeat for other latest arrivals */}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Our E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;