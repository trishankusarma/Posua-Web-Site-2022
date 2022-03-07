import React from 'react'
import './style.css'

function Footer() {
    return (
        <div className='footer pb-5'>
            <h3 className='text-center py-5'>Contact Us</h3>
            <div className='container'>
                <div className='row' style={{ justifyContent: 'center' }}>
                    <div className='col-3'>
                        <h3>
                            <span>Contacts</span>
                        </h3>
                        <p>Name +91 1234567890</p>
                        <p>Name +91 1234567890</p>
                    </div>
                    <div className='col-3'>
                        <h3>
                            <span>Address</span>
                        </h3>
                        <p>NIT Road, Fakiratilla<br />Silchar, Assam 788010</p>
                    </div>
                    <div className='col-2'>
                        <h3>
                            <span>Social</span>
                        </h3>
                        <a href='/'>Instagram</a>
                        <a href='/'>Facebook</a>
                    </div>
                    <div className='col-3'>
                        <h3>
                            <span>Mail</span>
                        </h3>
                        <p>posua@nits.ac.in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer