import React from 'react';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClick() {
    debugger
    this.props.deleteBooking(this.props.booking.id);
  }

  handleEdit() {
    this.props.openModal("Edit Booking", this.props.booking.id)
  }
  
  render() {
    const booking = this.props.booking;
    const spot = this.props.spot;
    const divStyle = {
      // background: `url(${booking.spotPic})`,
      background: `url(${spot.photoUrls[0]})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
    };
    return (
      <div className="spot-item-box">
        <div className="spot-image" style={divStyle}>
        </div>
        <div className="spot-caption">
          <div className="spot-item">
            <div className="spot-title">{spot.title}</div>
            <div className="spot-flex">
              <div className="booking-details">
                <div className="spot-price">in {spot.cityName}</div>
                <div className="spot-price">${spot.price} per night</div>
                <div className="spot-reviews">For {booking.numGuests} guest(s)</div>
                <div className="booking-dates-box">
                  {`${booking.startDate} to ${booking.endDate}`}
                </div>
              </div>
              <div className="booking-button-box">
                <div className="session-submit">
                  <button onClick={this.handleClick}>
                    Cancel Booking
                  </button>
                </div>
              </div>

              <div className="booking-button-box">
                <div className="session-submit"> 
                  <button onClick={this.handleEdit} >
                    Edit Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserIndexItem;