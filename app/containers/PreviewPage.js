// @flow
import { connect } from 'react-redux';
import Preview from '../components/Preview';

function mapStateToProps(state) {
  return {
    preview: state.preview
  };
}

export default connect(mapStateToProps, null)(Preview);
