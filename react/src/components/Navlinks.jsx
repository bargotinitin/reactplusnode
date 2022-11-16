import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../index.module.css'

function Navlinks() {
  return (
    <div className={styles.header}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/post/878">Topics</Link>
          </li>
          <li>
            <Link to="/axios">Axios Example</Link>
          </li>
          <li>
            <Link to="/redux">Redux Example</Link>
          </li>
        </ul>
    </div>
  )
}

export default Navlinks
