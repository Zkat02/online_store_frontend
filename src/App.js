import React from "react";
import HomeScreen from "./pages/HomeScreen/HomeScreen.js";
import CategoryScreen from "./pages/CategoryScreen/CategoryScreen.js";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/category" element={<CategoryScreen />} />
      </Routes>
    </>
  );
};

export default App;
