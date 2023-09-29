import React, { useState, useEffect } from "react";
import styles from "./Categories.module.css";
import categoriesData from "../../../data/categories.json";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const topCategories = categoriesData.slice(0, 4);
    setCategories(topCategories);
  }, []);

  return (
    <>
      <h1> List of most popular categories </h1>
      <div className={styles.categoryGrid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryCard}>
            <h2 className={styles.categoryName}>{category.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
