import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./TopProducts.module.css";
import productsData from "../../../data/products.json";

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const topProducts = productsData.slice(0, 4);
    setProducts(topProducts);
  }, []);

  return (
    <>
      <h1>Hot products</h1>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default TopProducts;
