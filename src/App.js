// import logo from './logo.svg'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import FormText from './Components/FormText';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  // BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Activated!", "success ")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Activated!", "success ")
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<FormText showAlert={showAlert} heading="Enter your text below to analyze" mode={mode} />}>              
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

