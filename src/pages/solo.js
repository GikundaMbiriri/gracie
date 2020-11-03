import React, { useEffect,useState } from "react";
import { getScream,Comment } from "../redux/actions/dataAction";
import { connect } from "react-redux";
import './solo.css'
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

  }, []);
const  handleSubmit=()=>{
    const variables={
      name,email,message
    }
    props.Comment(variables,props.match.params.id)
    
    
  }
let k=<p>loading</p>
  const {body,createdAt,loading,comments}=props.scream
  console.log(body)
  if(comments){
    console.log(comments)
     k= comments.map((comment)=>
   ( <>
	<h1 class="comments-title">Comments (3)</h1>
	<div class="be-comment">
		<div class="be-img-comment">	
			<a href="blog-detail-2.html">
				<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="be-ava-comment"/>
			</a>
		</div>
		<div class="be-comment-content">
			
				<span class="be-comment-name">
					<a href="blog-detail-2.html">Ravi Sah</a>
					</span>
				<span class="be-comment-time">
					<i class="fa fa-clock-o"></i>
					May 27, 2015 at 3:14am
				</span>

			<p class="be-comment-text">
				Pellentesque gravida tristique ultrices. 
				Sed blandit varius mauris, vel volutpat urna hendrerit id. 
				Curabitur rutrum dolor gravida turpis tristique efficitur.
			</p>
		</div>
	</div></>))

  }
  let p=null;
  if(body){
    p=<>  <form class="form-block">
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<div class="form-group fl_icon">
					<div class="icon"><i class="fa fa-user"></i></div>
					<input class="form-input" type="text" placeholder="Your name"/>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 fl_icon">
				<div class="form-group fl_icon">
					<div class="icon"><i class="fa fa-envelope-o"></i></div>
					<input class="form-input" type="text" placeholder="Your email"/>
				</div>
			</div>
			<div class="col-xs-12">									
				<div class="form-group">
					<textarea class="form-input" required="" placeholder="Your text"></textarea>
				</div>
			</div>
			<a class="btn btn-primary pull-right">submit</a>
		</div>
	</form></>
  }
 
console.log(comments)
  return( <><div dangerouslySetInnerHTML={{ __html: body }} />
  
<div>  <div class="be-comment-block">
{k}  <div>{p}</div>
</div></div>

  </>);
};
const mapStateToProps = (state) => ({
  scream: state.data.scream,
});
export default connect(mapStateToProps, { getScream,Comment })(Solo);
