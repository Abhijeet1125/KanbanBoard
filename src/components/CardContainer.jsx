import React from 'react';
import Card from './Card';
import './CardContainer.css';
import { useSelector } from 'react-redux';

const CardContainer = ({ data, headerData }) => {
    const groupby = useSelector((state)=>state.data.groupBy);
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>{headerData[groupby]}</h1>
      </div>

      {/* Cards Section */}
      <div className="cards">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
