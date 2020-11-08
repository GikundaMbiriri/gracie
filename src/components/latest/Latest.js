import React, { Component } from "react";
//import 'react-slideshow-image/dist/styles.css'
import './latest.scss'
import { Link } from "react-router-dom";
import Btn from "../Modal/Index";
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
} from "../../redux/actions/dataAction";
import MyButton from "../../util/MyButton";
import { Chat as ChatIcon } from "@material-ui/icons"; //
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import relativeTime from "dayjs/plugin/relativeTime";
import DeleteScream from "../DeleteScream";
import Rotation from 'react-rotation'
export class Latest extends Component {
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.blogId === this.props.scream.blogId
      )
    )
      return true;
    else
    { return false;}
  };
  likeScream = () => {
    this.props.likeScream(this.props.scream.blogId);
  };
  unlikeScream = () => {
    this.props.unlikeScream(this.props.scream.blogId);
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
    const inds={
      indicators:false,
      arrows:false,
      scale: 1.4
     
    }
    //const images=Object.keys(image);
    const likeButton = !authenticated ? (
      <Tooltip title="like" >
    <IconButton onClick={this.likeScream} >
    <Link to="/login">
          <FavoriteBorder style={{color:"#a841a3"}} />
        </Link>
    </IconButton>
  </Tooltip>
     
    ) : this.likedScream() ? (
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
    
        <div className="car" >
        <div className="slide-container">
        <Link to={kk}> 
        <div className="image-container">
      {image.map ((im,index)=>
          <img key={index} className="card-img-to" src={im}    alt="..."/> 
         )}
        </div>
 </Link> </div>
  <div className="tran">
      <h3>{topic}</h3>
    <p className="c">ddddddddddddddd and we are looking for the best talent here
and therefore we are doing the best we can    {catchy}</p>
    <div className="ikoni"
    
    >
          
           
           
          <p>{likeButton} {likeCount}  </p>  
          <div>
          <MyButton tip="comments">
              <ChatIcon style={{color:"#a841a3"}} />
            </MyButton>
            <span>{commentCount} </span>
            </div>
            <Btn />

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
Latest.propTypes = {
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
)((Latest));
