import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Routes></Routes>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
