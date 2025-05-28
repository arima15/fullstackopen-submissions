const Header = (props) => {
  console.log(props.course);
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props.part, props.exercise); // This will log the values of name and exercise


  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => { 
   
  // This console.log is for debugging purposes to check the values of props
  return (
    <div>
      <Part part = {props.part} exercise = {props.exercise}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
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
      <Content part={parts[0].name} exercise={parts[0].exercises} />
      <Content part={parts[1].name} exercise={parts[1].exercises} />
      <Content part={parts[2].name} exercise={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )
}

export default App
