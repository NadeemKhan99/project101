import React, { useState } from 'react'
import { useFormik } from "formik";
import {Redirect} from 'react-router-dom'
import * as yup from "yup";
import './../index.css'
import ShowLabs from './labs_module/search_lab/show_labs'
import { Fragment } from 'react';

function SearchLab() {


    let [changepage, setchangepage] = useState(false)
    let [docdata, setdocdata] = useState({})




    const formik = useFormik({
        initialValues: {
            city: "lahore"
        },
        onSubmit: (values) => {

            setdocdata(values)
            setchangepage(true)




        },
        validationSchema: yup.object({

        })
    })


    if (changepage) {
        return (<Redirect   to={{ pathname: "/lab/search",
        state: { city_data: docdata }}}/>)
    }


    return (
        <Fragment>

            <div className="s02">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                    <h2 className="searching">Search Lab</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 col-sm-12 mb-2">
                            <select className="form-select" id="city" name="city" value={formik.values.city} onChange={formik.handleChange} aria-label="Default select example">
                                <option value="lahore">Lahore</option>
                                <option value="karachi">Karachi</option>
                                <option value="islamabad">Islamabad</option>
                                <option value="rawalpindi">Rawalpindi</option>
                                <option value="sargodha">Sargodha</option>
                                <option value="shahdara">Shahdara</option>
                                <option value="gujranwala">Gujranwala</option>
                            </select>
                        </div>

                        <div className="col-lg-2 col-sm-6 mb-2">
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default SearchLab;