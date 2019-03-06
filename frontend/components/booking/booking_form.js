import React from 'react';
import { withRouter } from 'react-router-dom';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { startDate: this.props.startDate, endDate: null, numGuests: 1 };
    this.state = { startDate: null, endDate: null, numGuests: 1 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateGuests = this.updateGuests.bind(this);
  }

  updateGuests(e) {
    this.setState({ numGuests: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = { 
      start_date: this.state.startDate._d,
      end_date: this.state.endDate._d,
      num_guests: parseInt(this.state.numGuests),
      spot_id: this.props.spot.id,
    }
    this.props.currentUser ? (
      this.props.action(booking).then(() => this.props.history.push("/search"))
    ) : (
      dispatch(this.props.openModal("Log In"))
    )
  }

  render() {
    return (
      <div className="booking-position">
        <div className="booking-form-container">
          <div className="booking-price">
            <span>
              {`$${this.props.spot.price} `}
            </span>
            per night
        </div>
          <div className="booking-form-box">
            <div style={{ marginTop: 16, marginBottom: 16 }}><div className="br"></div></div>

            <form className="booking-form" onSubmit={this.handleSubmit}>
              <div className="booking-fields">
                <div className="booking-dates">
                  <label className="booking-form-label">Dates</label>
                  <div className="booking-dates-picker">
                    <DateRangePicker
                      startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                      endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                      onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                      focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                      onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                      startDatePlaceholderText={'Check in'}
                      endDatePlaceholderText={'Check out'}
                    />
                  </div>
                </div>
                <div className="booking-guests">
                  <label className="booking-form-label">Guests</label>
                  <div>
                    <input
                      placeholder="1 guest"
                      className='booking-guest-input'
                      type="number"
                      min='1'
                      max={this.props.spot.maxGuests}
                      onChange={this.updateGuests}
                    />
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <button className="booking-submit">
                  {this.props.formType}
                </button>
              </div>
              <div style={{ marginTop: 8 }}>
                <div className="booking-message">
                  You won’t be charged yet
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(BookingForm);
