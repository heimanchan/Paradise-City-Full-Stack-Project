import React from 'react';
import { withRouter } from 'react-router-dom';

export default class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.spots;
  }

  componentDidMount() {

  }
}