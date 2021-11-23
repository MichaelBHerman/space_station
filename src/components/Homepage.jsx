import React from 'react';
import sample from '../images/ISS.mp4'
import '../components/homepage.css'

function Homepage() {
    return(
        <div id='main'>
            <div className='header-heading'>
            <h2>EXPLORE THE</h2><h2>INTERNATIONAL SPACE STATION</h2>
            <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
            </video>
            </div>
        </div>

    )
}

export default Homepage;