import React from 'react'
import { useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import Sign from './signin';
import "./../index.css"
import axios from 'axios';
import Navbar from './navbar'
import { Fragment } from 'react';


function Signup() {

    let [check, setcheck] = useState(true)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            city: "",
            phone: "",
            address: "",
            user: "user"

        },
        onSubmit: (values) => {
            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }

            console.log(values)
        
            axios.post(
                'http://localhost/back_end/go.php', values, headers
            ).then(
                res => {
                    setcheck(false);
                    console.log(res.data)
                    alert(res.data.id)
                }
            );

        },
        validationSchema: yup.object({
            name: yup.string().matches("^[a-zA-Z ]{1,}[^0-9]$", "Invalid name, only use text").required("This field is required!"),
            email: yup.string().email("Invalid Email").required("This field is required!"),
            password: yup.string().min(6, "Must be greater than 5 digits").max(10, "Must be less than 11 digits").matches("^[a-zA-Z0-9]+$", "Only use alphabets and digits!").required("This field is required!"),
            city: yup.string().matches("^[a-zA-Z]{3,}$", "Only use text must be greater than 3 words").required("This field is required!"),
            phone: yup.string().matches("^[1-9]{1}[0-9]{9}$", "Start number with 1-9 and must 10 digit long").required("This field is required!"),
            address: yup.string().required("This field is required!")

        })
    })


    if (check === false) {
        return (
            <Sign />
        )
    }



    

    return (
        <Fragment>
            <Navbar />
            <div className="doctor_form">
                <form onSubmit={formik.handleSubmit}>
                    <h3>Register</h3>
                    <input type="text" className="visually-hidden" value={formik.values.user} onChange={formik.handleChange} id="user" />
                    <div className="mb-2 p-2">
                        <label htmlFor="name" className="form-label">First Name</label>
                        <input type="text" className="form-control" values={formik.values.name} onChange={formik.handleChange} autoFocus id="name" placeholder="Enter first name" />
                        {formik.errors.name ? <div className="error">{formik.errors.name}</div> : ""}
                    </div>


                    <div className="mb-2 p-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" values={formik.values.email} onChange={formik.handleChange} id="email" placeholder="Enter email" />
                        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" values={formik.values.password} onChange={formik.handleChange} id="password" placeholder="Enter password" />
                        {formik.errors.password ? <div className="error">{formik.errors.password}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" values={formik.values.city} onChange={formik.handleChange} id="city" placeholder="Enter city name" />
                        {formik.errors.city ? <div className="error">{formik.errors.city}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="phone" className="form-label">Cell #</label>
                        <input type="text" className="form-control" values={formik.values.phone} onChange={formik.handleChange} id="phone" placeholder="+92 xxxxxxxxxx" />
                        {formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" values={formik.values.address} onChange={formik.handleChange} id="address" placeholder="Enter Address" />
                        {formik.errors.address ? <div className="error">{formik.errors.address}</div> : ""}
                    </div>


                    <div className="mb-2 p-2 register_button">
                        <button type="submit" className="btn btn-success">Register</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Signup;