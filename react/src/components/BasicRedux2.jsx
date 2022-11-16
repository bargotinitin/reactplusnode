import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import increment from './actions/increment'
import decrement from './actions/decrement'

function BasicRedux2() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>

      counter: {counter}
      <br/>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

    </div>
  )
}

export default BasicRedux2
