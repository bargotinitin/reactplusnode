import React from 'react'
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";

function UseLayoutEffectHook() {

  useEffect(() => {
    console.log("HERE")
    inputRef.current.value = "Hero"
  }, [])

  useLayoutEffect(() => {
    console.log("I am Already HERE")
    console.log(inputRef.current.value)
  }, [])


  const inputRef = useRef(null)
  const test = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value)
  }
  return (
    <div>
      <input type="text" value="Some value" ref={inputRef} />
      <button onClick={test}>Test</button>
    </div>
  )
}

export default UseLayoutEffectHook
