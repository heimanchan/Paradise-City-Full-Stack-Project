import React from 'react';
import SearchNavContainer from '../nav_bar/search_nav_container';
import SpotShowMap from '../spot_map/spot_show_map';

// Testing
import { fetchSpot } from '../../actions/spot_actions';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }
  
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    if (this.props.spot === undefined) return null;
    return(
      <div className="spot-show-page">
        <SearchNavContainer />
        <div className="image-banner">
          <div className="large-img">
            large
            </div>
          <div className="small-col">
            <div className="small-img">
              small
              </div>
            <div className="small-img">
              small
              </div>
          </div>
          <div className="small-col">
            <div className="small-img">
              small
              </div>
            <div className="small-img">
              small
              </div>
          </div>
        </div> 

        <div className="spot-show-container">
          <div className="spot-box">
            <div style={{paddingTop: 51, marginTop: -51 }}></div>
            <div className="spot-detail-box">
              <div className="spot-detail">
                <div className="spot-title-box">
                  <div className="spot-show-title">
                    <h1>
                      <span>
                        {this.props.spot.title}
                        {this.props.spot.title}
                      </span>
                    </h1>
                  </div>

                  <div className="spot-city-box">
                    <div className="spot-city-name">
                      {this.props.spot.cityName}
                    </div>
                  </div>
                  <div className="spot-spec-box">
                    <div className="spot-house-icon">
                      <span><i className="fa fa-home" aria-hidden="true"></i></span>
                    </div>
                    <div className="spot-spec">
                      <div className = "spot-type">
                        Entire Apartment
                      </div>
                      <div className="spot-nums">
                         <div>{this.props.spot.max_guests} guests</div>
                         <div>{this.props.spot.num_bedrooms} bedrooms</div>
                         <div>{this.props.spot.num_beds} beds</div>
                      </div>
                    </div>
                  </div>

                  {/* css divided line */}
                  <div style={{ marginTop: 24, marginBottom: 24 }}><div className="br"></div></div>

                  <div className="spot-des-box">
                    <div className="spot-des">
                      {this.props.spot.description}
                    </div>
                  </div>

                  {/* css divided line */}
                  <div style={{ marginTop: 24, marginBottom: 24 }}><div className="br"></div></div>
                </div>
                
                <div className="owner-box">
                  <div className="owner-pic-box">
                    <div className="owner-pic">
                      <div className="fake-pic">
                      </div>
                    </div>
                  </div>
                  <div className="owner-name">
                    {this.props.spot.ownerName}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div id="spot-show-map">
          <SpotShowMap spot={[this.props.spot]}/>
        </div>
      </div>
    )
  }
}

export default SpotShow;