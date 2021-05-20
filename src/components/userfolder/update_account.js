import React, { Fragment } from 'react'
import { useFormik, Field } from "formik";
import {Redirect,Link} from 'react-router-dom'
import * as yup from "yup";
import "./../../index.css"
import Navbar from './../navbar'
import axios from 'axios'

function User_Update() {








    const formik = useFormik({
        initialValues: {
            name: sessionStorage.getItem("name"),
            email: sessionStorage.getItem("email"),
            city: sessionStorage.getItem("city"),
            phone: sessionStorage.getItem("phone"),
            address: sessionStorage.getItem("address"),
        },
        onSubmit: values => {


            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }



            axios.post(
                'http://localhost/back_end/update_user_data.php', values, headers
            ).then(
                res => {
                    if (res.data.signal === 1) {
                        sessionStorage.setItem("name", values.name)
                        sessionStorage.setItem("city", values.city)
                        sessionStorage.setItem("phone", values.phone)
                        sessionStorage.setItem("address", values.address)
                    }
                    alert(res.data.id)
                }
            );








        },
        validationSchema: yup.object({
            name: yup.string().matches("^[a-zA-Z ]{1,}[^0-9]$", "Invalid name, only use text").required("This field is required!"),
            email: yup.string().email("Invalid Email").required("This field is required!"),
            city: yup.string().matches("^[a-zA-Z]{3,}$", "Only use text must be greater than 3 words").required("This field is required!"),
            phone: yup.string().matches("^[1-9]{1}[0-9]{9}$", "Start number with 1-9 and must 10 digit long").required("This field is required!"),
            address: yup.string().required("This field is required!")
        })
    })





    return (

        <Fragment>
            <Navbar />

            <div className="doctor_form">
                <form onSubmit={formik.handleSubmit}>

                    <h3 className="title">Update</h3>
                    <div className="mb-2 p-2">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" value={formik.values.name} onChange={formik.handleChange} id="name" placeholder="Enter name" />
                        {formik.errors.name ? <div className="error">{formik.errors.name}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={formik.values.email} onChange={formik.handleChange} disabled id="email" placeholder="Enter email" />
                        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" value={formik.values.city} onChange={formik.handleChange} id="city" placeholder="Enter city name" />
                        {formik.errors.city ? <div className="error">{formik.errors.city}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="phone" className="form-label">Cell #</label>
                        <input type="text" className="form-control" value={formik.values.phone} onChange={formik.handleChange} id="phone" placeholder="+92 xxxxxxxxxx" />
                        {formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" value={formik.values.address} onChange={formik.handleChange} id="address" placeholder="Enter Address" />
                        {formik.errors.address ? <div className="error">{formik.errors.address}</div> : ""}
                    </div>


                    <div className="mb-6 p-2 register_button">
                        <div className="row">
                            <div className="col">
                                <button type="submit" className="btn btn-success float-right">Update</button>
                            </div>

                            <div className="col">


    
                            </div>
                        </div>
                    </div>
                </form>

                <Link to="/update_password" className="btn btn-primary back float-right">Change Password</Link>
            </div>
        </Fragment>
    );
}


export default User_Update;