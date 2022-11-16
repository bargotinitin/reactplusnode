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


  const GetPosts = async () => {

    try {

      let data4 = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
      }).then(res => {
        console.log(res.data)
        setAPIData(res.data[0])
      })

    }
    catch(err) {
      console.log(err)
    }

  }

  const createPost = async () => {

      const data2 = [
        { userId: 1001, id: 1001, title: "testing", body: "John Doe" }
      ];

      let res = await api.post('/', data2)
      console.log(res)
  }

  const updatePost = async () => {

      const data3 = { body: "John Corner" }

      let res = await api.patch(`/1`, data3)
      console.log(res)
  }


  const deletePost = async (id) => {
      let res = await api.delete(`/${id}`)
      console.log(res)
  }

  return (
    <>

      <div className='loader'>
        {loaded ? apidata.title: <h1>Please wait...</h1>}
      </div>

      <div className="users">
        {data.map((user) => (
          <div className="user" key={user.id}>{user.name}

            <button onClick={() => deletePost(user.id)}> Delete Post</button>

          </div>

        ))}
      </div>

      <button onClick={GetPosts}> Get Post Data</button>
      <button onClick={createPost}> Post Data</button>
      <button onClick={() => updatePost()}> Update Post</button>


    </>
  )
}

export default Axios
