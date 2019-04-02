import React from 'react';
import { withRouter } from 'react-router-dom';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import swal from 'sweetalert';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
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
      id: this.props.bookingId,
      start_date: this.state.startDate._d,
      end_date: this.state.endDate._d,
      num_guests: parseInt(this.state.numGuests),
      spot_id: this.props.spot.id,
      guest_id: this.props.currentUserId
    }
    if (!this.props.currentUserId) {
      this.props.openModal("Log In")
    } else {
      if (this.props.formType === "Update") {
        this.props.action(booking)
          .then(() => {
            this.props.closeModal();
            this.setState( { startDate: null, endDate: null })
            swal("Success!", "You've updated your booking.", "success");
          }
          );
      } else {
        this.props.action(booking).then(() => {
          this.setState({ startDate: null, endDate: null })
          swal("Success!", "You're about to go to a paradise city!", "success", { button: "Nice!" });
        });
      }
    }
  }

  bookingErrors() {
    return (
      <ul>
        {this.props.errors.booking.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const photo = this.props.spot.photoUrls[0]
    const formHeader = this.props.formType === 'Update' ? (
      <img src={photo} />
    ) : (
      <> 
        <div className="booking-price">
          <span>
            {`$${this.props.spot.price} `}
          </span>
          per night
        </div>
      </>
    )
    return (
      <div className="booking-position">
        <div className="booking-form-container">
          {formHeader}
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
                      startDatePlaceholderText={this.props.booking.startDate || "Check in"}
                      endDatePlaceholderText={this.props.booking.endDate || 'Check out'}
                      numberOfMonths={1}
                    />
                  </div>
                </div>
                <div className="booking-guests">
                  <label className="booking-form-label">Guests</label>
                  <div>
                    <input
                      placeholder={this.props.booking.numGuests || "1 guest"}
                      className='booking-guest-input'
                      type="number"
                      min='1'
                      max={this.props.spot.maxGuests}
                      onChange={this.updateGuests}
                    />
                  </div>
                </div>
              </div>

              <div className="session-errors">
                {this.bookingErrors()}
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
