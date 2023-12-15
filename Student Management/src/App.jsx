import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Academics from './components/academics/Academics';
import Technology from './components/technology/Technology';
import Contact from './components/contact/Contact';
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Sidebar/>
      <Academics/>
      <Technology/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

