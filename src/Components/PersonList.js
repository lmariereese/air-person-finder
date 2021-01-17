import React from 'react';
import {mockData} from '../mockData';

const PersonList = () => {

  return (
    <div className="list-wrapper">
      {/* move stuff below to its own component*/}
      <div className="person-card">
        <div className="person-avatar">
          <image src={mockData[0].avatar}></image>
        </div>
        <div className="person-info">
          <h3>{mockData[0].name}</h3>
          <p>{mockData[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default PersonList;
