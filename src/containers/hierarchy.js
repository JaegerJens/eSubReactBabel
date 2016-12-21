import selectAction from '../actions/hierarchy.js';
import Component from '../components/hierarchy/hierarchy.jsx';
import {connect} from 'react-redux';

console.log('hierarchy container', selectAction);

// maps store to props
const mapStateToProps = (state) => state.hierarchy;

// inject dispatch actions as props
const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (id) => dispatch(selectAction(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);