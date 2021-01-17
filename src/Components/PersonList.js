import React from 'react';
import {mockData} from '../mockData';

const PersonList = () => {

  return (
    <div className="list-wrapper">
      {/* move stuff below to its own component*/}
      <div className="person-card">
        <div>
          <image src=""></image>
        </div>
        <div className="person-info">
          <h3>Name</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}

export default PersonList;
