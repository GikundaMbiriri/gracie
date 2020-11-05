import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './nav.css'
const Navbar = (props) => {
  const { authenticated, email } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
        Pizzes
        </Link>
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
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About us</Link>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="#">About Pizzes</Link>
          <Link class="dropdown-item" to="#">About blogger</Link>

        </div>
                </li>
               
              </li>
                {email == "gracemwende101@gmail.com" ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/tiny">
                        Create
                      </Link>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/audio">
                    Podcast
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    contact
                  </Link>
                
                </li>
           
          </ul>
          <div className="right">
         
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Subscribe
  </button>
  </div>
        </div>
      </nav>
      <div className="modal fade" id="myModal" data-backdrop="true">
    <div className="modal-dialog"  >
      <div className="modal-content" >
      
        <div className="modal-header">
          <h4 className="modal-title">Modal Heading</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body">
        <div id="container">
	<h2>Subscribe</h2>
	<p>Stay updated with our newsletter</p>
  
	<form>
		<input type="email" placeholder="Type your Email" required/>
			<br/>
		<button data-dismiss="modal">Subscribe</button>
	</form>
</div>
        </div>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
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
