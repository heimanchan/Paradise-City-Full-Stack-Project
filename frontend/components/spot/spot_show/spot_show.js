import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import SearchNavContainer from '../../nav_bar/search_nav_container';
import SpotShowMap from '../../spot_map/spot_show_map';
import Amenity from '../../amenities/amenities';
import BookingForm from '../../booking/booking_form';
import CreateBookingContainer from '../../booking/create_booking_container';
import EditBookingContainer from '../../booking/edit_booking_container';


// Testing
import { fetchSpot } from '../../../actions/spot_actions';
import { format } from 'util';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    }
  }
  
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    window.scrollTo(0, 0);
  }

  render() {
    const spot = this.props.spot;
    if (spot === undefined) return null;
    return(
      <div className="spot-show-page">
        <SearchNavContainer />
        <div className="image-banner">
          <div className="large-img">
            <img src={spot.photoUrls[0]} />
          </div>
          <div className="small-col">
            <div className="small-img">
              <img src={spot.photoUrls[1]} />
            </div>
            <div className="small-img">
              <img src={spot.photoUrls[2]} />
            </div>
          </div>
          <div className="small-col">
            <div className="small-img">
              <img src={spot.photoUrls[3]} />
            </div>
            <div className="small-img">
              <img src={spot.photoUrls[4]} />
            </div>
          </div>
        </div> 

        <div className="spot-show-container">
          <div className="spot-box">
            <div style={{paddingTop: 51, marginTop: -51 }}></div>
            <div className="spot-detail-box">
              <div className="spot-detail">
                <div className="title-flex">
                  <div className="spot-title-box">
                    <div className="spot-show-title">
                      <h1>
                        <span>
                          {spot.title}
                        </span>
                      </h1>
                    </div>
                  </div>

                  <div className="owner-box">
                    <div className="owner-pic-box">
                      <div className="owner-pic">
                        {/* <div className="fake-pic"> */}
                        <img className="fake-pic" src={spot.ownerPhotoUrl} />
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="owner-name">
                      {`${spot.ownerFirstName} ${spot.ownerLastName}`}
                    </div>
                  </div>
                </div>

                <div className="spot-city-box">
                  <div className="spot-city-name">
                    {spot.cityName}
                  </div>
                </div>
                <div className="spot-spec-box">
                  <div className="spot-show-icon">
                    <span><i className="fa fa-home" aria-hidden="true"></i></span>
                  </div>
                  <div className="spot-spec">
                    <div className="spot-type">
                      Entire Apartment
                    </div>
                    <div className="spot-nums">
                      <div>{spot.maxGuests} guests</div>
                      <div>{spot.numBedrooms} bedrooms</div>
                      <div>{spot.numBeds} beds</div>
                    </div>
                  </div>
                </div>

                {/* css divided line */}
                <div style={{ marginTop: 24, marginBottom: 24 }}><div className="br"></div></div>

                <div className="spot-des-box">
                  <div className="spot-des">
                    {spot.description}
                  </div>
                </div>

                {/* css divided line */}
                <div style={{ marginTop: 24, marginBottom: 24 }}><div className="br"></div></div>
                <Amenity spot={spot} />

                {/* css divided line */}
                <div style={{ marginTop: 24, marginBottom: 24 }}><div className="br"></div></div>
                <div className="availability-box">
                  <div className="spot-header">Availability</div>
                  <div className="availability">
                    <DayPickerRangeController
                      startDate={this.state.startDate} // momentPropTypes.momentObj or null,

                      endDate={this.state.endDate} // momentPropTypes.momentObj or null,

                      onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                      focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                      onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                      numberOfMonths={2}
                      hideKeyboardShortcutsPanel={true}
                    />
                  </div>
                </div>
                
                {/* css divided line */}
                <div style={{ marginTop: 24, marginBottom: 24 }}><div className="br"></div></div>
                <div className="show-map-box">
                  <div className="spot-h1">The neighborhood</div>
                  <div className="spot-location">
                    {`${spot.ownerFirstName}'s spot is located in ${spot.cityName}.`}
                  </div>
                  <div id="spot-show-map">
                    <SpotShowMap spot={[spot]} />
                  </div>
                </div>
              </div>
              {/* <BookingForm
                spot={spot}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
              /> */}
              <CreateBookingContainer spot={spot}/>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default SpotShow;





