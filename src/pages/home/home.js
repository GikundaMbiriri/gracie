import React from "react";
import homepage from "../../images/pic1.jpg";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic5 from "../../images/pic5.jpg";
import "./home.css";
const home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm" style={{ marginBottom: "10px" }}>
          <img src={homepage} alt="homie" />
        </div>
        <div className="col-sm">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={pic1}
                  alt="First slide"
                  style={{ height: "150px" }}
                />
                <div class="carousel-caption ">
                  <h5>Hello there</h5>
                  <p>we write code</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={pic2}
                  alt="Second slide"
                  style={{ height: "150px" }}
                />
                <div class="carousel-caption ">
                  <h5>Hello there</h5>
                  <p>we write code</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={pic5}
                  alt="Third slide"
                  style={{ height: "150px" }}
                />
                <div class="carousel-caption ">
                  <h5>Hello there</h5>
                  <p>we write code</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
