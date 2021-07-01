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
import {get_cities,getAddress} from './api_requests/login'
import logo from './../images/loc.jpg'
import './../index.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


function Search(){


    let [changepage, setchangepage] = useState(false)
    let [docdata, setdocdata] = useState({})
    let [mycity,setcities] = useState([])
    let [mycity_name,set_mycity_name] = useState("")
    let [changepage1,setchangepage1] = useState(false)

    let [ipp,setip] = useState("")

    let idd = sessionStorage.getItem('user_id') || false;



    let rows = []
    let i = 1

    useEffect(() => {
        async function get_info() {
            let real_data = await get_cities();

            setcities(real_data);
        }
        get_info();
    }, [idd]);


    let url = "https://ip.nf/me.json"
    // let url = "http://ipinfo.io"

    useEffect(()=>{
        fetch(url,{method: "get"},{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then((response)=> response.json())
        .then((data)=>{
            // let dta= JSON.stringify(data)
            
            setip(data)
        })
    },[])

    

    // console.log(ip.ip.ip)



    if(ipp)
    {
        let IPinfo = require("node-ipinfo");

        let token = "86b08ae32adfd1"
        let ip  = ipp.ip.ip
        
        let asn = "AS7922";
        let ipinfo = new IPinfo(token);
        
        ipinfo.lookupIp(ip).then((response) => {
            // console.log(response.asn); // { asn: 'AS15169', name: 'Google LLC', domain: 'google.com', route: '8.8.8.0/24', type: 'business' }
            // console.log(response.hostname); // dns.google
            set_mycity_name(response.city); // Mountain View
        });
    }


    // useEffect(() => {
    //     async function get_info(ip) {
    //         if(ip)
    //         {
    //             let real_data = await getAddress(ip.ip["latitude"],ip.ip["longitude"]);

    //         console.log(real_data)
    //         }
            
    //     }
    //     get_info(ip);
    // }, [idd]);













    // $(document).ready(function(){
    //     $("button").click(function(){
    //               $.getJSON("http://ipinfo.io",
    //                                             function(data) {
        
    //               // Setting text of element P with id gfg
    //               console.log(data.city);
                  
    //           });
    //     });
    //   });






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


    if (changepage1) {
        return (<Redirect to={{
            pathname: "/all_doctors_city",
            state: { city_name: mycity_name}
        }} />)
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
                        <div className="col-lg-4 col-sm-12 mb-2">
                            <select className="form-select" id="city" name="city" value={formik.values.city} onChange={formik.handleChange} aria-label="Default select example">
                            {
                                    rows.map((data,key)=>{
                                        return(
                                            <option key={key} id={mycity.cities[key].toUpperCase()} value={mycity.cities[key].toUpperCase()}>{mycity.cities[key].toUpperCase()}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-lg-2 col-sm-12 mb-2 logo_width">
                            <button >
                            <img src={logo} onClick={(e)=>setchangepage1(true)} alt="" width="20"/>
                            </button>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2">
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