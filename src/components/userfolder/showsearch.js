import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';
import { get_doctors,get_max_user_appoints } from './../api_requests/login'
import MakeApppointment from './make_appointment'
import './../../index.css'


function ShowDoctors({ value, callback }) {

    let [doctors_record, setdoctors_record] = useState([])
    let [changepage,setchangepage] = useState(false)
    let [index,setindex] = useState()
    let [doctor_key,setdoctorkey] = useState()
    let [max_appointments,set_max_appointments] = useState([])

    let check_doctors = true
    let id_user = 0

    if(sessionStorage.getItem("user_id"))
    {
        id_user = sessionStorage.getItem("user_id")
    }
    else{
        id_user = false
    }



    let i = 1;
    let rows = []



    useEffect(()=>{

        async function max_appoints(id_user){

            let data = await get_max_user_appoints(id_user)
            set_max_appointments(data)

        }

        max_appoints(id_user)

    }, [id_user]);


    console.log(id_user)
    console.log(max_appointments)










    useEffect(() => {
        async function data_show(value) {
            let real_data = await get_doctors(value['city'], value['category']);

            setdoctors_record(real_data);
        }
        data_show(value);
    }, [value]);

    if (!doctors_record) {
        return (
            <h1>Loading!</h1>
        )
    }
    else {
        if (doctors_record['counter'] > 0) {
            while (i <= doctors_record['counter']) {
                rows.push(i)
                i++
            }
        }
        else {
            check_doctors = false
        }
    }


    if(changepage)
    {
        return(<MakeApppointment data={doctors_record} doctor_key = {doctor_key} indexx={index} callback={clickpage}/>)
    }


    function clickpage(key,flag) {
        setindex(key)
        setchangepage(flag)

    }









    return (

        <Fragment>
            <div>

            <h3 align="center">Doctors</h3>
            </div>
            {
                check_doctors ?

                    rows.map((data, key) => {
                        return (
                            <div className="review_form" key={key}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <b>{doctors_record.name[key]}</b>
                                        </div>
                                        <div className="col">
                                            <b>{doctors_record.email[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            +92 {doctors_record.phone[key]}
                                        </div>
                                        <div className="col">
                                            {doctors_record.address[key]}
                                        </div>
                                        <div className="col">
                                            <b>{doctors_record.city[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            <b>{doctors_record.clinic[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            {doctors_record.experience[key]} experience
                                        </div>
                                        <div className="col">
                                            {doctors_record.fees[key]} fee
                                        </div>
                                        <div className="col">
                                            <b>speciality:</b> <br></br>{doctors_record.speciality[key]}
                                        </div>
                                    </div>
                
                                </div>
                                {
                                    sessionStorage.getItem("user_id") ?

                                        max_appointments["signal"]===1 ?

                                        <p className="error">{max_appointments["message"]}</p> 
                                    
                                        :
                                    
                                        <button type="button" className="btn btn-primary" onClick={()=> {
                                            clickpage(key,true)
                                            setdoctorkey(doctors_record.doctor_id[key])}
                                        }>Appoint</button>
                                    :
                                    <p className="error">Plz login to make appointments!</p>
                                }
                                
                               

                                    
                                

                                <button className="btn btn-success back" onClick={() => callback(false)}>Back </button>

                            </div>
                        )

                    })
                    :
                    <div className="review_form">
                        <h1>No doctors yet!</h1>
                        <button className="btn btn-success back" onClick={() => callback(false)}>Back </button>
                    </div>
            }

        </Fragment  >

    )

}

export default ShowDoctors;