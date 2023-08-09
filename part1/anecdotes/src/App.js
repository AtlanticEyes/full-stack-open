import { useState } from 'react'
import DisplayAnecdote from './displayAnecdote'
import MostVotes from './mostVotes'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {quote : 'If it hurts, do it more often.',
    votes : 0},
    {quote : 'Adding manpower to a late software project makes it later!',
    votes : 0},
    {quote :'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes : 0},
    {quote : 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes : 0},
    {quote : 'Premature optimization is the root of all evil.',
    votes : 0},
    {quote : 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes : 0},
    {quote : 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    votes : 0},
    {quote : 'The only way to go fast, is to go well.', 
    votes : 0}
  ])
   
  const [selected, setSelected] = useState(0)
  const [updated, setUpdated] = useState(false)

  const handleChangeNumberClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected)
  }

  const handleVote = () => {
    anecdotes[selected].votes += 1
    console.log(anecdotes[selected])

    //forces the page to reload
    setUpdated(updated + 1)
  }


  return (
    <div>
      <h1>Anecdote of the day!!</h1>
      <DisplayAnecdote quote = {anecdotes[selected].quote} votes = {anecdotes[selected].votes} />
      <button onClick = {handleVote}>vote</button>
      <button onClick = {handleChangeNumberClick}>next anecdote</button>

      <h1>Anecdote with most votes!!</h1>
      <MostVotes anecdotes = {anecdotes}/>

    </div>
  )
}

export default App
