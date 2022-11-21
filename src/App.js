import logos from "./images/logos.png";
import { NavBar } from "./components/NavBar.js";
// import { NoFound } from "./components/NoFound.js";
import { ParentIcons } from "./components/ParentIcons.js";
import { Home } from "./pages/Home.js";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar logos={logos} />
        <ParentIcons />
        {/* <Home /> */}
        <Routes>
          <Route path="/user/:id" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
