import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Listen from "./components/Listen";
import Gigs from "./components/Gigs";

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bio" element={<Bio/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/listen" element={<Listen />}></Route>
        <Route path="/gigs" element={<Gigs />}></Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
