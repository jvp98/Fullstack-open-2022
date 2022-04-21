import { useState } from 'react'




const Header = () => {
  return (
    <div>
      <h1>
        Give Feedback
      </h1>
    </div>
  )
}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticLine = (props) => {

  if (props.kaikki !== 0){
    return (
      
      <table>
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
          </tr>
          <tr>
            <td>{props.text1}</td>
            <td>{props.value1}</td>
          </tr>
          <tr>
            <td>{props.text2}</td>
            <td>{props.value2}</td>
          </tr>
          <tr>
            <td>{props.text3}</td>
            <td>{props.value3}</td>
          </tr>
          <tr>
            <td>{props.text4}</td>
            <td>{props.value4}</td>
          </tr>
          <tr>
            <td>{props.text5}</td>
            <td>{Math.round((props.value5*100) * 10) / 10} </td>
            <td>% </td>
          </tr>

       
        </tbody>
      </table>
      )
  }

  

}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setToValuegood = newValue => {
  
    setGood(good+newValue)
  }
  const setToValueneutral = newValue => {
  
    setNeutral(neutral+newValue)
  }
  const setToValuebad = newValue => {
  
    setBad(bad+newValue)
  }
  let kaikki = (bad + good + neutral)
  let average = ((good*1+bad*(-1))/(good+neutral+bad))
  let posi = (good/(good+neutral+bad))
  
  return (
    <div>
      <Header/>
      <Button handleClick={() => setToValuegood(1)} text="Good" />
      <Button handleClick={() => setToValueneutral(1)} text="Neutral" />
      <Button handleClick={() => setToValuebad(1)} text="Bad" />
      <h2>
        Statistics
      </h2>
      
      <StatisticLine text="good" value ={good} kaikki = {kaikki} text1="neutral" value1 ={neutral} text2="bad" value2 ={bad} text3="all" value3 ={kaikki} text4="average" value4 ={average} text5="positive" value5={posi}/>

      

  
    </div>
  )
}

export default App
