import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import { useHistory } from "react-router-dom";
import { Fragment } from 'react';


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
    


    const classes = useStyles()

    



    function logout() {


        alert("Logout Successfully!")
        setcheck(false)
        setuser_check(false)
        set_no_user(false)

        sessionStorage.clear()

        history.push("/login")
    
        

    }



    

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navi">
                <div className="container">
                    <a className="navbar-brand brandi" href="#">docForY</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/about">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link linkii" to="/contact">Contact us</Link>
                            </li>

                            {/*----------------------------------------------For doctor--------------------------------------------------- */}
                            {

                                check ?
                                    <Fragment>

                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/doctor">Doctors</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/hospital">Hospitals</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/lab">Labs</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/login">Sign in</Link>
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
                                            <Link className="nav-link linkii" hidden to="/doctor">Doctors</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/hospital">Hospitals</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/lab">Labs</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" hidden to="/login">Sign in</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/my_appointments" >Appointments</Link>
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
                                no_user===false ?
                                    <Fragment>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/doctor">Doctors</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/hospital">Hospitals</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii" to="/lab">Labs</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link linkii"  to="/login">Sign in</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link linkii" hidden onClick={logout}>Logout</a>
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
