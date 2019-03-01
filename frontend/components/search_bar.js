import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: null }
    this.handleUpdate = this.handleUpdate.bind(this);
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
    alert(`${document.getElementById("search-bar-input").value}\nsucks, find somewhere else.`)
  }

  render() {
    return(
      <div className="trip-search">
        <form>
          <div className="trip-location">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input 
              id="search-bar-input" 
              placeholder="Surfing in Los Angeles" 
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

export default SearchBar;