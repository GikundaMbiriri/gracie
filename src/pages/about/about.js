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
            <h2  >ABOUT PIZZES</h2>
            <i className="italic" >Re-define. Renew. Transform.</i>
            <p> A warm welcome to the Pizzes blog page! </p>
           
              <p>
Pizzes is an inspirational blog, and more than just a blog website, 
Pizzes is a place. A place where you will experience peace, inspiration, and truth.
 It’s a place where we shall discuss truths behind the tough, deep,
  and sensitive unspoken issues that we as young people have to carry and deal with, 
  as we try to get through each day.<p/>
 Pizzes is a word I formed, from the word Pizzicato, 
 which is a musical term that describes the playing of a stringed instrument through plucking by hand, 
 mostly the Harp. The playing of the harp is therapeutic and has a calming and healing effect, 
 which is the same effect I hope will be experienced and felt by every individual that comes into contact with
  the words on this blog page.

Here at Pizzes, we will be opened up to re-definition of our thinking patterns, the renewal of our mindsets through knowledge that will give us the strength we need to break out of the levels that we have stagnated in. It merely enough, to simply keep talking about how messed up things have become. We need to take a step, and begin to gain intellectual, mental, social and spiritual, knowledge, wisdom insight, and may the power that works through these truths, bring us to a point of progression, healing of our hearts and minds, and transformation into our very best selves.
For my listening audience, I gatchyu! I will keep uploading audio or podcast versions of my written content just for you!
</p>
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
{/* <div className="details">

find us on <FacebookIcon /> <InstagramIcon/> <EmailIcon/>

<p>thisemail@2.com</p>
<p>website developer <a href="#">mgikunda</a></p>
<p>blog photographer <a href="#">pizzes photography</a></p>
<p>blog graphic designer <a href="#">ingenious</a></p>
</div> */}
{/* <form className="form-block yt">
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

	</form> */}
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
