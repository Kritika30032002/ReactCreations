import React, { useState } from 'react';
import people from './data';
import './Review.css';


import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, class1 , image, text,  } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };


  return (

    <div className="reviewpage">
        
    <article className='review'>
    <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
          <span className='circle'></span>

        </button>
    
      <p className='info'>{text}</p>
      
      <div className='img-container'>

        <img src={image} alt={name} className={class1} />
        
      </div>

      <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
          <span className='circle'></span>
        </button>
      
    </article>

        <div className="btns">
        
        
        </div>
    </div>
  );
};

export default Review;