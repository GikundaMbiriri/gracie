import React, { useEffect,useState } from "react";
import { getScream,Comment } from "../redux/actions/dataAction";
import { connect } from "react-redux";
import './solo.css'
import relativeTime from "dayjs/plugin/relativeTime";

import dayjs from 'dayjs'

const Solo =  (props) => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
 const onNameChange = (event) => {
    setName(event.target.value );
  };
const  onEmailChange = (event) => {
    setEmail(event.target.value );
  };
 const onMessageChange = (event) => {
    setMessage(event.target.value );
  };
  useEffect( () =>  {
   props.getScream(props.match.params.id);

  }, [props.scream.comments]);
const  handleSubmit=(event)=>{
	event.preventDefault()

    const variables={
      name,email,message
    }
    props.Comment(variables,props.match.params.id)
    
	setMessage('')
	setName('')
	setEmail('')
  }
let k= <div className="cover">
<div className="loader">  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div></div></div>
dayjs.extend(relativeTime);

  const {body,createdAt,loading,comments}=props.scream
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
					<input class="form-control" onChange={onNameChange} value={name} type="text" placeholder="Your name"/>
				</div>
			</div>
			<div>
			<div class="form-group">
    <input type="email" class="form-control" onChange={onEmailChange} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
			</div>
			<div >									
				<div className="form-group">
					<textarea className="form-control" onChange={onMessageChange} value={message} required="" placeholder="Your text"></textarea>
				</div>
			</div>
			
		</div>
		<button className="btn btn-primary" onClick={handleSubmit}>submit</button>

	</form></>
  }
 
  return( <><div className="greatness" dangerouslySetInnerHTML={{ __html: body }} />


<div>  <div className="be-comment-block">
{p}  <div>{k}</div>
</div></div>

  </>);
};
const mapStateToProps = (state) => ({
  scream: state.data.scream,
});
export default connect(mapStateToProps, { getScream,Comment })(Solo);
