import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const spotIndexItem = (props) => {
  const spot = props.spot;
  return (
    <Link className="spot-item-box" to={`/spots/${spot.id}`}>
      <div className="spot-item">
        {spot.title}
        {spot.price}
        {spot.ownerName}
      </div>
    </Link>
  );
};


export default withRouter(spotIndexItem);