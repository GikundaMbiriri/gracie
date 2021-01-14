import React, { useEffect } from "react";
import homepage from "../../images/home1.jpg";
import './home.css'
import PropTypes from "prop-types";
import Blog from "../../components/Blog";
import Latest from "../../components/latest/Latest";
import Subscribe from '../../components/subscribe/Subscribe'
import { connect } from "react-redux";
import { getScreams } from "../../redux/actions/dataAction";
import ScrollAnimation from "react-animate-on-scroll";
import AOS from 'aos';
import "aos/dist/aos.css";


const Home = (props) => {
  useEffect(() => {
    props.getScreams();
  }, []);
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
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
          
            className="pm"
          />
         
<div className="ona" data-aos="zoom-in-left">
<Subscribe />
</div>
        </div>
          <div className="card-de">
  
            {success}
          {ks.map((scream) => (
            <Blog key={screams[scream].blogId} scream={screams[scream]} />
          ))}{" "}
      </div>
      <div  className="onai" data-aos="zoom-in-left">
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
