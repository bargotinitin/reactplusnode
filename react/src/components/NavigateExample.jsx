import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function NavigateExample() {
  const status = 200

  const navigate = useNavigate()

  if (status == 404) {
    return <Navigate to='/hero' />
  }

  const testClick = () => {
    navigate('/about')
  }

  return (
    <div>
      <p>Hello from Navigation</p>
      <button onClick={testClick}> Test Navigate Button</button>
    </div>

  )
}

export default NavigateExample
