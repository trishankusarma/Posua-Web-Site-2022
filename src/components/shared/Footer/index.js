import React from 'react'
import './style.css'

function Footer() {
    return (
        <div className='footer pb-5'>
            <h3 className='text-center py-5'>Contact Us</h3>
            <div className='container'>
                <div className='row px-md-0 px-3' style={{ justifyContent: 'center', textAlign: 'center' }}>
                    <div className='col-md-4 col-lg-4 col-12'>
                        <h3>
                            <span>Contacts</span>
                        </h3>
                        <p>Arindam Kharghoria +91 8638509919</p>
                        <p>Debajit Bora +91 6000364669</p>
                    </div>
                    <div className='col-md-3 col-lg-3 col-12 mt-md-0 mt-3'>
                        <h3>
                            <span>Address</span>
                        </h3>
                        <p>NIT Road, Fakiratilla<br />Silchar, Assam 788010</p>
                    </div>
                    <div className='col-md-2 col-lg-2 col-12 mt-md-0 mt-3'>
                        <h3>
                            <span>Social</span>
                        </h3>
                        <a href='https://www.instagram.com/posua_nits/'><i className="bi bi-instagram"></i> Instagram</a>
                        <a href='https://www.facebook.com/nitsposua/'><i className="bi bi-facebook"></i> Facebook</a>

                    </div>
                    <div className='col-md-3 col-lg-3 col-12 mt-md-0 mt-3'>
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