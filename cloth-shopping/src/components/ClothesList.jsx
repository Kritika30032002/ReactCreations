import React from 'react';
import ClothesItem from './ClothesItem';

function ClothesList({ clothes }) {
  return (
    <div className="flex flex-wrap justify-center">
      {clothes.map((item) => (
        <ClothesItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ClothesList;
