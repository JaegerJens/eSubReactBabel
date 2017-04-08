import Component from "./component.jsx";
import {connect} from "react-redux";
import {selectSequence} from "./action.js";

// Maps store to props
const mapStateToProps = (state) => state.sequence;

// Inject dispatch actions as props
const mapDispatchToProps = (dispatch) =>
    ({"onSelect": (id, name) => dispatch(selectSequence(id, name))});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
