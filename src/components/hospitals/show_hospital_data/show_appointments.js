import React from 'react'
import Navbar from './../../navbar'
import { Link } from 'react-router-dom'
import "./../../../index.css"

function Hospital_appointments() {
    return (
        <div>
            <Navbar />
            <div>

                <div className="row">
                    <div className="col">
                        <Link className="nav-link" to="/hospital/doctors">
                            <div className="review_form">
                                <h1>My Doctors</h1>
                            </div>
                        </Link>

                    </div>
                    <div className="col">
                        <Link className="nav-link" to="/hospital/appointments">
                            <div className="review_form">
                                <h1>My Appointments</h1>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Hospital_appointments;