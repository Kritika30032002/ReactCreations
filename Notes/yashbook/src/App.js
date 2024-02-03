import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/noteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import React from 'react';
function App() {
  return (
    <>
    <NoteState>
        <Router>
          <Navbar />
          <Alert message="Your Personalised Notes App" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route exact path="/about" element={<About />}>
              </Route>
              <Route exact path="/login" element={<Login />}>
              </Route>
              <Route exact path="/signup" element={<Signup />}>              
              </Route>
            </Routes>
          </div>
        </Router>
        </NoteState>
    </>
  );
}

export default App;
