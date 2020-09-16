import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import Scream from "../components/Scream";
import "./p.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataAction";
const Home = (props) => {
  useEffect(() => {
    props.getScreams();
  }, []);

  const { screams, loading } = props.data;
  const topics = Object.keys(screams);

  let recentScreamsMarkup = !loading ? (
    topics.map((topic) => <Scream blogs={screams[topic]} />)
  ) : (
    <p>Loading...</p>
  );

  return (
    <>
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <p className="pp"> picture</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          {recentScreamsMarkup}
        </Grid>
      </Grid>
    </>
  );
};
Home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getScreams })(Home);
