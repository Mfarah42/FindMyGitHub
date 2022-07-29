import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Navbar = ({title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1> <Link to='/'><i className="fab fa-github"></i>    <i className="fas fa-search-location"></i>{title}</Link> </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
  
}
Navbar.defaultProps = {
    title: "FindMyGitHub"
  }

Navbar.propTypes = {
    title: PropTypes.string.isRequired
  }
export default Navbar


