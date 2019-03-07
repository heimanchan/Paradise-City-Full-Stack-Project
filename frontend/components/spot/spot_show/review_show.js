import React from 'react';

const Review = ({ review }) => {
  const { rating, body } = review;
  return (
    <div className="spot-reviews">
      <ul>
        <li className="review-rating">{ rating }</li>
        <li className="review-body">{ body }</li>
      </ul>
    </div>
  )
}