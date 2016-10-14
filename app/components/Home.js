// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  static propTypes = {
    preview: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <textarea
            onInput={(e) => this.props.preview(e.target.value)}
            className={styles.mdTextArea}
          />
          <br />
          <Link to="/preview">Preview</Link>
        </div>
      </div>
    );
  }
}
