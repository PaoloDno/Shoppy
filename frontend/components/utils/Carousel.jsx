import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryBar from "./CategoryBar.jsx";
import ProductListings from "./ProductList";
import "./styles/HeroStyles.css"


function ProductDetail() {
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.get(`http://localhost:1212/api/getProd`);
        if (!Array.isArray(productResponse.data.products)) {
          throw new Error('Product data is not in the expected format');
        }
        setProducts(productResponse.data.products);
    
        const filteredCategories = ['All', ...new Set(productResponse.data.products.map(product => product.category))]
        .filter(category => category);
        setCategories(filteredCategories);
    
    
        setProductList(productResponse.data.products); // Set initial product list
        
        console.log(products, categories, productList);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    

    fetchData();
  }, []);

  const filterItems = (category) => {
    if (category === 'All') {
      setProductList(products);
    } else {
      const newList = products.filter((product) => product.category === category);
      setProductList(newList);
      
      console.log(products, categories, productList);
    }
  };

  return (
    <div className="feature-product-section">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <div className="category-bar">
            <CategoryBar categories={categories} filterItems={filterItems} />
          </div>
          <div className="product-section">
            <ProductListings productList={productList} />
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
