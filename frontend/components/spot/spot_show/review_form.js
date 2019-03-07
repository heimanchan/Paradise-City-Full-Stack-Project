import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewFom extends React.Component {
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
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return(
      <div className="review-form-box">
        <form className="spot-review-form" onSubmit={this.handleSubmit}>
          <div className="review-form-rating-box">
            <label className="review-form-rating">Rating</label>
            <input 
              type="number" 
              value={this.state.rating}
              onChange={this.update("rating")}
            />
          </div>
          
          <div className="review-form-body-box">
            <textarea 
              cols="20"
              rows="10"
              value={this.state.body}
              onChange={this.update("body")}
            />
          </div>
        </form>
      </div>
    )
  }
}
