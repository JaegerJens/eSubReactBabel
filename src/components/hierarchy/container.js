import Component from "./component.jsx";
import {connect} from "react-redux";
import {selectHierarchy} from "./action.js";

// Maps store to props
const mapStateToProps = (state) => state.hierarchy;

// Inject dispatch actions as props
const mapDispatchToProps = (dispatch) =>
    ({"onSelect": (id, name) => dispatch(selectHierarchy(id, name))});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
