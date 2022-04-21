const Header = (props) => {
 
  return (
    <div>
      <h1>{props.course.name}</h1>
      
    </div>
  )
  

}
const Content = (props) => {

  return (
    <div>
      
      <Part osa ={props.course.parts[0].name} osa1 ={props.course.parts[0].exercises}/>
      <Part osa ={props.course.parts[1].name} osa1 ={props.course.parts[1].exercises}/>
      <Part osa ={props.course.parts[2].name} osa1 ={props.course.parts[2].exercises}/>
    </div>
  )
}
const Part = ({osa, osa1}) => {

  return (
    <div>
      <p>
        {osa} {osa1}
      </p>
     
    </div>
  )
}
const Total = (props) => {
 
 
  return (
    <div>
      
      <p>Numer of excercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
      
    </div>
  )
  

}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course = {course} />
      <Content course ={course} />
      <Total course ={course} />
    </div>
  )
}

export default App
