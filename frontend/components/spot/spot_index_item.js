import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.spots;
  }

  // componentDidMount() {
  //  fetch
  // }

  render() {
    return (
      <h1>spot items</h1>
    )
  }
}

export default withRouter(IndexItem);