import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import {AppContext} from './UseContextHandler'


function Login() {

  const { setLabel } = useContext(AppContext)

  const onChange = (event) => {
    setLabel(event.target.value)
  }

  return (
    <input onChange={onChange} type="text" name="field1" />
  )
}
export default Login
