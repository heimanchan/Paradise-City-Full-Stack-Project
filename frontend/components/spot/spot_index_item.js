import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const spotIndexItem = (props) => {
  const spot = props.spot;
  const divStyle = {
    background: `url(${spot.photoUrls[0]})`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  };

  const ratings = ((spot.averageRating) ? (
      <StarRatingComponent
        name="rate2"
        editing={false}
        starColor="teal"
        emptyStarColor="rgb(215,215,215)"
        // value={this.state.rating_half_star}
        value={parseFloat(spot.averageRating)}
        renderStarIcon={(index, value) => {
          return (
            <span>
              <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
            </span>
          );
        }}
        renderStarIconHalf={() => {
          return (
            <span>
              <span style={{ position: 'absolute' }}><i className="far fa-star" /></span>
              <span><i className="fas fa-star-half" /></span>
            </span>
          );
        }}
      />
    ) : ("")
  )
  
  return (
    <div className="spot-item-container">
      <Link className="spot-item-box" to={`/spots/${spot.id}`}>
        <div className="spot-image" style={divStyle}>
          {/* <img src={spot.photoUrls[0]} /> */}
        </div>
        <div className="spot-caption">
          <div className="spot-item">
            <div className="spot-title">{spot.title}</div>
            <div className="spot-price">${spot.price} per night</div>
            <div className="spot-reviews">
              {ratings}
              <span> by {`${spot.owner.first_name} ${spot.owner.last_name}`}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};


export default withRouter(spotIndexItem);