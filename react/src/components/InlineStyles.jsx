import React from 'react'
import '../index.css'

function InlineStyles() {
  const hello = true
  return (

    <div
    className={`${hello ? 'divclass' : ''}`}
    style={{ background:'red', color: hello ? 'yellow' : 'blue' }}
    >

      InlineStyles

    </div>
  )
}

export default InlineStyles
