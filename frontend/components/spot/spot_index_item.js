import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const spotIndexItem = (props) => {
  const spot = props.spot;
  return (
    <Link className="spot-item" to={`/spots/${spot.id}`}>
      {spot.title}
      {spot.price}
      {spot.ownerName}
    </Link>
  );
};


export default withRouter(spotIndexItem);