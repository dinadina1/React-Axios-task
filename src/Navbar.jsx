import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top product-border border-1">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand fw-bold">Amazon Users</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className='text-decoration-none ps-4 text-dark '>Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/adduser"} className='text-decoration-none ps-4 text-dark'>Add User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar