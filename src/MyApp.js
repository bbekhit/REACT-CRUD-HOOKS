// react : "next" then npm i
import React, {useState} from 'react'

export const MyApp = () => {
  const [ count , setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div style={{textAlign:"center"}}>
      <div>{count}</div>
      <button onClick = {increment} disabled={count === 10}>i was clicked {count} times</button>
    </div>
  )
}
