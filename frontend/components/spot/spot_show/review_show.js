import React from 'react';

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

          <div className="">
            {props.review.rating}
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