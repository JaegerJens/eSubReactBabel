import Component from "./component.jsx";
import {connect} from "react-redux";

const mapStateToProps = (state) => state.mainview;

export default connect(mapStateToProps)(Component);
