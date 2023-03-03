import { FormEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";

import './Timeline.css'


export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([])

  function createNewTeet(event: FormEvent) {
    event.preventDefault();

    setTweets( [newTweet, ...tweets] )
    setNewTweet('')
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTeet} className="new-tweet-form">

        <label htmlFor="tweet">
          <img
            src="https://github.com/michelbernils.png"
            alt="Michel Bernils"
          />
          <textarea id="tweet" placeholder="What's Happening" value={newTweet} onChange={
            (event) => {
              setNewTweet(event.target.value)
            }
          }></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>
      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
