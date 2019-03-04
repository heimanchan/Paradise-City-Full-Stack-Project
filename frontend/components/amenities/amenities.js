import React from 'react'
import AmenitiyItem from './amenities_items';

const Amenities = (props) => {
  const spot = props.spot

  let types = [];
  Object.keys(spot).forEach(key => (
    spot[key] === true ? types.push(key) : null
  ));
  console.log(types);

  const amenityItem = types.map(type => <AmenitiyItem key={type} type={type}/>)
  return (
    <div className="amenity-box">
      <div className="spot-header">
        Amenities
      </div>
      <div className="amenities-box">
        <div className="amenities">
          <div className="spot-show-icon">
            <i className="fa fa-fire" aria-hidden="true"></i>
          </div>
          <div className="amenities-text">
            Heater
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amenities;