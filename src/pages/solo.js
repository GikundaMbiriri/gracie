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
   <div class="message-candidate center-block">
     <div class="row">
       <div class="col-xs-8 col-md-6">
         <img src="http://imgc.allpostersimages.com/images/P-473-488-90/68/6896/2GOJ100Z/posters/despicable-me-2-minions-movie-poster.jpg" class="message-photo"/>
         <h4 class="message-name">Mr. Minion</h4>
       </div>
       <div class="col-xs-4 col-md-6 text-right message-date">Date here</div>
     </div>
     <div class="row message-text">
         text over here text over here text over here text over here text over here text over here text over here text over here text over here 
     </div>
   </div></>))

  }
  let p=null;
  if(body){
    p=<>  <div className=" border border-success comment">
    <h2>Leave a comment</h2>
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">@</span>
  </div>
  <input type="text" class="form-control" onChange={onNameChange} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" onChange={onEmailChange} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>





<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">comment here</span>
  </div>
  <textarea class="form-control" onChange={onMessageChange} aria-label="With textarea"></textarea>
</div>
<button type="button" class="btn btn-primary" onClick={handleSubmit}>send</button></div></>
  }
 
console.log(comments)
  return( <><div dangerouslySetInnerHTML={{ __html: body }} />
  
  <div>{p}</div>
<div>{k}</div>

  </>);
};
const mapStateToProps = (state) => ({
  scream: state.data.scream,
});
export default connect(mapStateToProps, { getScream,Comment })(Solo);
