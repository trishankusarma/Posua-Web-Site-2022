import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import './style.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" style={{ visibility: 'hidden' }} to='/'>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'flex-end' }}>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item mx-4">
                            <Link className="nav-link active" to='/'>
                                <span className='posua'>P<img src={logo} alt='logo' />SUA</span>
                            </Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link active" to='/'>Event</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link active" to='/sponsors'>Sponsors</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="/team">Team</a>
                        </li>
                        <li className="nav-item mx-4">
                           <Link className="nav-link active" to='/'>Gallery</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link className="nav-link active" to='/'>Artists</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar