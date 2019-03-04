import React from 'react'

const Amenity = (props) => {
  const spot = props.spot

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

export default Amenity;