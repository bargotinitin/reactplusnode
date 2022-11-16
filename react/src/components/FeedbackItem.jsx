import {useState} from 'react'


function FeedbackItem() {
  const [rating, setrating] = useState(8)
  const [description, setdescription] = useState('Here goes desc')

  const handleClick = () => {
    setrating((prev) => {
      return prev + 1
    })
  }

  return (
    <div className='card'>
      <div className='card-count'>{rating}</div>
      <div className='card-description'>{description}</div>
      <button onClick={handleClick}> Click </button>
    </div>

  )
}

export default FeedbackItem
