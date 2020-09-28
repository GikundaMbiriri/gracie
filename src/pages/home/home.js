import React, { useEffect } from "react";
import homepage from "../../images/pic1.jpg";

import PropTypes from "prop-types";
import Blog from "../../components/Blog";
import { connect } from "react-redux";
import { getScreams } from "../../redux/actions/dataAction";

const Home = (props) => {
  useEffect(() => {
    props.getScreams();
  }, []);
  const ww = window.screen.width;
  const { screams, loading } = props.data;
  const ks = Object.keys(screams);
  console.log(ks);
  return (
    <div className="container" style={{ margin: "0px" }}>
      <div className="row">
        <div className="col-sm" id="p">
          <img
            src={homepage}
            alt="homie"
            height={ww > 600 ? "500px" : "150px"}
            style={{
              width: ww > 600 ? "100%" : ww,
            }}
          />
        </div>
        <div className="col-sm">
          {ks.map((scream) => (
            <Blog key={screams[scream].blogId} scream={screams[scream]} />
          ))}{" "}
        </div>
      </div>
    </div>
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
