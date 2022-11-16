// function App() {
//   const title = "My App"
//   const body = "Here is the body text"
//   const comments = [
//    {id: 1, name: "Amit", job: "Manager"},
//    {id: 1, name: "Akash", job: "Manager"},
//    {id: 1, name: "Gaurav", job: "Manager"},
//   ]

//   const commentblock = (
//     <div>
//       <h1>
//         Testing Html
//       </h1>
//     </div>
//   )

//   const flag = true

//   return(
//     <div className="container">
//       <h1> {title} </h1>
//       <p> {body}</p>
//       <ul>
//       {
//         comments.map(
//           (comment, index) => (

//             <li key={index}> {comment.name} </li>
//           )
//         )
//       }
//       </ul>

//       {flag && commentblock}

//     </div>
//   )
// }

// import React from 'react'

// function App() {

//   return(
//     React.createElement('div', {className: 'container'}, React.createElement('h1', {}, 'My app'))

//   )
// }


// import Header from "./components/Header"

// function App() {
//   return (
//     <>
//     <Header text="Hello World from App.js" />
//     <div className="container">
//       <h1>
//         My App
//       </h1>
//     </div>

//     </>
//   )
// }

// import FeedbackItem from "./components/FeedbackItem"

// function App() {
//   return (
//     <>
//     <FeedbackItem />
//     <div className="container">
//       <h1>
//         My App
//       </h1>
//     </div>

//     </>
//   )
// }

import { useState } from "react"
import listData from './data/ListData'
import FeedbackData from "./components/FeedbackData"
import About from "./pages/About";
import StyledComp from './components/StyledComp';
import Navlinks from "./components/Navlinks";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Post from "./components/Post";
import Axios from "./components/Axios";
import BasicRedux2 from "./components/BasicRedux2";
import allReducer from "./components/reducers"
import {createStore} from "redux"
import {Provider} from 'react-redux'

function App() {

 const store = createStore(
   allReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

  const [list, setData] = useState(listData)

  const deleteRecord = (id) => {
    setData(list.filter((item) => item.id !== id ))
  }

  return (
    <>
      <Router>
        <Navlinks/>

      <Provider store={store}>

        <Routes>
            <Route exact path="/" element={
            <>
              <FeedbackData mydata={list} handleDelete={deleteRecord} />
              <StyledComp/>
            </>

            } />
            <Route exact path="/about/*" element={<About />} />
            <Route exact path="/post/:id" element={<Post />} />
            <Route exact path="/axios" element={<Axios />} />
            <Route exact path="/redux" element={<BasicRedux2 />} />

        </Routes>

      </Provider>

      </Router>
    </>
  )
}

export default App
