// import React from 'react'
// import './about.css'
// function About() {
//     return (
//         <div className="aboutB">
//            <h2  >About Blogger</h2> 
// <div className="tr"   >
//     <p>
// A lot of People know me as Kanyasya, Kanyas, Grace, among many other name inventions that relate to my identity.
//  However, my proper complete name is Grace Mwende Kanyasya. A girl whose loves music, especially the type that speaks to
//   my soul. I love seeing people happy and at peace. I love everything about good hair, and I keep a lot of designer 
//   friends because they are very interesting people, whose level of creativity intrigues me. </p>
//   <p >I enjoy fierce business 
//   and financial conversations. I love adventure, events and social connections.  I love listening to different 
//   perspectives and mentalities on different things. I like to eat, pizza being my favorite (utterly not the reason
//    I named this blog Pizzes, something you’d actually know if you checked out; About Pizzes). Chicken for me comes 
//    right after pizza, so if you were to add one to two, you’d figure out that Chicken barbeque is my pizza jam.</p>
//    <p>
//     I appreciate anyone and anything that challenges my thinking, beliefs, and ideologies. I love solving problems,
//      issues. I enjoy real in-depth conversations, and cheers to all paragraph texters, same Whatsapp group guys!
//       I honor relationships, the greatest one being, the one I have with God. He is my everything. Everything.
// Above all, I value truth.   I am a passionate inspirational writer, former and founder of The Weekly Zag youth blog, 
// and former writer at Tunda Website. I’m also an academic writer, who takes to heart matters concerning research, 
// study, and knowledge.</p>
// <p>
// A Welcome to Pizzes! A place where we re-define, renew, and transform people, mindsets, and lives into greatness.
// </p>
// </div>

//         </div>
//     )
// }


import React, { useEffect,useState } from 'react'
import './about.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import { getScreams } from "../../redux/actions/dataAction";
import PropTypes from "prop-types";
import Latest from '../../components/latest/Latest'
import { connect } from "react-redux";
import Subscribe from '../../components/subscribe/Subscribe'
import AOS from 'aos';
import "aos/dist/aos.css";
function About(props) {
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
    useEffect(() => {
        props.getScreams();
      }, []);
      useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
      const { screams, loading } = props.data;

let success;
if(screams[0]){
 success=<Latest scream={screams[0]}/>
}
else{
    success=<p>loading</p>

}
//console.log(ks)
    return (
        <div>
            <div className="outside">
                <div className="about">
                <h2  >About Blogger</h2> 
<div className="tr"   >
    <p>
A lot of People know me as Kanyasya, Kanyas, Grace, among many other name inventions that relate to my identity.
 However, my proper complete name is Grace Mwende Kanyasya. A girl whose loves music, especially the type that speaks to
  my soul. I love seeing people happy and at peace. I love everything about good hair, and I keep a lot of designer 
  friends because they are very interesting people, whose level of creativity intrigues me. </p>
  <p >I enjoy fierce business 
  and financial conversations. I love adventure, events and social connections.  I love listening to different 
  perspectives and mentalities on different things. I like to eat, pizza being my favorite (utterly not the reason
   I named this blog Pizzes, something you’d actually know if you checked out; About Pizzes). Chicken for me comes 
   right after pizza, so if you were to add one to two, you’d figure out that Chicken barbeque is my pizza jam.</p>
   <p>
    I appreciate anyone and anything that challenges my thinking, beliefs, and ideologies. I love solving problems,
     issues. I enjoy real in-depth conversations, and cheers to all paragraph texters, same Whatsapp group guys!
      I honor relationships, the greatest one being, the one I have with God. He is my everything. Everything.
Above all, I value truth.   I am a passionate inspirational writer, former and founder of The Weekly Zag youth blog, 
and former writer at Tunda Website. I’m also an academic writer, who takes to heart matters concerning research, 
study, and knowledge.</p>
<p>
A Welcome to Pizzes! A place where we re-define, renew, and transform people, mindsets, and lives into greatness.
</p>
</div>
</div>
<div  >  
    {success}
   <Subscribe/>
</div>
</div>
<div>
</div>
{/* <div className="con">
  <div className="front">
    <h1 className="title">Faisal Ansari</h1>
    <span className="description">I am a graphic designer and art director. I am as well specialised in front end web design, user experience and creating identities. Throughout my career, I have worked with companies of all shapes and sizes that enriched my experience.</span>
  </div>
  <div className="back">
    <h1 className="title">Contact Me</h1>
    <div className="input-box">
      <input type="text" name="name" id="name" autocomplete="off" required/>
      <label for="name">Your name</label>
    </div>
    <div className="input-box">
      <input type="text" name="email" id="email" autocomplete="off" required/>
      <label for="email">Your email</label>
    </div>
    <div className="input-box">
      <textarea name="msg" id="msg" cols="30" rows="2" autocomplete="off" required></textarea>
      <label for="msg">Your message</label>
    </div>
    <button className="send">Send</button>
  </div>
</div> */}
<div className="details">

find us on <FacebookIcon /> <InstagramIcon/> <EmailIcon/>

<p>thisemail@2.com</p>
<p>website developer <a href="#">mgikunda</a></p>
<p>blog photographer <a href="#">pizzes photography</a></p>
<p>blog graphic designer <a href="#">ingenious</a></p>
</div>
<form className="form-block yt">
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

	</form>
        </div>
    )
}
About.propTypes = {
    getScreams: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => ({
    data: state.data,
  });
  
export default  connect(mapStateToProps, { getScreams })(About);
//move the image
//design the contact part