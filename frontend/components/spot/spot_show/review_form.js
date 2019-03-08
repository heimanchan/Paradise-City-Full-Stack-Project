import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.match.params.spotId);
    const review = Object.assign({}, this.state, {
      spot_id: spotId, 
      author_id: this.props.currentUser.id
    });
    this.props.createReview(review);
    // this.props.history.push(`/spots/${spotId}`);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return(
      <>
      <h2 className="spot-header">Give us your review!</h2>
      <div className="review-form-box">
        <form className="spot-review-form" onSubmit={this.handleSubmit}>
          <div className="review-form-rating-box">
            <label>Rating </label>
            <input 
              className="review-form-rating"
              type="number" 
              value={this.state.rating}
              onChange={this.update("rating")}
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