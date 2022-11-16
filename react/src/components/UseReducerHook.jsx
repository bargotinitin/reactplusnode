import React from 'react'
// import { useState } from 'react'

import { useReducer } from 'react'


const prepareReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showtext: state.showtext
      }
      break;

    case "TOGGLETEXT":
      console.log(!state.showtext)
      return {
        count: state.count,
        showtext: !state.showtext
      }
      break;

    default:
      return state
  }

}


function UseReducerHook() {
  // let [counter, setCounter] = useState(0)
  // let [showtext, setShowText] = useState(true)
  // const increment = () => {
  //   counter = counter + 1
  //   setCounter(counter)
  //   setShowText(!showtext)
  // }

  // return (
  //   <div>
  //     {counter}
  //     <button onClick={increment}>increment</button>
  //     {showtext && <p>I am here</p> }
  //   </div>
  // )


  const [state, preparedispatch] = useReducer(prepareReducer, {count:0, showtext: true})

  return (
    <div>
      {state.count}
      <button

      onClick={() =>{
        preparedispatch({type: "INCREMENT"});
        preparedispatch({type: "TOGGLETEXT"});
      }}


      >increment</button>
      {state.showtext && <p>I am here</p>}
    </div>
  )


}

export default UseReducerHook
