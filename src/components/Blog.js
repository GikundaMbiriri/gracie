import React, { Component } from "react";
//import 'react-slideshow-image/dist/styles.css'
import './Blog.css'
import { AiFillFacebook,AiFillTwitterCircle,AiOutlineInstagram,AiOutlineMail,AiOutlineWhatsApp } from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  TelegramShareButton,
} from "react-share";
import ShareSharpIcon from '@material-ui/icons/ShareSharp';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import Btn from "./Modal/Index";
//import { Zoom } from 'react-slideshow-image';
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { IconButton, Tooltip } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import CrossfadeImage from 'react-crossfade-image';
import {
  likeScream,
  unlikeScream,
  getScream,
} from "../redux/actions/dataAction";
import MyButton from "../util/MyButton";
import { Chat as ChatIcon } from "@material-ui/icons"; //
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import relativeTime from "dayjs/plugin/relativeTime";
import DeleteScream from "./DeleteScream";
import Rotation from 'react-rotation'
import AOS from 'aos';
import "aos/dist/aos.css";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width:'80vw',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export class Blog extends Component {
  constructor(props){
    super(props);

    this.state = {
       like:false,
        lj:false,
        isOpen:false
    }}
openModal=()=>{
  this.setState({isOpen:true})
  console.log(this.state.isOpen);
}
closeModal=()=>{
  this.setState({isOpen:false})
}
mm=()=>{
  if(!this.state.lj)

  { this.setState({lj:true})}
 
  this.setState({lj:false})
}
  likeScream = () => {
this.props.scream.likeCount++; 
this.setState({like:true}) };
  unlikeScream = () => {
    this.props.scream.likeCount--;
    this.setState({like:false})
  };

  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        body,
        createdAt,
        image,

        blogId,
        likeCount,
        commentCount,
        topic,
        catchy,
      },
      user: {
        authenticated,
        credentials: { name, email },
      },
    } = this.props;
    
    const kk = `/solo/${blogId}`;
    const k = `pizzes.co.ke/#/solo/${blogId}`;
    const inds={
      indicators:false,
      arrows:false,
      scale: 1.4
     
    }
    //const images=Object.keys(image);
    const likeButton = this.state.like ? (
      <Tooltip title="Undo like" >
        <IconButton onClick={this.unlikeScream} >
        <Favorite style={{color:"#a841a3"}} />

        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="like" >
      <IconButton onClick={this.likeScream} >
      <FavoriteBorder style={{color:"#a841a3"}} />

      </IconButton>
    </Tooltip>
    );
    const deleteButton =
      authenticated && email === "petermbiriri8957@gmail.com" ? (
        <DeleteScream blogId={blogId} />
      ) : null;
    return (
      <>
      
        <div className="card1"  >
        <div className="slide-containe">
        <Link to={kk}> 
       
          <img  className="card-img-top" src={image[0]}    alt="..."/> 
 </Link> </div>
  <div className="tran">
     <Link to={kk} style={{textDecoration:"none"}}> <h3>{topic}</h3></Link>
    <p className="ca"dangerouslySetInnerHTML={{ __html: body }}/>
    <div className="ikoni"
    
    >
          
           
           
          <p>{likeButton} {likeCount}  </p>  
          <div>
          <MyButton tip="comments">
              <ChatIcon style={{color:"#a841a3"}} />
            </MyButton>
            <span>{commentCount} </span>
            </div>
            {/* <Btn /> */}
            <div className={this.state.lj?'show':'hide'}>
              hello
            </div>
            <MyButton tip="share">
             
              <ShareSharpIcon style={{color:"#a841a3"}} onClick={this.openModal}  />
              
              
            </MyButton>
            <Modal
        isOpen={this.state.isOpen}
      
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
<div>
  <h6>Share this article </h6>
  <div className="gds">
  <WhatsappShareButton url={k}>
    <AiOutlineWhatsApp className="psa"/>
  </WhatsappShareButton>
  <TwitterShareButton url={k}>
    <AiFillTwitterCircle className="psa"/>
  </TwitterShareButton>
  < TelegramShareButton url={k}>
    <FaTelegramPlane className="psa"/>
  </ TelegramShareButton>
  <FacebookShareButton url={k}>
    <AiFillFacebook className="psa"/>
  </FacebookShareButton>
 
  </div>
</div>

      </Modal>
            </div>
         
  </div>
</div>
        {/* <Card className={classes.card}>
          <CardMedia
            src={image}
            title="Profile image"
            className={classes.image}
            component="img"
          />
          <CardContent className={classes.content}>
            <Typography variant="h5" component={Link} to={`/blogs/${blogId}`}>
              {topic}
            </Typography>

            <Typography variant="body2" color="textSecondary">
              {dayjs(createdAt).fromNow()}
            </Typography>
            <Typography variant="body1">{body}</Typography>
            {likeButton}
            <span>{likeCount} Likes</span>
            <MyButton tip="comments">
              <ChatIcon color="primary" />
            </MyButton>
            <span>{commentCount} comments</span>
            {deleteButton}
          </CardContent>
        </Card> */}
      </>
    );
  }
}
Blog.propTypes = {
  likeScream: PropTypes.func.isRequired,

  unlikeScream: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapActionsToProps = {
  likeScream,
  unlikeScream,
  getScream,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)((Blog));
