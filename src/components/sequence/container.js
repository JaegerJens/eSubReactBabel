import Component from './component.jsx';
import {connect} from 'react-redux';

// maps store to props
const mapStateToProps = (state) => state.sequence;

export default connect(mapStateToProps)(Component);