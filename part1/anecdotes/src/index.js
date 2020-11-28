import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Random = (actual, max,min = 0) => {
  let rand = actual
  //we make sure to never dice the same number twice because this seems to stop the programm (state does not change)
  while (rand === actual) {
    rand = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return rand
}

const Button = ({handle, text}) => {
  
  return (
    <div>
      <button onClick={handle}>{text}</button>
    </div>
  )
}

const maxVal = (points) => {
  let m = 0
  let j = 0
  for (let i = 0; i<=5; i++) {
    if (points[i] > m) {
      m = points[i]
      j = i
    }
  }
  return j
}

const App = (props) => {
  const points = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
  const [votes, setVoted] = useState(points)
  const upVoted = (vote) => {
    const copy = { ...votes}
    copy[vote] += 1
    return (
      () => setVoted(copy)
    )
  }
  const [selected, setSelected] = useState(0)
  const setSelectedTo = (newVal) => {
    return (
    () => setSelected(newVal)
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handle={setSelectedTo(Random(selected, props.anecdotes.length - 1))} text="Next anecdote" />
      <Button handle={upVoted(selected)}  text="Vote" />

      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[maxVal(votes)]}</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)