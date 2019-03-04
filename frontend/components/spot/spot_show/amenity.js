import React from 'react'

const Amenity = (props) => {
  const spot = props.spot

  return (
    <div className="amenity-box">
      <div className="amenity">
        <h2>Amenities</h2>
      </div>
      <div className="amenities-box">
        <div className="amenities">
          <div className="spot-show-icon">
            <i class="fa fa-fire" aria-hidden="true"></i>
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