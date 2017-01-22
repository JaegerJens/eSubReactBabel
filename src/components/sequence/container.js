import {selectSequence} from './action.js'
import Component from './component.jsx';
import {connect} from 'react-redux';

// maps store to props
const mapStateToProps = (state) => state.sequence;

// inject dispatch actions as props
const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (id, name) => dispatch(selectSequence(id, name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);