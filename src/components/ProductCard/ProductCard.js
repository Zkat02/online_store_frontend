import React from "react";
import styles from "./ProductCard.module.css";
import img from "../../img/sale1.jpg";

const ProductCard = ({
  name,
  productImg = img,
  description,
  price,
  categoryName,
  sellerName,
}) => {
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-image"]}>
        <img src={productImg} />
        <h2 className={styles["product-name"]}>{name}</h2>
      </div>
      <div className={styles["product-details"]}>
        <p className={styles["product-description"]}>{description}</p>
        <p className={styles["product-price"]}>${price.toFixed(2)}</p>
        <p className={styles["product-category"]}>{categoryName}</p>
        <p className={styles["product-seller"]}>{sellerName}</p>
        <div className={styles["product-buttons"]}>
          <button className={styles["add-to-cart-button"]}>Add to Cart</button>
          <button className={styles["details-button"]}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
