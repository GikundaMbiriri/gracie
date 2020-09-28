import React, { useEffect } from "react";
import { getScream } from "../redux/actions/dataAction";
import { connect } from "react-redux";

const Solo = (props) => {
  useEffect(() => {
    props.getScream(props.match.params.id);
  }, []);

  return <div>{props.scream.body}</div>;
};
const mapStateToProps = (state) => ({
  scream: state.data.scream,
});
export default connect(mapStateToProps, { getScream })(Solo);
