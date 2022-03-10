import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import underline from '../../../assets/underline.svg'
import './style.css'
function Navbar() {

    const location = useLocation();
    const [isOpen, setisOpen] = useState(false)

    function toggleColor(e) {
        e.preventDefault()
        if (isOpen) {
            setisOpen(false)
        }
        else {
            setisOpen(true)
        }
    }
    return (
        <nav className={"navbar navbar-expand-lg navbar-light " + (isOpen ? "navbar-open" : "")}>
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'> <span className='posua'>P<img src={logo} alt='logo' />SUA</span></Link>
                <button className="navbar-toggler" type="button" onClick={(e) => toggleColor(e)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'flex-end' }}>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item mx-4">
                            <NavLink className=
                                "nav-link active posua-link" to='/'>
                                <span className='posua'>P<img src={logo} alt='logo' />SUA</span>
                            </NavLink>
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className={"nav-link active " + (location.pathname === '/events' ? 'isActive' : '')} to='/events'>Event
                            </NavLink>
                            <img src={underline} className='underline' alt='underline' />
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className={"nav-link active " + (location.pathname === '/sponsors' ? 'isActive' : '')} to='/sponsors'>Sponsors</NavLink>
                            <img src={underline} className='underline' alt='underline' />
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className={"nav-link active " + (location.pathname === '/team' ? 'isActive' : '')} to='/team'>Team</NavLink>
                            <img src={underline} className='underline' alt='underline' />
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className={"nav-link active " + (location.pathname === '/gallery' ? 'isActive' : '')} to='/gallery'>Gallery</NavLink>
                            <img src={underline} className='underline' alt='underline' />
                        </li>
                        <li className="nav-item mx-4">
                            <NavLink className={"nav-link active " + (location.pathname === '/artists' ? 'isActive' : '')} to='/artists'>Artists</NavLink>
                            <img src={underline} className='underline' alt='underline' />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
