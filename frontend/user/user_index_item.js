import React from 'react';


// const UserIndexItem = ( props ) => {
class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClick() {
    this.props.deleteBooking(this.props.booking.id);
  }

  handleEdit() {
    this.props.openModal("Edit Booking", this.props.booking.id)
  }
  
  render() {
    const booking = this.props.booking;

    const divStyle = {
      background: `url(${booking.spotPic})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
    };
    return (
      <div className="spot-item-box">
        <div className="spot-image" style={divStyle}>
        </div>
        <div className="spot-caption">
          <div className="spot-item">
            <div className="spot-title">{booking.spotTitle}</div>
            <div className="spot-flex">
              <div className="booking-details">
                <div className="spot-price">in {booking.spotCity}</div>
                <div className="spot-price">${booking.spotPrice} per night</div>
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