import React, { useState } from 'react'
import { useFormik } from "formik";
import { Link,Redirect } from 'react-router-dom'
import * as yup from "yup";
import "./../../index.css"
import Home from './../home'
import axios from 'axios';
import Navbar from './../navbar'

function Lab_Sign() {

    let [check, setcheck] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }




            axios.post(
                'http://localhost/back_end/lab_signin.php', values, headers
            ).then(
                res => {
                    if (res.data.signal === 1) {
                        sessionStorage.setItem("email", res.data.email)
                        sessionStorage.setItem("lab_id", res.data.user_id)
                        sessionStorage.setItem("name", res.data.name)
                        sessionStorage.setItem("city", res.data.city)
                        sessionStorage.setItem("address", res.data.address)
                        sessionStorage.setItem("phone", res.data.phone)
                        sessionStorage.setItem("password", res.data.password)

                        setcheck(true)
                        alert(res.data.id)
                    }
                    else
                        alert(res.data.id)
                }
            );

        },
        validationSchema: yup.object({
            email: yup.string().email("Invalid Email").required("This field is required!"),
            password: yup.string().required("This field is required!")

        })
    })


    if (check === true) {
        return (
            <Redirect to="/" />
        )
    }



    return (
        <div>
            <Navbar />
            <div className="doctor_form"  >
                <form onSubmit={formik.handleSubmit}>
                    <h3 align='center'>Lab Login</h3>

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

                    <div className="row mb-2 p-2">
                        <div className="col-lg-6 col-sm-6">
                            <button type="submit" className="btn btn-success">Login</button>
                        </div>
                        <div className="col-lg-6 col-sm-6 pt-2">
                            Create Account? <Link to="/lab_register">Sign up</Link>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    );
}

export default Lab_Sign;