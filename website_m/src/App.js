import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Bio from "./pages/Bio";

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bio" element={<Bio/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
