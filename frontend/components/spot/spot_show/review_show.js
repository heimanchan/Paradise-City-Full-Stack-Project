import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ReviewShow = (props) => {
  // const { rating, body, authorId } = review;
  return (
    <div className="spot-reviews">
      <div className="review-author-header">
        <div className="review-author-pic">
          <img className="fake-pic" src={props.author.photoUrl} />
        </div>

        <div style={{marginLeft: 16}}>
          <div className="review-author">
            {`${props.author.firstName} ${props.author.lastName}` }
          </div>

          <div className="review-rating">
            {/* {props.review.rating} */}
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={props.review.rating}
              starColor="teal"
              emptyStarColor="rgb(215,215,215)"
              value={props.review.rating}
            />
          </div>
        </div>
        
      </div>
      <div className="review-body">
        { props.review.body }
      </div>

      {/* css divided line */}
      <div style={{ marginTop: 24, marginBottom: 24 }}><div className="br"></div></div>
    </div>
  )
}

export default ReviewShow;