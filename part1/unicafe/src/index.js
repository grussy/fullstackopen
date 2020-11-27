import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, clickHandle}) => {
  return (
    <button onClick={clickHandle}>{text}</button>
  )
}

const Stats = ({text, count}) => <div>{text} {count}</div>

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  const avg = (good - bad) / sum
  const pos = good / sum * 100

  if (sum === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <Stats text="good" count={good} />
      <Stats text="neutral" count={neutral} />
      <Stats text="bad" count={bad} />
      <Stats text="all" count={sum} />
      <Stats text="average" count={avg} />
      <Stats text="positive" count={pos} />

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
        <Button clickHandle={() => setGood(good + 1)} text="good" />
        <Button clickHandle={() => setNeutral(neutral + 1)} text="neutral" />
        <Button clickHandle={() => setBad(bad + 1)} text="bad" />
      
      
      
      <Statistics good={good} neutral={neutral} bad={bad} />
     
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)