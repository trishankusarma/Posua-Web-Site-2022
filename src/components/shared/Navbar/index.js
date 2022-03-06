import React from 'react'
import logo from '../../../assets/logo.png'
import './style.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'flex-end' }}>
                    <ul className="navbar-nav mb-2 me-5 mb-lg-0">
                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="/">
                                <span className='posua'>P<img src={logo} alt='logo' />SUA</span>
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="/">Event</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="/">Gallery</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="/">Team</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="/">Artists</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar