import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/posts`
})

function Axios() {


  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  const [apidata, setAPIData] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {

    try {

      api.get('/', {
        params: {
          _limit: 3,
          _start: 0
        }
      }).then(res => {
        console.log(res.data)
        setAPIData(res.data[0])
        setLoaded(true)
      })

    }
    catch(err) {
      console.log(err)
    }

  }, [])


  return (
    <>

      <div className='loader'>
        {loaded ? apidata.title: <h1>Please wait...</h1>}
      </div>

      <ul className="users">
        {data.map((user) => (
          <li className="user" key={user.id}>{user.name}</li>
        ))}
      </ul>

    </>
  )
}

export default Axios
