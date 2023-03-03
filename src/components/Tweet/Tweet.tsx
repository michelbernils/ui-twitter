
import { ChatCircle, ArrowClockwise, Heart } from 'phosphor-react'

import '../Tweet/Tweet.css'

import {
  Link
} from "react-router-dom";



interface TweetProps {
  content: string
}


export function Tweet(props: TweetProps) {
  return(
    <Link to='/status' className='tweet'>
      <img src="https://github.com/michelbernils.png" alt="Michel Bernils" />
      <div className="tweet-content">

        <div className="tweet-content-header">
          <strong>Michel Bernils</strong>
          <span>@michelbernils</span>
        </div>

        <p>
          {props.content}
        </p>

        <div className="tweet-content-footer">
          <button type="button" className="">
            <ChatCircle />
            20
          </button>

          <button type="button" className="">
            <ArrowClockwise />
            20
          </button>

          <button type="button" className="">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}