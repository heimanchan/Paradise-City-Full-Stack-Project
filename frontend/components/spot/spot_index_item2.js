import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const spotIndexItem = (props) => {
  const spot = props.spot;
  return (
    <div className="spot-item-container">
      <Link className="spot-item-box" to={`/spots/${spot.id}`}>
        <div className="spot-image">
          <img src={window.libURL} />
        </div>
        <div className="spot-caption">
          <div className="spot-item">
            <div className="spot-title">{spot.title}</div>
            <div className="spot-price">${spot.price} per night</div>
            <div className="spot-reviews">{spot.ownerName}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};


export default withRouter(spotIndexItem);