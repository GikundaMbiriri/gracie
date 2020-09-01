import React from "react";
import Btn from "../../components/Modal/Index";
import homepage from "../../images/pic1.jpg";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic5 from "../../images/pic5.jpg";
import "./home.css";

const home = () => {
  const ww = window.screen.width;
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
          <div className="card">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
              style={{ padding: "10px", width: "100%" }}
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
                  <div className="carousel-caption ">
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
                  <div className="carousel-caption ">
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
                  <div className="carousel-caption ">
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
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginBottom: "5px",
              }}
            >
              <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                Read more
              </a>

              <Btn />
            </div>
          </div>
          <div className="card">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
              style={{ padding: "10px", width: "100%" }}
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
                  <div className="carousel-caption ">
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
                  <div className="carousel-caption ">
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
                  <div className="carousel-caption ">
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
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginBottom: "5px",
              }}
            >
              <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                Read more
              </a>

              <Btn />
            </div>
          </div>
          <div className="card">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
              style={{ padding: "10px", width: "100%" }}
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
                  <div className="carousel-caption ">
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
                  <div className="carousel-caption ">
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
                  <div className="carousel-caption ">
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
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginBottom: "5px",
              }}
            >
              <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                Read more
              </a>

              <Btn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
