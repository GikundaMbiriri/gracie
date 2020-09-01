import React from "react";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";
import "./modal.css";
const Index = () => {
  return (
    <div>
      <div>
        {" "}
        <button
          type="button"
          className="btn btn-primary mx-auto"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {" "}
          Share{" "}
        </button>{" "}
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content col-12">
            <div className="modal-header">
              <h5 className="modal-title">Share</h5>{" "}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">&times;</span>{" "}
              </button>
            </div>
            <div className="modal-body">
              <div className="icon-container1 d-flex">
                <div className="smd">
                  {" "}
                  <TwitterShareButton url="hero.com">
                    <i
                      className=" img-thumbnail fab fa-twitter fa-2x"
                      style={{ color: "#4c6ef5", backgroundColor: "aliceblue" }}
                    ></i>
                  </TwitterShareButton>
                  <p>Twitter</p>
                </div>
                <div className="smd">
                  {" "}
                  <FacebookShareButton url="hero.com">
                    <i
                      className="img-thumbnail fab fa-facebook fa-2x"
                      style={{ color: "#3b5998", backgroundColor: " #eceff5" }}
                    ></i>
                  </FacebookShareButton>
                  <p>Facebook</p>
                </div>
                <div className="smd">
                  {" "}
                  <InstapaperShareButton url="HERO.COM">
                    <i
                      className="img-thumbnail fab fa-instagram fa-2x"
                      style={{ color: "#FF5700", backgroundColor: " #fdd9ce" }}
                    ></i>
                  </InstapaperShareButton>
                  <p>instagram</p>
                </div>
                <div className="smd">
                  {" "}
                  <i
                    className="img-thumbnail fab fa-discord fa-2x "
                    style={{ color: "#738ADB", backgroundColor: "#d8d8d8" }}
                  ></i>
                  <p>Discord</p>
                </div>
              </div>
              <div className="icon-container2 d-flex">
                <div className="smd">
                  {" "}
                  <WhatsappShareButton url="hero.com">
                    <i
                      className="img-thumbnail fab fa-whatsapp fa-2x"
                      style={{ color: "#25D366", backgroundColor: "#cef5dc" }}
                    ></i>
                  </WhatsappShareButton>
                  <p>Whatsapp</p>
                </div>
                <div className="smd">
                  {" "}
                  <i
                    className="img-thumbnail fab fa-facebook-messenger fa-2x"
                    style={{ color: "#3b5998", backgroundColor: "#eceff5" }}
                  ></i>
                  <p>Messenger</p>
                </div>
                <div className="smd">
                  {" "}
                  <i
                    className="img-thumbnail fab fa-telegram fa-2x"
                    style={{ color: "#4c6ef5", backgroundColor: " aliceblue" }}
                  ></i>
                  <p>Telegram</p>
                </div>
                <div className="smd">
                  {" "}
                  <i
                    className="img-thumbnail fab fa-weixin fa-2x"
                    style={{ color: "#7bb32e", backgroundColor: "#daf1bc" }}
                  ></i>
                  <p>WeChat</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {" "}
              <label style={{ fontWeight: "600" }}>
                Page Link <span className="message"></span>
              </label>
              <br />
              <div className="row">
                {" "}
                <input
                  className="col-10 ur"
                  type="url"
                  placeholder="https://www.arcardio.app/acodyseyy"
                  id="myInput"
                  aria-describedby="inputGroup-sizing-default"
                  style={{ height: "40px" }}
                />{" "}
                <button className="cpy" onclick="myFunction()">
                  <i className="far fa-clone"></i>
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
