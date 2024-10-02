import React from 'react';
import Card from './Card';
import './CardContainer.css';
import { useSelector } from 'react-redux';

const CardContainer = ({ data, headerData }) => {
  const groupby = useSelector((state) => state.data.groupBy);
  
  const priorityMap = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };

  return (
    <div className="container">
      <div className="header">
        <h3>{priorityMap[headerData[groupby]] || headerData[groupby]} {data.length}</h3>
      </div>

      <div className="cards">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
