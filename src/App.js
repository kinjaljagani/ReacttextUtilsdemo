// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    // nav.classList.remove("bg-dark");
    // nav.classList.remove("bg-light");
  };
  const updateButtonColors = (cls) => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.classList.remove(
        "btn-light",
        "btn-dark",
        "btn-primary",
        "btn-success",
        "btn-danger",
        "btn-warning"
      );
      button.classList.add("btn-" + cls);
      if (cls === "light") {
        button.classList.remove("border-white");
        button.classList.add("border-black");
      } else {
        button.classList.remove("border-black");
        button.classList.add("border-white");
      }
    });
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("text-white");
    document.body.classList.add("bg-" + cls);
    updateButtonColors(cls);
  };
  return (
    <BrowserRouter>
      <>
        <Navbar
          title="TextUtils"
          text="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} toggleMode={toggleMode} />}
          />
          <Route
            exact
            path="/home"
            element={
              <TextForm
                mode={mode}
                showAlert={showAlert}
                heading="Enter your text"
              />
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
