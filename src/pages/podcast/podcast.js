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
  <source src="horse.ogg" type="audio/ogg"/>
  <source src="https://firebasestorage.googleapis.com/v0/b/zigzag-d2feb.appspot.com/o/Paul_Clement_-_Amenifanyia_Amani_(official_music_video)(128k).mp3?alt=media&token=954660cc-24ae-4723-a1f2-64eaa7d7c66d" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
    </div>
    <div className="dg">
        
        <b>Eps 1-Its about time</b>
        <p>#pizzes eps1 <span>3 days ago</span></p>
        <audio controls>
  <source src="horse.ogg" type="audio/ogg"/>
  <source src="https://firebasestorage.googleapis.com/v0/b/zigzag-d2feb.appspot.com/o/Paul_Clement_-_Amenifanyia_Amani_(official_music_video)(128k).mp3?alt=media&token=954660cc-24ae-4723-a1f2-64eaa7d7c66d" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
    </div>  <div className="dg">
        
        <b>Eps 1-Its about time</b>
        <p>#pizzes eps1 <span>3 days ago</span></p>
        <audio controls>
  <source src="horse.ogg" type="audio/ogg"/>
  <source src="horse.mp3" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
    </div>  <div className="dg">
        
        <b>Eps 1-Its about time</b>
        <p>#pizzes eps1 <span>3 days ago</span></p>
        <audio controls>
  <source src="horse.ogg" type="audio/ogg"/>
  <source src="horse.mp3" type="audio/mpeg"/>
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

