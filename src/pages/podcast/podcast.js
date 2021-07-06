import React from 'react'
import Styler from '../../components/PodcastStyle';
import picha from "../../images/download.jpg";
import grace from '../../images/grace.jpeg';
import Bstyler from "../../components/Bstyler";
import Subscribe from '../../components/subscribe/Subscribe'
import './podcast.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
function podcast() {
    return (
        <div>
           {/* <Styler className="kali" img={picha}>
               <h3>here we go</h3>
               
               
               </Styler>  */}
               {/* <div className="subs"> <AnchorLink href="#1">
<button className="btn btn-primary">
    subscribe
</button>
               </AnchorLink></div> */}
              
               
               <div className="kali">
                   <div className="pic">
                       <h2 className="hj">Pizzes Podcast</h2>
                   </div>
               </div>
               <Bstyler className="kl" img={grace}>
<div className="cont">
    <h2>Available episodes</h2>
    <div className="dg">
        
        <b>Eps 1-Its about t</b>
        <p>#pizzes eps1 <span>3 days ago</span></p>
        <audio controls>

  <source src="https://firebasestorage.googleapis.com/v0/b/zigzag-d2feb.appspot.com/o/grahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.mpeg?alt=media&token=643a5195-6bbd-488d-9b77-ade2fd4af145" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
    </div>
    
</div>
               </Bstyler>


               <div id="1"><Subscribe  /></div>
        </div>
       
    )
}

export default podcast

