import React from 'react'
import { useState } from 'react'

function UseStateHook2() {
  let [text, setText] = useState()
  const onChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input name="field" id="field" className='text' onChange={onChange} />
      {text}
    </div>
  )
}

export default UseStateHook2
