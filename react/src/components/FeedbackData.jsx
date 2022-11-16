import React from 'react'
import CardItem from './CardItem'

function FeedbackData({ mydata, handleDelete }) {
  // console.log(mydata)

  if (!mydata || mydata.length == 0) {
    return (
      <div>No data</div>
    )
  }


  // return (
  //   <div>
  //     <ul>

  //       {mydata.map((value) => (
  //         <li key={value.id}>
  //           <span>{value.id}</span>
  //           <span>{value.name}</span>
  //           <span>{value.job}</span>
  //           <span>{value.salary}</span>
  //         </li>
  //       )
  //       )}


  //     </ul>
  //     </div>
  // )

  return (
    <div>
      { mydata.map((value) => (
        <CardItem key={value.id} card={value} handleDelete={handleDelete} />
      ))}
    </div>
  )

}

export default FeedbackData
