import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class BookingFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: this.props.startDate, endDate: null, numGuests: 1 };
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

            <form className="booking-form">
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
                    />
                  </div>
                </div>
                <div className="booking-guests">
                  <label className="booking-form-label">Guests</label>
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>

              <div style={ {marginTop: 24} }>
                <button className="booking-submit"> 
                  Request to Book
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

export default BookingFrom;