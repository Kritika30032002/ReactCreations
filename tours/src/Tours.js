import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {
          tours.map((s)=>
          {
            return <Tour key={s.id} {...s}  removeTour={removeTour}></Tour>
          }
          
          )
        }
        
      </div>
    </section>
  );
};

export default Tours;