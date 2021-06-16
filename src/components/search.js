import React, { useState,useEffect } from 'react'
import Slide from './sliders'
import { useFormik } from "formik";
import * as yup from "yup";
import './../index.css'
import ShowDoctors from './userfolder/showsearch'
import { Fragment } from 'react';
import SearchLab from './search_lab'
import Googly from './googlemaps/map_api'
import { SelectCountry } from './covid_19/select_country'
import {get_cities} from './api_requests/login'

function Search(){


    let [changepage, setchangepage] = useState(false)
    let [docdata, setdocdata] = useState({})
    let [mycity,setcities] = useState([])



    let rows = []
    let i = 1

    useEffect(() => {
        async function get_info() {
            let real_data = await get_cities();

            setcities(real_data);
        }
        get_info();
    }, [docdata,mycity]);



    function changing(flag) {
        setchangepage(flag)

    }


    const formik = useFormik({
        initialValues: {
            city: "lahore",
            category: ""
        },
        onSubmit: (values) => {

            setdocdata(values)
            setchangepage(true)




        },
        validationSchema: yup.object({
            category: yup.string().matches("[^none]", "This field is required!").required("This field is required!")
        })
    })

    if(mycity)
    {
        while (i <= mycity['counter']) {
            rows.push(i)
            i++
        }
    }


    if (changepage) {
        return (<ShowDoctors value={docdata} callback={changing} />)
    }


    return (
        <Fragment>
            <Slide />
            <div className="s01">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col float-left">
                            <h2>Search Doctor</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 mb-2">
                            <select className="form-select" id="city" name="city" value={formik.values.city} onChange={formik.handleChange} aria-label="Default select example">
                            {
                                    rows.map((data,key)=>{
                                        return(
                                            <option key={key} value={mycity.cities[key]}>{mycity.cities[key].toUpperCase()}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-lg-5 col-sm-6 mb-2">
                            <select className="form-select" id="category" name="category" value={formik.values.category} onChange={formik.handleChange} aria-label="Default select example">
                                <option value="none">Select Specialist</option>
                                <option value="neurologist">Neurologist</option>
                                <option value="child specialist">Child Specialist</option>
                                <option value="gynecologist">Gynecologist</option>
                                <option value="orthopadic surgeon">Orthopadic Surgeon</option>
                                <option value="endocrinlogist">Endocrinlogist</option>
                            </select>
                            {formik.errors.category ? <div className="error">{formik.errors.category}</div> : ""}

                        </div>
                        <div className="col-lg-2 col-sm-6 mb-2">
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </div>
                    </div>
                </form>
            </div>
            <SearchLab />
            <Googly />
            <SelectCountry />
        </Fragment>
    );
}

export default Search;