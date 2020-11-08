import React from 'react'
import './subscribe.css'
function Subscribe() {
    return (
        <div>
            <div id="container">
	<h5>Ready to rise to Greatness?</h5>
	<p>Stay updated with our newsletter</p>
  
	<form>
		<input type="email" placeholder="Type your Email" required/>
			<br/>
            <div className="teke">
		<button className="choose">I'm ready!</button>
        <button className="reject">No thanks!</button>
        </div>
	</form>
</div>
        </div>
    )
}

export default Subscribe
