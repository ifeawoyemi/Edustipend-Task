import React from 'react'
import "./leftside.css"

export default function Leftside() {
  return (
    <div className='leftside'>
        <div className="leftsidewrapper">
            <div className='leftsideContent'>
            <h1>Make your party fun!</h1> 
            <p>Create your own custom playlist today</p>
            <button className='playButton'>Create playlist</button>
            </div>           
        </div>
    </div>
  )
}
