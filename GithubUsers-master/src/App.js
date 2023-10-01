import React from 'react'; // Import React
import './App.css';
import Certificate from './Certificate'; // Import Certificate component
import MainComponent from './MainComponent'; // Import MainComponent component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainComponent />} /> {/* Define route for MainComponent */}
        <Route path='/certificate' element={<Certificate />} /> {/* Define route for Certificate */}
      </Routes>
    </Router>
  );
}

export default App;
