import React,{useState} from 'react'
//import { TwitterIcon} from '@material-ui/icons';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import ReactWhatsapp from 'react-whatsapp';
import emailjs from 'emailjs-com';
import{ Link} from 'react-router-dom';
import Bstyler from "../../components/Bstyler";
import axios from "axios";
import {  useToasts ,ToastProvider} from 'react-toast-notifications';
import './contact.css';



function Contact() {
    const { addToast } = useToasts();
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [message,setMessage]=useState("");

const sendEmail = async (e)=>{
    e.preventDefault();
    const info={
        email:name,
        name:email,
        message:message,
      }
      try {
          await   axios
          .post(
            'https://us-central1-pizzes-2f536.cloudfunctions.net/api/cont',info)
            setName("")
            setEmail("")
            setMessage("")
            addToast('WE HAVE RECEIVED YOUR MESSAGE',{appearance:'success',autoDismissTimeout:5000,autoDismiss:true,});

      } catch (error) {
        addToast('There was a problem', { appearance: 'error' });
          
      }
  
 
  }
return  (
    <ToastProvider>
            <div className="  yes">
               
                <div className="in">
                    <h6>Get in touch_____</h6>
                    
                    <div className="lls">
                    <h5>Contact Us</h5>
                    <p >For any questions about content,service providers or any other inquiries,Reach out to us via:</p>
                    <div className="iconi"></div>
                    <div className="row">
                        <div className="col">
                          <a href="https://twitter.com/MissKanyasya?s=08">
                            <TwitterIcon/>
                          </a>
                        
                        </div>
                        <div className="col">
                            <a href="https://www.facebook.com/profile.php?id=100064840879936">
                            <FacebookIcon/>
                            </a>
                        
                        </div>
                        <div className="col">
                        <ReactWhatsapp number="0758462107" message="Hello World!!!" />
                            <YouTubeIcon/>
                        </div>
                        <div className="col">
                            <a href="https://instagram.com/pizzes._?utm_medium=copy_link">
                            <InstagramIcon/>
                            </a>
                          
                        </div>
                    </div>
                    <h2>Send me a message</h2>
             
                    <div className="m">
                        <form onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                    <div className="po"></div>
                   <div class="lab">Name</div>
                    <input className="form-control mm" type="text" name="user_name" value={name} onChange={event=>setName(event.target.value)}  placeholder="Your Name" />
                    <div className="po"></div>
                    <div class="lab">Email</div>
                    <input className="form-control mm" type="email" name="user_email" value={email} onChange={event=>setEmail(event.target.value)}  placeholder="Your Email" />
                    <div className="po"></div>
                    <div class="lab">Message</div>
                    <textarea name="message" className="form-control mm" rows="5" value={message} onChange={event=>setMessage(event.target.value)} ></textarea>
                    <div className="po"></div>
    <button className="btn btn-primary pr-3 pl-3" type="submit"  value="Send">Send</button>
    </form>
    <div className="ddg"/>
                    </div>
                
                    </div>
                 
                </div>
              
            </div>
            </ToastProvider>
        )
 
}
export default Contact


