import React,{useState} from 'react'
import './subscribe.css'
import {subscribe} from '../../redux/actions/dataAction'
function Subscribe() {
    const [emei,setEmei]=useState('')
    const handleClick=(event)=>{
        event.preventDefault();
        console.log(emei)
        const info={
            'email':emei
        }
        subscribe(info)
    }
   
    return (
        <div>
            <div id="container">
	<h5>Ready to rise to Greatness?</h5>
	<p>Stay updated with our newsletter</p>
  
	<form>
		<input type="email" onChange={event => setEmei(event.target.value)} placeholder="Type your Email" required/>
			<br/>
            <div className="teke">
		<button className="choose" onClick={handleClick}>I'm ready!</button>
        <button className="reject">No thanks!</button>
        </div>
	</form>
</div>
        </div>
    )
}

export default Subscribe
