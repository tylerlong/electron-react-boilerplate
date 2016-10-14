// // @flow
// import React, { Component } from 'react';
// import Home from '../components/Home';

// export default class HomePage extends Component {
//   render() {
//     return (
//       <Home />
//     );
//   }
// }

// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as PreviewActions from '../actions/preview';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PreviewActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
