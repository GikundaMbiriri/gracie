import React, { useEffect } from "react";
import { getScream } from "../redux/actions/dataAction";
import { connect } from "react-redux";

const Solo = (props) => {
  useEffect(() => {
    props.getScream(props.match.params.id);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: props.scream.body }} />;
};
const mapStateToProps = (state) => ({
  scream: state.data.scream,
});
export default connect(mapStateToProps, { getScream })(Solo);
