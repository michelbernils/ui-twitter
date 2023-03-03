import { FormEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";


import './Status.css'

export function Status(){
  const [newAnswer, setNewAnswer] = useState()
  const [answer, setAnswer] = useState([])

  function createNewAnswer(event: FormEvent){
    event.preventDefault();

    setAnswer([newAnswer, ...answer]);

    setNewAnswer('')
  }

  return(
    <main className="timeline">
    <Header title="Tweet" />

    <Tweet content='Thats my tweet' />

    <Separator />

    <form onSubmit={createNewAnswer} className="answer-tweet-form">
      <label htmlFor="tweet">
        <img
          src="https://github.com/michelbernils.png"
          alt="Michel Bernils"
        />
        <textarea 
         id="tweet" 
         placeholder="Tweet your answer"
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }}
          value={newAnswer}
        ></textarea>
      </label>

      <button type="submit">Answer</button>
    </form>

    {answer.map((answer) => {
      return <Tweet key={answer} content={answer} />;
    })}
  </main>
  )
}