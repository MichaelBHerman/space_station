import React from 'react';
import earth from '../images/earth.mp4'
import '../components/Isstracker.css'


function IssTracker() {
   

    return(
        <div>
            <video className='videoTag' autoPlay loop muted>
            <source src={earth} type='video/mp4' />
            </video>
            <div id='youtube-container'>
            <iframe width="1280" height="700" src="https://www.youtube.com/embed/u-ngXpZKHvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default IssTracker;