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
import { Facebook,Instagram,EmailOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";

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
        <div className="side-img" >
          {/* <h1>remove margin top</h1> */}
          
          {/* <img
            src={homepage}
            alt="homie"
          
            className="pm"
          /> */}
         <div className="pm">
           <div className="er">
           <div className="on" >
           <h1 style={{color:"white"}}>Redefine </h1>
</div>
<div className="on" >
           <h1 style={{color:"white"}}>Renew</h1>
</div>
<div className="on" >
           <h1 style={{color:"white"}}>Transform</h1>
</div>  </div>

<div className="te">
  <a style={{textDecoration:"none", color:"black"}} href="https://www.facebook.com/gracey.lovey" ><Facebook style={{fontSize:"40px",marginRight:"10px"}}/></a>
  <a style={{textDecoration:"none", color:"black"}} href="https://www.instagram.com/_gray.cee/"><Instagram style={{fontSize:"40px",marginRight:"10px"}}/></a>

  <a style={{textDecoration:"none", color:"black"}} href=""><EmailOutlined style={{fontSize:"40px",marginRight:"10px"}}/></a>

</div>

         </div>
<div className="ona" data-aos="zoom-in-left">
<Subscribe  />
</div>
        </div>
        
          <div className="card-de">
  <div>
     <h3 className="pizzes">Pizzes</h3>
     <p>
Pizzes is an inspirational blog, but more than just a blog website, 
Pizzes is a place. A place where you will experience peace, inspiration, and truth.
 It’s a place where we shall discuss truths behind the tough, deep,
  and sensitive unspoken issues that we as young people have to carry and deal with, 
  as we try to get through each day.</p>
  </div>
  
            {success}
          {ks.map((scream) => (
            <Blog key={screams[scream].blogId} scream={screams[scream]} />
          ))}{" "}
      </div>
      <div  className="onai" >
      <Subscribe id="1"/>
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
