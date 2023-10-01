import React from 'react';

interface PageHeaderProps {
    title: string;
}
 
export const pageHeader: React.FC<PageHeaderProps> = ({title}) => {
        return ( 
            <div className="row">
          <div className="col-12 mt-4">
            <h1>{title}</h1>
          </div>
        </div>
       );
}
