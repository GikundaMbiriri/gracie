import React,{useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './nav.css'
const Navbar = (props) => {
  const [cake,setCake]=useState(true)

  const { authenticated, email } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
       <Link to=""></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="nav-link" to="/" style={{color:'white'}}         
         
          >
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
       
                {/* {email == "gracemwende101@gmail.com"  || "petermbiriri8957@gmail.com"? (
                  <>
                    <li className="nav-item" >
                      <Link className="nav-link" to="/tiny" style={{color:'white'}}>
                        Create
                      </Link>
                    </li>
                  </>
                ) : (
                  <></>
                )} */}
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="nav-link" to="/audio" style={{color:'white'}}>
                    Podcast
                  </Link>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <Link className="nav-link" to="/contact" style={{color:'white'}} >
                    Contact
                  </Link>
                
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white'}}>About us</Link>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div data-toggle="collapse" data-target=".navbar-collapse.show">  <Link className="dropdown-item" to="/about" >About Pizzes</Link></div>
        <div data-toggle="collapse" data-target=".navbar-collapse.show">  <Link className="dropdown-item" to="/about1" >About blogger</Link></div>

        </div>
                </li>
               
          </ul>
          <div className="right">
         
       
  </div>` `
        </div>
      </nav>
      {/* <div className="modal fade" id="myModal" data-backdrop="true"> */}
      <nav className="site-navbar">
        {/* <a href="#home" className="site-logo">Salimia Doctor</a> */}

        <ul className={cake?'':'open'} onClick={()=>cake?'':setCake(!cake)}>
          <li><Link to="/">home</Link></li>
          <li><Link  to="/audio">podcast</Link ></li>
          <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white'}}>About us</Link>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div data-toggle="collapse" data-target=".navbar-collapse.show">  <Link className="dropdown-item" to="/about" >About Pizzes</Link></div>
        <div data-toggle="collapse" data-target=".navbar-collapse.show">  <Link className="dropdown-item" to="/about1" >About blogger</Link></div>

        </div>
                </li>
              
          <li><Link  to="/contact">contact</Link ></li>
        </ul>

        <button className={cake?'nav-toggler':'nav-toggler toggler-open'} onClick={()=>setCake(!cake)}>
          <span></span>
        </button>
      </nav>
  {/* </div> */}
    </>
  );
};

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  email: PropTypes.string,
};
const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  email: state.user.credentials.email,
});
export default connect(mapStateToProps)(Navbar);
