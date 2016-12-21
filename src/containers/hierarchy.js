import {selectHierarchy} from '../actions/hierarchy.js';
import Component from '../components/hierarchy/hierarchy.jsx';
import {connect} from 'react-redux';

// maps store to props
const mapStateToProps = (state) => state.hierarchy;

// inject dispatch actions as props
const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (id, name) => dispatch(selectHierarchy(id, name))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);