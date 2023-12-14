import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  };

  const ToggleMode = (cls) => {
    removeBodyClasses();
   
     document.body.classList.add('bg-' + cls);
    
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert('Light Mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      ShowAlert('Dark Mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtlis123" mode={mode} aboutText="About" ToggleMode={ToggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm ShowAlert={ShowAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
