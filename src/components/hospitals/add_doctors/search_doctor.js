import React, { useState } from 'react'
import { useFormik } from "formik";
import { Link } from 'react-router-dom'
import * as yup from "yup"
import axios from 'axios';
import DoctorExistStepper from './stepper'
import { Fragment } from 'react';
import "./../../../index.css"
import Navbar from './../../navbar'
import HosDocStepper from './../doctor_signup/stepper'


function SearchDoctor() {


    let [add_slots, set_add_slots] = useState(false)
    let [add_doctor, set_add_doctor] = useState(false)
    let [doctorID,setdoctorID] = useState("")

    const formik = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: (values) => {
            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }




            axios.post(
                'http://localhost/back_end/search_doctor_email.php', values, headers
            ).then(
                res => {
                    if (res.data.signal === 1) {
                        alert(res.data.id)
                        set_add_slots(true)
                        setdoctorID(res.data.doctor_id)


                    }
                    else if(res.data.signal === 2){
                        console.log(res.data)
                        alert(res.data.id)
                        set_add_doctor(true)

                    }
                    else{
                        console.log(res.data)
                        alert(res.data.id)
                    }

                }
            );

        },
        validationSchema: yup.object({
            email: yup.string().email("Invalid Email").required("This field is required!")

        })
    })



    function shift_page_slot(flag)
    {
        set_add_slots(flag)
    }

    function  shift_page_doctor(flag) {
        set_add_doctor(flag)
    }

    if(add_slots)
    {
        return(
            <DoctorExistStepper back_slots = {shift_page_slot} doctor_id = {doctorID}/>
        )
    }

    if(add_doctor)
    {
        return(
            <HosDocStepper back_slots = {shift_page_doctor} />
        )
    }
    


    

    




    return (
        <Fragment>
            <Navbar/>
            <div className="doctor_form">
                <form onSubmit={formik.handleSubmit}>
                    <h3 align='center'>Search Doctor</h3>

                    <div className="mb-2 p-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" values={formik.values.email} onChange={formik.handleChange} id="email" placeholder="Enter email" />
                        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
                    </div>


                    <div className="row mb-2 p-2">
                        <div className="col-lg-6 col-sm-6">
                            <button type="submit" className="btn btn-success">Search</button>
                        </div>
                    </div>

                </form>
            </div>
        </Fragment>
    );
}

export default SearchDoctor;;






























