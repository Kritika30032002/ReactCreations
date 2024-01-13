import React from 'react';
import Header from './components/Header';
import ClothesList from './components/ClothesList';
import Footer from './components/Footer';

function App() {
  const clothesData = [
    { id: 1, name: 'T-shirt 1', category: 'Casual', gender: 'Male', age: 'Adult', image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Dress 1', category: 'Formal', gender: 'Female', age: 'Adult', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D' },
    { id: 3, name: 'Jeans 1', category: 'Casual', gender: 'Male', age: 'Adult', image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'T-shirt 2', category: 'Casual', gender: 'Male', age: 'Adult', image: 'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Dress 2', category: 'Formal', gender: 'Female', age: 'Adult', image: 'https://plus.unsplash.com/premium_photo-1661490678698-6df465cc04c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNsb3RoaW5nJTIwZm9ybWFsJTIwZmVtYWxlfGVufDB8MHwwfHx8MA%3D%3D' },
    { id: 6, name: 'Jeans 2', category: 'Casual', gender: 'Male', age: 'Adult', image: 'https://images.unsplash.com/photo-1624378440070-950d99e25830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjbG90aGluZ3xlbnwwfDB8MHx8fDA%3D' },
    { id: 7, name: 'Jacket 1', category: 'Outerwear', gender: 'Female', age: 'Adult', image: 'https://plus.unsplash.com/premium_photo-1664542157778-4dcccb04169e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D' },
    { id: 8, name: 'Sweater 1', category: 'Casual', gender: 'Male', age: 'Adult', image: 'https://images.unsplash.com/photo-1580644228275-2b826dbec5bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 9, name: 'Skirt 1', category: 'Casual', gender: 'Female', age: 'Adult', image: 'https://images.unsplash.com/photo-1560180279-2baca50fdf68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D' },
    { id: 10, name: 'Shorts 1', category: 'Casual', gender: 'Male', age: 'Adult', image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 11, name: 'Blouse 1', category: 'Formal', gender: 'Female', age: 'Adult', image: 'https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNsb3RoaW5nfGVufDB8MHwwfHx8MA%3D%3D' },
    { id: 12, name: 'Pants 1', category: 'Formal', gender: 'Male', age: 'Adult', image: 'https://images.unsplash.com/photo-1572250802606-70d7bac06e62?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white">
      <Header />
      <div className="container mx-auto flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Featured Clothes</h1>
        <ClothesList clothes={clothesData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
