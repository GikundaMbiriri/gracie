import React,{useState} from 'react'
//import { TwitterIcon} from '@material-ui/icons';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import emailjs from 'emailjs-com';
import Bstyler from "../../components/Bstyler";
import './contact.css';



function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6b0drai', 'template_aezob69', e.target, 'user_ssflsnLfCXLbhunoR8lgP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
return  (
            <div className="  yes">
               
                <div className="in">
                    <h6>Get in touch_____</h6>
                    
                    <div className="lls">
                    <h5>Contact Us</h5>
                    <p >For any questions about content,service providers or any other inquiries,Reach out to us via:</p>
                    <div className="iconi"></div>
                    <div className="row">
                        <div className="col">
                        <TwitterIcon/>
                        </div>
                        <div className="col">
                        <FacebookIcon/>
                        </div>
                        <div className="col">
                            <YouTubeIcon/>
                        </div>
                        <div className="col">
                           <InstagramIcon/>
                        </div>
                    </div>
                    <h2>Send me a message</h2>
             
                    <div className="m">
                        <form onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                    <div className="po"></div>
                   <div class="lab">Name</div>
                    <input className="form-control mm" type="text" name="user_name"  placeholder="Your Name" />
                    <div className="po"></div>
                    <div class="lab">Email</div>
                    <input className="form-control mm" type="email" name="user_email"  placeholder="Your Email" />
                    <div className="po"></div>
                    <div class="lab">Message</div>
                    <textarea name="message" className="form-control mm" rows="5"  ></textarea>
                    <div className="po"></div>
    <button className="btn btn-primary pr-3 pl-3" type="submit"  value="Send">Send</button>
    </form>
    <div className="ddg"/>
                    </div>
                
                    </div>
                 
                </div>
              
            </div>
        )
 
}
export default Contact

// function Contact() {
//     const [Name,setName]=useState('');
//     const [Email,setEmail]=useState('');
//     const [Text,setText]=useState('');
   


//     const handleOnclick=(event)=>{
//         event.preventDefault();
//         const contente={
//             reply_to:Email,
//             to_name:Name,
//             from_name:'Pizzes app',
//             message:Text
//         }
//         console.log(event.target);
//         emailjs.sendForm('95d37201102aa2c556cbd1f2f25490b4','template_aezob69',event.target,'user_ssflsnLfCXLbhunoR8lgP') .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         setEmail('');
//         setName('');
//         setText('');
//     }
//     return (
//         <div className="  yes">
           
//             <div className="in">
//                 <h6>Get in touch_____</h6>
                
//                 <div className="lls">
//                 <h5>Contact Us</h5>
//                 <p >For any questions about content,service providers or any other inquiries,Reach out to us via:</p>
//                 <div className="iconi"></div>
//                 <div className="row">
//                     <div className="col">
//                     <TwitterIcon/>
//                     </div>
//                     <div className="col">
//                     <FacebookIcon/>
//                     </div>
//                     <div className="col">
//                         <YouTubeIcon/>
//                     </div>
//                     <div className="col">
//                        <InstagramIcon/>
//                     </div>
//                 </div>
//                 <h2>Send me a message</h2>
//                 <div className="m">
//                 <div className="po"></div>
//                <div class="lab">Name</div>
//                 <input className="form-control mm" type="text" name="to_name" onChange={event => setName(event.target.value)} placeholder="Your Name" value={Name}/>
//                 <div className="po"></div>
//                 <div class="lab">Email</div>
//                 <input className="form-control mm" type="email" name="reply_to" onChange={event => setEmail(event.target.value)} placeholder="Your Email" value={Email}/>
//                 <div className="po"></div>
//                 <div class="lab">Message</div>
//                 <textarea name="Text1" className="form-control mm" rows="5" name="Text" onChange={event => setText(event.target.value)} value={Text}></textarea>
//                 <div className="po"></div>
// <button className="btn btn-primary pr-3 pl-3" type="submit" onClick={handleOnclick}>Send</button>

// <div className="ddg"/>
//                 </div>
//                 </div>

//             </div>
       
//         </div>
//     )
// }

// export default Contact

