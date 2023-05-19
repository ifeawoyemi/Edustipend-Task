import React from 'react'
import "./home.css"
import Leftside from "../components/leftside/Leftside"
import Rightside from "../components/rightside/Rightside"

export default function Home() {
  return (
    <div className='home'>
        <div className="homeContent">
        <Leftside />
        <Rightside />
        </div>
    </div>
  )
}
