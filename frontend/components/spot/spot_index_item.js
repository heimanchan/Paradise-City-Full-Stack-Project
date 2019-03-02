import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const spotIndexItem = (props) => {
  const spot = props.spot;
  return (
    <div className="spot-item-box">
      <Link className="spot-item" to={`/spots/${spot.id}`}>
        {spot.title}
        {spot.price}
        {spot.ownerName}
      </Link>
    </div>
  );
};


export default withRouter(spotIndexItem);