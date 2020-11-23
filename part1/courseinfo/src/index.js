import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = (props) => {
  const parts = props.parts.map(part => <Part part={part} />)
  return (
    <>
      {parts}
    </>
  )
}

const Total = (props) => {
  console.log(props.parts.map(a => a.exercises).reduce((a,b) => a + b))
  return  <p>Number of exercises {props.parts.map(a => a.exercises).reduce((a,b) => a + b)}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10 
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
       <Header course={course} />
       <Content parts={parts} />
       <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
