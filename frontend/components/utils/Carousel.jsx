import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryBar from "./CategoryBar.jsx";
import ProductListings from "./ProductList";

function ProductDetail() {
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product details
        const productResponse = await axios.get(`http://localhost:1212/api/getProd`);
        setProducts(productResponse.data);

        // Fetch categories
        const categoriesResponse = await axios.get(`http://localhost:1212/api/a`);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
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
    }
  };

  useEffect(() => {
    // Update categories based on the current product list
    const updatedCategories = ['All', ...new Set(products.map((product) => product.category))];
    setCategories(updatedCategories);
  }, [products]);

  return (
    <div className="feature-product-section">
      <div className="category-bar">
        <CategoryBar categories={categories} filterItems={filterItems} />
      </div>
      <div className="product-section">
        <ProductListings productList={productList} />
      </div>
    </div>
  );
}

export default ProductDetail;
