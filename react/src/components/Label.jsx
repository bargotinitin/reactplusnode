import React, { useContext } from 'react'
import {AppContext} from './UseContextHandler'

function Label() {
  const {username} = useContext(AppContext)

  return (
    <div>Texfield Data: {username}</div>
  )
}

export default Label
