import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import { useHistory } from "react-router-dom";
import { Fragment } from 'react';
import './../index.css'


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        color: '#fff',
        backgroundColor: green[500],
    },
    nested: {


    },
}));



function Navbar() {


    const history = useHistory()

    let [check, setcheck] = useState(sessionStorage.getItem('doctor_id') || false)
    let [user_check, setuser_check] = useState(sessionStorage.getItem('user_id') || false)

    let [no_user, set_no_user] = useState(sessionStorage.getItem('email') || false)
    let [lab_true, set_lab_true] = useState(sessionStorage.getItem('lab_id') || false)

    let [hospital_true, set_hospital_true] = useState(sessionStorage.getItem('hospital_id') || false)



    const classes = useStyles()





    function logout() {


        alert("Logout Successfully!")
        setcheck(false)
        setuser_check(false)
        set_no_user(false)
        set_hospital_true(false)
        set_lab_true(false)

        sessionStorage.clear()

        history.push("/login")



    }





    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navi">
                <div className="container">
                    <h2 className="title_docforyou">docForU</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/">Home</Link>
                            </li>

                            {/*----------------------------------------------For doctor--------------------------------------------------- */}
                            {

                                check ?
                                    <Fragment>

                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/doctor">My Patients</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/hospital">Hospitals</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/lab">Labs</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/accounts">{sessionStorage.getItem("name")}</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/update">Update Account</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/login">Sign in</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/about">About us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/contact">Contact us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link linkii" onClick={logout}>Logout</a>
                                        </li>
                                    </Fragment>
                                    :
                                    <div></div>

                            }


                            {/*----------------------------------------------For Hospital--------------------------------------------------- */}
                            {

                                hospital_true ?
                                    <Fragment>

                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/doctor">Doctors</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/search_doctor">Add Doctors</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/lab">Labs</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/login">Sign in</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/hospital">{sessionStorage.getItem("hospital_name")}</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/update_hospital" >Update Account</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/about">About us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/contact">Contact us</Link>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link linkii" onClick={logout}>Logout</a>
                                        </li>
                                    </Fragment>
                                    :
                                    <div></div>

                            }



                            {/*----------------------------------------------For user--------------------------------------------------- */}
                            {
                                user_check ?
                                    <Fragment>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/my_appointments" >Doctor Appointments</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/my_labs" >Lab Appointments</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/user_updates">{sessionStorage.getItem("name")}</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/about">About us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/contact">Contact us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link linkii" onClick={logout}>Logout</a>
                                        </li>
                                    </Fragment>

                                    :
                                    <div></div>

                            }


                            {/*----------------------------------------------no user--------------------------------------------------- */}
                            {
                                no_user === false ?
                                    <Fragment>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/doctor">Doctor</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/hospital">Hospital</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/lab">Lab</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/login">Patient</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/about">About us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/contact">Contact us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link linkii" hidden onClick={logout}>Logout</a>
                                        </li>
                                    </Fragment>

                                    :
                                    <div></div>

                            }

                            {/*----------------------------------------------for labs--------------------------------------------------- */}
                            {
                                lab_true ?
                                    <Fragment>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/lab/appointments">Appointments</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/lab/update">Update Account</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link linkii" >{sessionStorage.getItem("name")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/about">About us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/contact">Contact us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link linkii" onClick={logout}>Logout</a>
                                        </li>
                                    </Fragment>

                                    :
                                    <div></div>

                            }









                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
