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
              
               
               <div className="kali">
                   <div className="pic">
                       <h2 className="hj">Pizzes Podcast</h2>
                   </div>
               </div>
            
               <Bstyler className="kl" img={grace}>
<div className="cont">
    <h2>Available episodes</h2>
    <div className="dg">
        
        <b>Episode 4-More than Meets the Eye</b>
        <p></p>
        <audio controls>

  <source src="https://firebasestorage.googleapis.com/v0/b/pizzes-2f536.appspot.com/o/podcast%2FMore%20than%20meets%20the%20eye.mp4?alt=media&token=7bf12418-f483-4738-ac62-4055ecf17b09" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
    </div>
    <div className="dg">
        
        <b>Red and Complete (a valentines edition)</b>
        <p></p>
        <audio controls>

  <source src="https://firebasestorage.googleapis.com/v0/b/pizzes-2f536.appspot.com/o/RED%20AND%20COMPLETE%20PODCAST.mp4?alt=media&token=281654ed-cd30-464c-bc62-b0aea9a56f5e" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
    </div>
    <div className="dg">
        
        <b>Episode 2-Uncover</b>
        <p></p>
        <audio controls>

  <source src="https://firebasestorage.googleapis.com/v0/b/pizzes-2f536.appspot.com/o/UNCOVER%20PODCAST.mp4?alt=media&token=e3cca35f-aec8-4f66-af28-ff9fb39aec0e" type="audio/mpeg"/>
  Your browser does not support the audio element.
</audio>
    </div>
    <div className="dg">
        
        <b>Episode 1-Your Secret Place</b>
        <p></p>
        <audio controls>

  <source src="https://firebasestorage.googleapis.com/v0/b/pizzes-2f536.appspot.com/o/SECRET%20PLACE%20PODCAST%201(1).mp4?alt=media&token=fcc0d75d-7908-4547-8b39-da269b5a25c4"/>
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

