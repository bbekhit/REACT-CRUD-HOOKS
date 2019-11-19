import React, { useState, useEffect } from 'react';
import './App.scss';

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState(props.text) 
  const increment = () => {
     setCount(count + 1)
  }
  useEffect(() => console.log("useEffect rand"))
  return (
    <div>
      <p>The Current {text || "Count"} is {count}</p>
      <button onClick={increment} style={{margin:"10px"}}>+1</button>
      <button onClick={() => setCount(count - 1)} disabled = {count === 0} style={{margin:"10px"}}>-1</button>
      <input 
       value={text}
       onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

App.defaultProps = {
  count: 0,
  text: ""
}

export default App


// state = {
// count: 0
// }
