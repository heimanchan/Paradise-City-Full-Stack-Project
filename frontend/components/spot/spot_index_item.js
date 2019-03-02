import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const spotIndexItem = (props) => {
  const spot = props.spot;
  return (
    <Link className="spot-item-box" to={`/spots/${spot.id}`}>
      <div className="spot-item">
        <div className="spot-title">{spot.title} font: 16px</div>
        <div className="spot-price">{spot.price}</div>
        <div className="spot-reviews">{spot.ownerName} this should be reviews later</div>
      </div>
    </Link>
  );
};


export default withRouter(spotIndexItem);