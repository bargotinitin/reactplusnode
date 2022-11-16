
import { useState } from "react"
import { FaTimes} from 'react-icons/fa'
import Card from "./shared/Card"

import PropTypes from 'prop-types'

function CardItem({card, handleDelete}) {

  const [reverse, setReverse] = useState(true)
  return (
    // <div className='card'>
    //   <div className='card-count'>{card.id}</div>
    //   <div className='card-description'>{card.name}</div>
    // </div>

    <Card datareverse={reverse}>
        <div className='card-count'>{card.id}</div>
        <button onClick={() => handleDelete(card.id)} className="close">
          <FaTimes color='purple'/>
        </button>
        <div className='card-description'>{card.name}</div>
    </Card>

  )
}

CardItem.propTypes = {
  card: PropTypes.object.isRequired
}


export default CardItem
