import React from 'react';

export default class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.spots;
  }

  render() {
    return(
      <div className="spot-index">
        Test
      </div>
    )
  }
}

