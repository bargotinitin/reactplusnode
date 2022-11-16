import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Label from './Label'
import Login from './Login'

export const AppContext = createContext(null)

function UseContextHandler() {

  const [username, setLabel] = useState("")

  return (
    <AppContext.Provider value={{ username, setLabel }}>
      <Login /> <Label />
    </AppContext.Provider>
  )
}

export default UseContextHandler
