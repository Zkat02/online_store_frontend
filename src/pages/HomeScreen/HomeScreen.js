import React from "react";
import "./HomeScreen.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Sales from "../../components/Sales/Sales.js";
import Categories from "../../components/Categories/Categories.js";
import TopProducts from "../../components/TopProducts/TopProducts";

const HomeScreen = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Sales />
        <Categories />
        <TopProducts />
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
