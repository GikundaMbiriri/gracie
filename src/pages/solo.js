import React, { useEffect,useState } from "react";
import { getScream,Comment,getScreams } from "../redux/actions/dataAction";
import { connect } from "react-redux";
import './solo.css'
import relativeTime from "dayjs/plugin/relativeTime";
import banner from "../images/pic2.jpg";
import avatar from '../images/avt.jpg';
import dayjs from 'dayjs';
import Subscribe from '../components/subscribe/Subscribe'
import Latest from "../components/latest/Latest"
import StyledHeader from "../components/StyledHeader"
import AOS from 'aos';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
	root: {
	  '& > *': {
		flexGrow: 1,
	  },
	},
	inner:{
	width:'100%'
	}
  }));
const Solo =  (props) => {
	const classes = useStyles();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const [value,setValue]=useState(Math.floor(Math.random() * 3) + 1)
  const [sub,setSub]=useState('0')
 const onNameChange = (event) => {
    setName(event.target.value );
  };
const  onEmailChange = (event) => {
    setEmail(event.target.value );
  };
 const onMessageChange = (event) => {
    setMessage(event.target.value );
  };
  let l;
const onSub=(event)=>{
	if(sub==='0'){
		setSub('1')
	}
	if(sub==='1'){
		setSub('0')
	}
}
  useEffect( () =>  {
   props.getScream(props.match.params.id);


  }, [props.scream.comments]);
  useEffect(()=>{
	  props.getScreams();
	 
  },[]);
  console.log("skkkdk")
  useEffect(() => {
	AOS.init({
	  duration : 2000
	});
  }, []);
  const { screams } = props.data;
const pl=Math.floor(Math.random() * 3) + 1
  let success;
if(l){
	console.log(l)
}

  if(screams[0]){
   success=<Latest scream={screams[0]}/>
  }
  else{
	  success=<p>loading</p>
  
  }
const  handleSubmit=(event)=>{
	event.preventDefault()

    const variables={
      name,email,message,sub
    }
    props.Comment(variables,props.match.params.id)
    
	setMessage('')
	setName('')
	setEmail('')
	setSub('0')
  }
let k= <div className="cover">
<div className="loader">  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div></div></div>
dayjs.extend(relativeTime);

  const {body,createdAt,topic,loading,comments}=props.scream;
  
  if(comments){
     k= comments.map((comment)=>
   ( <>
	<div className="be-comment">
		<div className="be-img-comment">	
			<a href="blog-detail-2.html">
				<img src={avatar} alt="" className="be-ava-comment"/>
			</a>
		</div>
		<div className="be-comment-content">
			
				<span className="be-comment-name">
   <a href="blog-detail-2.html">{comment.name}</a>
					</span>
				<span className="be-comment-time">
					<i className="fa fa-clock-o"></i>
					{dayjs(comment.createdAt).fromNow()}
				</span>

			<p className="be-comment-text">
				{comment.body}
			</p>
		</div>
	</div></>))

  }
  let p=null;
  if(body){
    p=<>  <form className="form-block yt">
		<h4>leave a comment</h4>
		<div >
			<div>
			<form className={classes.root} noValidate autoComplete="off">
			<Grid container spacing={3}>
    <Grid item xs={12}>
			<TextField  item xs={12} className={classes.inner}   label="name"   onChange={onNameChange} value={name} variant="outlined" />
			</Grid>
			<Grid item xs={12}>
      <TextField id="outlined-basic" className={classes.inner}   label="Email"  onChange={onEmailChange} value={email} variant="outlined" />
	  </Grid>
	  <Grid item xs={12}>
      <TextField id="outlined-basic" className={classes.inner}  label="comment"  variant="outlined" multiline  onChange={onMessageChange} value={message}
  rows={4}/></Grid>
  </Grid>
    </form>	
					</div>
			
		</div>
		
		<button className="btn btn-primary" onClick={handleSubmit}>submit</button>

	</form></>
  }
 
  return( <div className="py">
  <StyledHeader img={banner} className="banner">
	  <div className="hey">
	  <div className="we"/>
		  <h1 className="tt">{topic}</h1>
		  <div className="very"><div className="fg"><i className="fa fa-clock-o"></i>
					{dayjs(createdAt).fromNow()}</div>
					</div>
	  </div>
  </StyledHeader>
<div className="carrier">
	<div className="we"/>

	<div className="pl"><h2>{topic}</h2>
	
  <div className="greatness" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
<div className="very"><div className="ff">{success}</div>
<Subscribe/>
</div>
</div>

<div>  <div className="be-comment-block">
{p}  <div>{k}</div>
</div></div>

  </div>);
};
const mapStateToProps = (state) => ({
  scream: state.data.scream,
  data:state.data
});
export default connect(mapStateToProps, { getScream,Comment,getScreams })(Solo);
