import React, { useState } from 'react'
import { Fragment } from 'react';
import "./../../index.css"
import Navbar from './../navbar'


function ShowCard() {




    return (
        <Fragment>
            <Navbar/>
        <div className="show_card">
            <h4>Login Successfully!</h4>
            <br></br>
            <h6>Now you are able to make changes!</h6>
        </div>
        </Fragment>
    );
}

export default ShowCard;