import React from 'react'
import {createStore} from 'redux'

function BasicRedux1() {

  const increment = () => {
    return {
      type: 'INCREMENT'
    }

  }

  const decrement = () => {
    return {
      type: 'DECREMENT'
    }
  }

  const counter = (state = 0 , action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
        break;

      case 'DECREMENT':
        return state - 1
        break;

      default:
        return state
    }
  }

  let store = createStore(counter)
  store.subscribe(() => console.log(store.getState()))
  store.dispatch(increment())
  store.dispatch(increment())
  store.dispatch(increment())
  store.dispatch(decrement())

  return (
    <div>BasicRedux1</div>
  )
}

export default BasicRedux1
