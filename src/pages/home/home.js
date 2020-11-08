import React, { useEffect } from "react";
import homepage from "../../images/pic1.jpg";
import './home.css'
import PropTypes from "prop-types";
import Blog from "../../components/Blog";
import Latest from "../../components/latest/Latest";
import Subscribe from '../../components/subscribe/Subscribe'
import { connect } from "react-redux";
import { getScreams } from "../../redux/actions/dataAction";
import ScrollAnimation from "react-animate-on-scroll";


const Home = (props) => {
  useEffect(() => {
    props.getScreams();
  }, []);
  //const ww = window.screen.width;
  const { screams, loading } = props.data;
  let success;
  if(screams[0]){
   success=<Latest scream={screams[0]}/>
  }
  else{
      success=<p>loading</p>
  
  }
  const ks = Object.keys(screams);
  ks.shift()
  console.log(ks);
  console.log(screams)
  const loader=loading?(<>
  <div className="cover">
<div className="loader">  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div></div></div></>):(<> <div className="home">
        <div className="side-img">
          <img
            src={homepage}
            alt="homie"
            // height={ww > 600 ? "500px" : "150px"}
            // style={{
            //   width: ww > 600 ? "100%" : ww,
            // }}
          />
          <div className="msee">
         <span class="badge badge-primary">Primary</span>
         <span class="badge badge-secondary">Secondary</span>
        </div>
        <div className="msee">

        <p> <span class="badge badge-success">Success</span></p>
        <p> <span class="badge badge-danger">Danger</span></p>
</div>
<div className="ona">
<Subscribe />
</div>
        </div>
          <div className="card-de">
  
            {success}
          {ks.map((scream) => (
            <Blog key={screams[scream].blogId} scream={screams[scream]} />
          ))}{" "}
      </div>
      <div  className="onai">
      <Subscribe/>
</div>
      </div>  </>)
  return (
    <div>{loader}</div> 
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
