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
               {/* <div className="add">
                   <h2>Pizzes Podcast</h2>
                   <p>
                   Where we bring the pizzes written content to life! Renew Re-define Transform.
Pizzes podcast page is an inspirational platform,linked to the pizzes blog,  where we conduct extended discussions,
  debates, and listen to the verbal  opinions of our readers concerning the written content posted on the  Pizzes blog page. 
We get to hear the minds, voices and opinions of our readers, on the issues and topics that we write about,
 on the pizzes blog page. We also get to hear real life personal stories of readers of the Pizzes blog,
  and how they relate with the written content on our blog page. Here is where we bring the written words to life
                   </p>
               </div> */}
               <Bstyler className="kl" img={grace}>
<div className="cont">
    <h2>Available episodes</h2>
    <div className="dg">
        
        <b>Episode 1-It's About Time.</b>
        <p></p>
        <audio controls>

  <source src="https://firebasestorage.googleapis.com/v0/b/pizzes-2f536.appspot.com/o/pod.mpeg?alt=media&token=b1a63c5b-5856-44c4-8b3d-cd7f55708c50"/>
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

