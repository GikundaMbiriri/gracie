import React, { useEffect,useState } from "react";
import { getScream,Comment,getScreams } from "../redux/actions/dataAction";
import { connect } from "react-redux";
import './solo.css'
import relativeTime from "dayjs/plugin/relativeTime";
import banner from "../images/pic2.jpg";
import dayjs from 'dayjs';
import Subscribe from '../components/subscribe/Subscribe'
import Latest from "../components/latest/Latest"
import StyledHeader from "../components/StyledHeader"
import AOS from 'aos';
import "aos/dist/aos.css";
const Solo =  (props) => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
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
  useEffect(() => {
	AOS.init({
	  duration : 2000
	});
  }, []);
  const { screams } = props.data;

  let success;
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
				<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="be-ava-comment"/>
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
				<div className="form-group ">
					<input className="form-control" onChange={onNameChange} value={name} type="text" placeholder="Your name"/>
				</div>
			</div>
			<div>
			<div className="form-group">
    <input type="email" className="form-control" onChange={onEmailChange} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

			</div>
			<div>


			</div>	
			  {/* <div className="form-group">
  <input className="form-check-input" type="checkbox" onChange={onSub} value={sub} id="defaultCheck1"/>
  <label className="form-check-label" for="defaultCheck1">
    Default checkbox
  </label>
</div> */}
			<div >									
				<div className="form-group">
					<textarea className="form-control" onChange={onMessageChange} value={message} required="" placeholder="Your text"></textarea>
					<input type="checkbox" className="fo" onChange={onSub} value={sub}  checked={sub==="1"}/>
					notify me via email
				</div>
			</div>
			
		</div>
		
		<button className="btn btn-primary" onClick={handleSubmit}>submit</button>

	</form></>
  }
 
  return( <>
  <StyledHeader img={banner} className="banner">
	  <div className="hey">
		  <h1 className="tt">{topic}</h1>
		  <div className="very"><div className="fg"><i className="fa fa-clock-o"></i>
					{dayjs(createdAt).fromNow()}</div>
					</div>
	  </div>
  </StyledHeader>
<div className="carrier">
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

  </>);
};
const mapStateToProps = (state) => ({
  scream: state.data.scream,
  data:state.data
});
export default connect(mapStateToProps, { getScream,Comment,getScreams })(Solo);
