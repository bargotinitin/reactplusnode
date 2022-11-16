import React from 'react'
import { useState } from 'react'

function UseStateHook1() {
  let [counter, setCounter] = useState(0)
  const increment = () => {
    counter = counter + 1
    setCounter(counter)
  }

  return (
    <div>
      {counter}
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default UseStateHook1
