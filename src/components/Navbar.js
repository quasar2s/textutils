import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


//Function Based Components 
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${(props.mode === 'cool' || props.mode === 'dark')?'dark':'light'} bg-${(props.mode === 'cool' || props.mode === 'dark')?'dark':'light'}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
          <a className="nav-link" href="#">{props.aboutText}</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'black': 'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch"  onClick={props.coolMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Cool mode</label>
      </div>


      <div className={`form-check form-switch text-${props.mode === 'light' ? 'black': 'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch"  onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

//Type of props
Navbar.propTypes ={
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

//Default Props if nothing will be passed at app.js
Navbar.defaultProps = {
  title: "Title here",
  aboutText: "About"
}