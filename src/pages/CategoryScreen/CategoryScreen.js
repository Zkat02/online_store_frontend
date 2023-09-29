import React from "react";
import "./CategoryScreen.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/Products/Products.js";

const CategoryScreen = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryScreen;
