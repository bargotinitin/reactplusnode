import React from 'react'

import PropTypes from 'prop-types'

function Card({children, datareverse}) {
  return (
    // <div className={`card ${datareverse && 'reverse'}`}>{children}</div>
    <div className='card' style={{backgroundColor: datareverse ? 'red' : 'blue'}}>
      {children}
    </div>
  )
}

Card.defaultProps  = {
  datareverse :true
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  datareverse: PropTypes.bool
}


export default Card
