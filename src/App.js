// import logo from "./logo.svg";
import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/TextForm";
import About from "./components/About";
// BrowserRouter,Link
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, changeMode] = useState("primary");
  if (mode === "primary") {
    document.title = "Text-utils-light";
  } else {
    document.title = "Text-utils-dark";
  }

  const toggleModeFunc = () => {
    if (mode === "primary") {
      changeMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      changeMode("primary");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <BrowserRouter>
      <div className="container my-3">
        <Navbar
          title="Text-Utils"
          aboutInfo="About Us"
          mode={mode}
          toggleMode={toggleModeFunc}
        />
        <Routes>
          {/* always use exact path */}
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={<Form heading="Enter text to analyze" mode={mode} />}
          />
        </Routes>
        {/* <Form heading="Enter the text to analyse" mode={mode} />
        <About /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
