import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {

  const course = {
    courseName : 'Half Stack application development',

    //array of object to use with map function
    //contains part and exercises
    textArray : [
      {
      part : 'Fundamentals of React',
      exercises : 10
    },
    {
      part : 'Using props to pass data',
      exercises : 7
    },
    {
      part : 'State of a component',
      exercises : 14
    }
  ]
  }

  return (
    <div>
      <Header course = {course.courseName} />
      <Content text = {course.textArray} />
      <Total text = {course.textArray}/>
    </div>
  )
}

export default App