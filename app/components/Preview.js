// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class Preview extends Component {
  static propTypes = {
    preview: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <br />
        {this.props.preview}
      </div>
    );
  }
}
