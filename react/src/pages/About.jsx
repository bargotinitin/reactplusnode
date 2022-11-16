import React from 'react'
import {Link} from 'react-router-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import NavigateExample from '../components/NavigateExample';

function About() {
  return (
    <>

    <div>

      About Page

      <Link to={{
        pathname: "/",
        search: "?sort=name",
        hash: "#hello"
      }}> BACK </Link>

      <Routes>
          <Route path="/show" element={<h1> Hello Man </h1>} />
          <Route path="/nav" element={<NavigateExample/>} />
      </Routes>


    </div>

    </>
  )
}

export default About
