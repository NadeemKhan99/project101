import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';
import { get_hospital_doctors } from './../../api_requests/login'
import Navbar from './../../navbar'
import './../../../index.css'

 

function ShowHosDoctors() {

    let [doctors_record, setdoctors_record] = useState([])
    let [changepage,setchangepage] = useState(false)
    let [index,setindex] = useState()
    let [doctor_key,setdoctorkey] = useState()
    let [max_appointments,set_max_appointments] = useState([])

    let check_doctors = true
    let id_user = 0

    if(sessionStorage.getItem("hospital_id"))
    {
        id_user = sessionStorage.getItem("hospital_id")
    }
    else{
        id_user = false
    }



    let i = 1;
    let rows = []



    // useEffect(()=>{

    //     async function max_appoints(id_user){

    //         let data = await get_max_user_appoints(id_user)
    //         set_max_appointments(data)

    //     }

    //     max_appoints(id_user)

    // }, [id_user]);


    // console.log(id_user)
    // console.log(max_appointments)










    useEffect(() => {
        async function data_show(value) {
            let real_data = await get_hospital_doctors(value);

            setdoctors_record(real_data);
        }
        data_show(id_user);
    }, [id_user]);

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




    //---------------get slots----------------

    function get_array_of_slots(day,starting_time,ending_time) {

        let my_data = []
        let start = []
        let end = []

        //  START SLOTS---------------------------------

        let number_of_slots_per_day_start = 0;
        let slots_of_weeks = starting_time.split(",")
        if (slots_of_weeks[day] !== "Holiday") {
            number_of_slots_per_day_start = slots_of_weeks[day].split("-")
            number_of_slots_per_day_start.pop()
            start.push(number_of_slots_per_day_start)

            //     END SLOTS------------------------

            let slots_end = ending_time.split(",")

            let a = slots_end[day].split("-")
            a.pop()
            end.push(a)

            for (let i = 0; i < start[0].length; i++) {
                my_data.push(start[0][i] + " - "+end[0][i])
                
            }
            let rows1 = []
            let i = 0

            while (i < my_data.length) {
                rows1.push(i)
                i++
            }

            return(
                <Fragment>
                {
                    rows1.map((data,key)=>{
                        return(
                            <div key={key}>
                                <b>Shift {data+1}</b>
                                <p>{my_data[data]}</p>
                            </div>
                        )
                        
                    })
                }
                </Fragment>
                
            )
            

        }

        else {
            return <p>Holiday</p>
        }



    }








    return (

        <Fragment>
            <Navbar/>
            <div>

            <h3 align="center" className="title">Doctors</h3>
            </div>

            <div className="review_form">
                <p><b>Search by name</b></p>
            {
                check_doctors ? 
                rows.map((data,key)=>{
                    return(
                        <div key={key}>
                            <a href={"#"+doctors_record.email[key]}>{doctors_record.name[key]}</a>
                        </div>
                    )
                })

                :
                ""
            }
            </div>







            {
                check_doctors ?

                    rows.map((data, key) => {
                        return (
                            <div className="review_form" key={key} id={doctors_record.email[key]}>
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
                                            <b>{sessionStorage.getItem("hospital_name")}</b>
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
                                    <hr></hr>
                                    <div className="row" id="dayss">
                                        <div className="col">
                                            <b><p>Monday</p></b>
                                        </div>
                                        <div className="col">
                                            <b><p>Tuesday</p></b>
                                        </div>
                                        <div className="col">
                                            <b><p>Wednesday</p></b>
                                        </div>
                                        <div className="col">
                                            <b><p>Thursday</p></b>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                        { get_array_of_slots(0,doctors_record.start[key],doctors_record.end[key])}
                                            
                                        </div>
                                        <div className="col">
                                        {get_array_of_slots(1,doctors_record.start[key],doctors_record.end[key])}
                                        </div>
                                        <div className="col">
                                        {get_array_of_slots(2,doctors_record.start[key],doctors_record.end[key])}
                                        </div>
                                        <div className="col">
                                        {get_array_of_slots(3,doctors_record.start[key],doctors_record.end[key])}
                                        </div>
                                    </div>

                                    {/*Friday - sunday */}

                                    <div className="row" id="dayss">
                                        <div className="col">
                                            <b><p>Friday</p></b>
                                        </div>
                                        <div className="col">
                                            <b><p>Saturday</p></b>
                                        </div>
                                        <div className="col">
                                            <b><p>Sunday</p></b>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                        { get_array_of_slots(4,doctors_record.start[key],doctors_record.end[key])}
                                            
                                        </div>
                                        <div className="col">
                                        {get_array_of_slots(5,doctors_record.start[key],doctors_record.end[key])}
                                        </div>
                                        <div className="col">
                                        {get_array_of_slots(6,doctors_record.start[key],doctors_record.end[key])}
                                        </div>
                                    </div>
                                </div>


                                





                            </div>
                        )

                    })
                    :
                    <div className="review_form">
                        <h1>No doctors yet!</h1>
                    </div>
            }

        </Fragment  >

    )

}

export default ShowHosDoctors;