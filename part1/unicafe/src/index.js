import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, clickHandle}) => {
  return (
    <button onClick={clickHandle}>{text}</button>
  )
}

const Stats = ({text, counter}) => {
  return (
    <div>
    {text} {counter}
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
      
      <h1>statistics</h1>
      
      <Stats text="good" counter={good} />
      <Stats text="neutral" counter={neutral} />
      <Stats text="bad" counter={bad} />      
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)