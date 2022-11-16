import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function UseEffectHook() {

  let [email, setEmail] = useState('')
  let [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      console.log(response)
      console.log("API was called")
      setEmail(response.data[0].email)
    });
  }, [counter])


  const increment = () => {
    counter = counter + 1
    setCounter(counter)
  }

  console.log("Hero")

  return (
    <div>
      {counter}
      <button onClick={increment}>increment</button>
      {email}
    </div>
  )

}

export default UseEffectHook
