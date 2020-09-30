import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Navbar = (props) => {
  const { authenticated, email } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
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
            {authenticated ? (
              <>
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
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
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
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
