import React from 'react';

const ReviewShow = ({ review }) => {
  const { rating, body, authorId } = review;
  return (
    <div className="spot-reviews">
      <ul>
        <li className="review-author">
          { authorId }
        </li>
        
        <li className="review-rating">{ rating }</li>
        <li className="review-body">{ body }</li>
      </ul>
    </div>
  )
}

export default ReviewShow;