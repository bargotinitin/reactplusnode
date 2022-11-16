import React, {useRef} from 'react'

function UseRefHook() {

  const inputRef = useRef(null)
  const test = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={test}>Test</button>
    </div>
  )
}

export default UseRefHook
