import React from 'react';
import { withRouter } from 'react-router-dom';
import { updateFilter } from '../actions/filter_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: null }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let searchBar = document.getElementById("search-bar-input");
    this.autocomplete = new google.maps.places.Autocomplete(searchBar);
    this.autocomplete.addListener('place_change', () => {
      let address = this.autocomplete.getPlace().name;
      this.setState({ address: address })
    })
  }

  handleUpdate(e) {
    this.setState({ address: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    // alert(`${document.getElementById("search-bar-input").value}\nsucks, find somewhere else.`)
    let coord = new google.maps.Geocoder();
    coord.geocode( {"address": this.state.address }, (results, status) => {
      let lat, lng;
      if (status === 'OK') {
        lat = results[0].geometry.location.lat();
        lng = results[0].geometry.location.lng();
        this.props.history.push(`/search?lat=${lat}&lng=${lng}`)
        this.props.receiveSearch({lat, lng})
      } else {
        lat = 37.7758;
        lng = -122.435;
        this.props.history.push(`/search?lat=${lat}&lng=${lng}`)
        this.props.receiveSearch({ lat, lng })   
      }
    })
  }

  render() {
    let placeholder = (
      location.pathname === "#/" ? 
      "Surfing in Los Angeles" : `Try "San Francisco"`)
    return(
      <div className="trip-search">
        <form>
          <div className="trip-location">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input 
              id="search-bar-input" 
              placeholder = {placeholder}
              type="text" 
              onChange={this.handleUpdate} 
            />
          </div>

          <div className="trip-button">
            <div>
              <button type="trip-submit" onClick={this.handleSubmit}>
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);