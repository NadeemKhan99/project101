import React, { useState,useEffect } from 'react'
import { useFormik } from "formik";
import { Redirect } from 'react-router-dom'
import * as yup from "yup";
import './../index.css'
import ShowLabs from './labs_module/search_lab/show_labs'
import { Fragment } from 'react';
import {get_cities} from "./api_requests/login"
// import useGeoLocation from 'react-navigator-geolocation'
import Coordinates_user from './googlemaps/coordinates_user';


function SearchLab() {


    let [changepage, setchangepage] = useState(false)
    let [docdata, setdocdata] = useState({})

    let [mycity,setcities] = useState([])

    let idd = sessionStorage.getItem('user_id') || false;


    let rows = []
    let i = 1

    let [states,setstates] = useState(false)

    useEffect(() => {
        async function get_info() {
            let real_data = await get_cities();
            states ? setstates(false) : setstates(true)
            setcities(real_data);
        }
        get_info();
    },[idd]);

    console.log("jij")

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
        return (<Redirect to={{
            pathname: "/lab/search",
            state: { city_data: docdata }
        }} />)
    }



    if(mycity)
    {
        while (i <= mycity['counter']) {
            rows.push(i)
            i++
        }
    }




    return (
        <Fragment>

            <div className="s02">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col float-left">
                            <h2>Search Lab</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 col-sm-12 mb-2">
                            <select className="form-select" id="city1" name="city" value={formik.values.city} onChange={formik.handleChange} aria-label="Default select example">
                                {
                                    rows.map((data,key)=>{
                                        return(
                                            <option key={key} value={mycity.cities[key]}>{mycity.cities[key].toUpperCase()}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="col-lg-2 col-sm-6 mb-2">
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </div>
                    </div>
        
                </form>
            </div>
            {/* <Coordinates_user/> */}
        </Fragment>
    );
}

export default SearchLab;