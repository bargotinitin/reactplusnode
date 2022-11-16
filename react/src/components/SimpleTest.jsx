import React from 'react'
import { useState } from 'react'

function SimpleTest() {

  let [show, setShow] = useState(false);

  const testClick = () => {
    setShow(true)
  }

  return (
    <>
      <div>SimpleTest</div>
      {show && <h1>Button Clicked</h1>}
      {!show && <h2>Button not clicked</h2>}
      <button onClick={() => testClick()}>Click</button>
    </>
  )
}

export default SimpleTest
