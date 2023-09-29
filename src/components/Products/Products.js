import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";
import productsData from "../../../data/products.json";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <h1>Products </h1>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Products;
