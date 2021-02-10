import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navi">
                <div className="container">
                    <a className="navbar-brand brandi" href="#">docForY</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/hospital">Hospitals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/lab">Labs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/doctor">Doctors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/contact">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/login">Sign in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
