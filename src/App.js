import React from "react";
import HomeScreen from "./pages/HomeScreen/HomeScreen.js";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
    </Routes>
    
    </>
  );
};

export default App;