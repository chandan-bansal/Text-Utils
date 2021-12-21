import React from 'react'

export default function About(props) {
    return (
        <div>
            
            
            <div className = 'container' style ={{color : props.mode==='dark'?'white':'black'}}><h1>About Me</h1> <p>Hello I am Chandan Bansal. I am currently pursuing B.Tech from Indian Institute of Information and Technology, Una. Currently indulged in web development but have great interest in data science.</p></div>
        </div>
    )
}
