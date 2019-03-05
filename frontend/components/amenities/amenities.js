import React from 'react'
import AmenitiyItem from './amenities_items';

const Amenities = (props) => {
  const spot = props.spot

  let types = [];
  Object.keys(spot).forEach(key => (
    spot[key] === true ? types.push(key) : null
  ));

  const amenityItem = types.map(aType => <AmenitiyItem key={aType} type={aType}/>)
  return (
    <div className="amenity-box">
      <div className="spot-header">
        Amenities
      </div>
      <div className="amenities-box">
        {amenityItem}
      </div>
    </div>
  )
}

export default Amenities;