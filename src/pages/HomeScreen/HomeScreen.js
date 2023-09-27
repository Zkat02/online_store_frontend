import React from "react";
import './HomeScreen.module.css';
import Footer from '../../components/Footer/Footer';
import Navbar from "../../components/navbar/Navbar";
// import Sales from "../../components/Sales/Sales.js";
// import Categories from "../../components/Categories/Categories.js";
// import Products from "../../components/Products/Products.js";

const HomeScreen = () => {
  return (
    <div className="App">
        <Navbar/>
        <main>
          {/* <Sales/> */}
          {/* <Categories/> */}
          {/* <Products/> */}
        </main>
        <Footer/>
    </div>
  );
};

export default HomeScreen;
