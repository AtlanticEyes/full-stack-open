import { useState } from 'react'
import Button from './Button'
import StatisticLine from './StatisticLine'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0)
  let allNums = good + bad + neutral
  
  const handleGood = () => {
    setGood(good + 1)
    console.log(good)
    setCounter(counter + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    console.log(neutral)
  }

  const handleBad = () => {
    setBad(bad + 1)
    console.log(bad)
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleEvent = {handleGood} text = 'good'/>
      <Button handleEvent = {handleNeutral} text = 'neutrel'/>
      <Button handleEvent = {handleBad} text = 'bad'/>
      <h1>statistics</h1>
      <StatisticLine text = 'good' stat = {good}/>
      <StatisticLine text = 'neutral' stat = {neutral}/>
      <StatisticLine text = 'bad' stat = {bad}/>
      <StatisticLine text = 'all' stat = {allNums}/>
      <StatisticLine text = 'average' stat = {counter / allNums}/>
      <StatisticLine text = 'pos percentage' stat = {String(good / allNums * 100) + '%'}/>
    </div>
  )
}

export default App