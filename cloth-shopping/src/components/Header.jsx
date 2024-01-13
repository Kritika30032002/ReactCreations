import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">StyleEmporium</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Men</a></li>
            <li><a href="#" className="hover:text-gray-300">Women</a></li>
            <li><a href="#" className="hover:text-gray-300">Kids</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
