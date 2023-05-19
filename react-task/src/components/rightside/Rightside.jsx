import React from 'react'
import "./rightside.css"
import { Add } from '@material-ui/icons';

export default function Rightside() {
  return (
    <div className='rightside'>
        <div className="rightsidewrapper">
            <div className="rightsideContainer">
                <h1>Trending Songs</h1>
            <div className='rightsideList'>
              <ul>
              <li>
                  Unavailable by <span> Davido</span>
                 <span className="iconButton"><Add/> </span>
                </li>

                <li>
                  Unavailable by <span> Davido</span>
                 <span className="iconButton"><Add/> </span>
                </li>

                <li>
                  Unavailable by <span> Davido</span>
                 <span className="iconButton"><Add/> </span>
                </li>

                <li>
                  Unavailable by <span> Davido</span>
                 <span className="iconButton"><Add/> </span>
                </li>

                <li>
                  Unavailable by <span> Davido</span>
                 <span className="iconButton"><Add/> </span>
                </li>
              </ul>
            </div>

            <div className='buttonMore'>
              <button>View More</button>
            </div>
            </div>
        </div>
    </div>
  )
}
