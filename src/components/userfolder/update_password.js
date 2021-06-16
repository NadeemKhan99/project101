import React, { useState } from 'react'
import { useFormik } from "formik";
import { Link } from 'react-router-dom'
import * as yup from "yup";
import "./../../index.css"
import axios from 'axios';
import Navbar from './../navbar'


function UpdatePassword() {

    let [confirm, setconfirm] = useState(true)
    const formik = useFormik({
        initialValues: {
            password: "",
            new_password: ""
        },
        onSubmit: (values) => {
            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }




            if (confirm === values.new_password) {


                if (values.password !== sessionStorage.getItem("password")) {
                    alert("Wrong Password")
                }
                else {


                    let register_data = {
                        password: values.new_password,
                        email: sessionStorage.getItem("email")
                    }


                    axios.post(
                        'http://localhost/back_end/update_password.php', register_data, headers
                    ).then(
                        res => {
                            if (res.data.signal === 1) {
                                sessionStorage.setItem("password", register_data.password)

                                alert(res.data.id)
                            }
                            else
                                alert(res.data.id)
                        }
                    );

                }
            }
            else {
                alert("MisMatch")
            }


        },
        validationSchema: yup.object({
            password: yup.string().required("This field is required!"),
            new_password: yup.string().min(6, "Must be greater than 5 digits").max(10, "Must be less than 11 digits").matches("^[a-zA-Z0-9]+$", "Only use alphabets and digits!").required("This field is required!")

        })
    })



    return (
        <div>
            <Navbar />
            <div className="doctor_form"  >
                <form onSubmit={formik.handleSubmit}>
                    <h3 align='center'>Change Password</h3>

                    <div className="mb-2 p-2">
                        <label htmlFor="password" className="form-label">Current Password</label>
                        <input type="password" className="form-control" values={formik.values.password} onChange={formik.handleChange} id="password" placeholder="Enter password" />
                        {formik.errors.password ? <div className="error">{formik.errors.password}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="new_password" className="form-label">New Password</label>
                        <input type="password" className="form-control" values={formik.values.new_password} onChange={formik.handleChange} id="new_password" placeholder="Enter new password" />
                        {formik.errors.new_password ? <div className="error">{formik.errors.new_password}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="confirm_password" className="form-label">Confirm New Password</label>
                        <input type="password" className="form-control" onChange={(e) => setconfirm(e.target.value)} id="confirm_password" placeholder="Enter confirm password" />

                    </div>

                    <div className="row mb-2 p-2">
                        <div className="col-lg-6 col-sm-6">
                            <button type="submit" className="btn btn-success">Update Password</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    );
}

export default UpdatePassword;