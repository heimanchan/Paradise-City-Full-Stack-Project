import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.match.params.spotId);
    const review = Object.assign({}, this.state, {
      spot_id: spotId, 
      author_id: this.props.currentUser.id
    });
    this.props.createReview(review);
    this.setState({ body: "" })
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }
  
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    return(
      <>
      <h2 className="spot-header">Give us your review!</h2>
      <div className="review-form-box">
        <form className="spot-review-form" onSubmit={this.handleSubmit}>
          <div className="review-form-rating-box">
            <div>Rating</div>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.state.rating}
              starColor="rgb(17,132,137)"
              emptyStarColor="rgb(215,215,215)"
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          
          <div className="review-form-body-box">
            <textarea 
              cols="20"
              rows="5"
              value={this.state.body}
              onChange={this.update("body")}
            />
          </div>

          <div className="session-submit"> 
            <button>Submit</button>
          </div>
        </form>
      </div>
      </>
    )
  }
}

export default withRouter(ReviewForm);