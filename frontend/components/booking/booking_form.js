import React from 'react';

const bookingFrom = ({ spot }) => {
  return (

    <div className="booking-position">
      <div className="booking-form-container">
        <div className="booking-form-box">
          <div className="booking-price">
            {`$${spot.price} `}
            <span>
              per night
            </span>
          </div>
          <div style={{ marginTop: 24, marginBottom: 24 }}><div className="br"></div></div>

          <form className="booking-form"> 

          </form>
        </div>
      </div>
    </div>
  )
}

export default bookingFrom;