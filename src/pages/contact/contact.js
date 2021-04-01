import React from 'react'
//import { TwitterIcon} from '@material-ui/icons';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Bstyler from "../../components/Bstyler";
import './contact.css';
function contact() {
    return (
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
                <div className="po"></div>
                <input className="form-control mm" type="text" placeholder="Default input"/>
                <div className="po"></div>
                <input className="form-control mm" type="text" placeholder="Default input"/>
                <div className="po"></div>
<input className="form-control mm" type="text" placeholder="Default input"/>
<div className="ddg"/>
                </div>
                </div>

            </div>
       
        </div>
    )
}

export default contact

