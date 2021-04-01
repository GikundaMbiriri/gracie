import React,{useState} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './subscribe.css'
import {subscribe} from '../../redux/actions/dataAction'
function Subscribe() {
    const [emei,setEmei]=useState('')
    const [loading, setLoading] = useState(false);
    const handleClick=(event)=>{
        event.preventDefault();
        setEmei('');
        setLoading(true);
        console.log(emei)
        const info={
            'email':emei
        }
        

        subscribe(info).finally(() => {
            setTimeout(() => setLoading(false), 0)
        }).catch(()=>{
            setTimeout(() => setLoading(false), 0)
        })
        
        
    }
   //subscribe popup
    return (
        <div>
            <div id="container">
	<h5>Ready to rise to Greatness?</h5>
	<p>Stay updated with our newsletter</p>
  
	<form>
		<input type="email" onChange={event => setEmei(event.target.value)} placeholder="Type your Email" required value={emei}/>
			<br/>
            <div className="teke">
		<button className="choose" onClick={handleClick}>{loading ? <CircularProgress/> : "I'm ready!"}</button>
        <button className="reject">No thanks!</button>
        </div>
	</form>
</div>
        </div>
    )
}

export default Subscribe
