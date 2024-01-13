import React from 'react';

function ClothesItem({ item }) {
  return (
    <div className="w-48 h-72 mx-4 mb-8 bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
      <img
        src={item.image}
        alt={item.name}
        className="object-cover w-full h-40 rounded-md mb-4"
      />
      <div className="text-container">
        <h3 className="text-lg font-bold mb-2">{item.name}</h3>
        <p className="text-gray-700 mb-2">{item.category} - {item.gender} - {item.age}</p>
      </div>
    </div>
  );
}

export default ClothesItem;
