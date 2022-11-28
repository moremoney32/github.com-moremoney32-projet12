import logos from "./images/logos.png";
import { NavBar } from "./components/NavBar.js";
import { NoFound } from "./components/NoFound.js";
import { LeftParentIcons } from "./components/LeftParentIcons.js";
import { Home } from "./pages/Home.js";
import { User } from "./pages/User.js";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar logos={logos} />
        <LeftParentIcons />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
