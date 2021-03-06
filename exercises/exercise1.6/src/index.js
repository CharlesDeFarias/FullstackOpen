import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) =>
  <tr>
    <td>{text}:</td><td>{value}</td>
  </tr>;

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad;
  let avg = (good - bad)/2;
  let percent = (good/total)*100;
  let feedbackSubmitted = total !== 0;

  return (<div>
      <h2>statistics</h2>
      {feedbackSubmitted ? (<ul>
        <Statistic text="Good" value={good}/>
        <Statistic text="Neutral" value={neutral}/>
        <Statistic text="Bad" value={bad}/>
        <Statistic text="Total feeback" value={total}/>
        <Statistic text="Avg Score" value={avg}/>
        <Statistic text="% positive" value={percent}/>
      </ul>) : "No feedback gathered"}
        </div>)
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
  setGood(good + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={handleGood}>
        Good
      </button>
      <button onClick={handleNeutral}>
        Neutral
      </button>
      <button onClick={handleBad}>
        Bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)