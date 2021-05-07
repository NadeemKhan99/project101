import { Container } from '@material-ui/core';
import React, { useState } from 'react'
import { Fragment } from 'react';
import axios from 'axios';
import './../../index.css'

function MakeApppointment({ data, doctor_key, indexx, callback }) {
    let [validdate, setvaliddate] = useState(false)
    let [holiday, setholiday] = useState()
    let [showday, setshowday] = useState()
    let [mapping, setmapping] = useState([])
    let [date_of_appoinment, set_date_of_appointment] = useState()
    let [number_patients, set_number_patients] = useState(1)

    let [received_data, set_received_data] = useState({ "data": "", "isloading": false })

    console.log(doctor_key)

    if(!doctor_key)
    {
        return(<div>
            <h1>Loading</h1>
        </div>)
    }



    function into_hours_minutes(timing_start, timing_end) {
        let slots = []
        let real_slots = []
        // console.log(timing_start,timing_end)
        let hour1 = []
        let minute1 = []
        let mode = []
        let counter = 0;
        let myarray = []  // contain shifts data---------------------

        timing_start[0].map((data1, key) => {
            counter = counter + 1
            myarray.push(data1)

        })

        console.log(myarray)

        let odd_count = -1
        for (let i = 0; i < timing_end[0].length; i++) {
            odd_count = odd_count + 2
            myarray.splice(odd_count, 0, timing_end[0][i])
            console.log(myarray)
        }

    

        console.log(myarray)

        myarray.map((data1, key) => {
            console.log(data1)
            let hour_min_mode = data1.split(" ")
            let mor_eve = hour_min_mode[1]
            mode.push(mor_eve)
            hour_min_mode.pop()
            let hour_min = hour_min_mode[0].split(":")
            // // console.log(hour_min,mor_eve)
            // let hour_min = hour_min_mode[key].split(":")

            let hour = parseInt(hour_min[0])
            let minute = parseInt(hour_min[1])
            hour1.push(hour)
            minute1.push(minute)


            // console.log(data1[key].split(" ")

        })



        for (let index = 0; index < myarray.length; index = index + 2) {


            let a = hour1[index]
            let b = hour1[index + 1]
            let m1 = minute1[index]
            let m2 = minute1[index + 1]
            slots.push(a + ":" + m1)
            while (a <= b) {
                if (m1 + 15 < 60 && a < b) {
                    m1 = m1 + 15
                    // console.log(a+":"+m1)
                    slots.push(a + ":" + m1)
                }
                else if (m1 + 15 > 60 && a < b) {
                    m1 = 15 - (60 - m1)
                    a = a + 1
                    // console.log(a+":"+m1)
                    slots.push(a + ":" + m1)
                }
                else if (m1 + 15 === 60 && a < b) {
                    m1 = 0
                    a = a + 1
                    // console.log(a+":"+m1)
                    slots.push(a + ":" + m1)
                }
                else if (m1 + 15 <= 60 && a === b && m1 + 15 < m2) {
                    m1 = m1 + 15
                    // console.log(a+":"+m1)
                    slots.push(a + ":" + m1)
                }
                else if (m1 + 15 <= 60 && a === b && m1 + 15 >= m2) {
                    m1 = m2
                    // console.log(a+":"+m1)
                    slots.push(a + ":" + m1)
                    a = a + 1
                }
                else {
                    a = b + 1
                }


            }

            real_slots.push(slots)
            slots = []


        }



        return (
            real_slots
        )





    }



    function get_array_of_slots(day) {
        let start = []
        let end = []

        //  START SLOTS---------------------------------

        let number_of_slots_per_day_start = 0;
        let slots_of_weeks;
        if (doctor_key.count === 0) {
            slots_of_weeks = data.start[indexx].split(",")
        }
        else if (doctor_key.count === 1) {
            slots_of_weeks = data.start1[indexx].split(",")
        }
        else {
            slots_of_weeks = data.start2[indexx].split(",")
        }

        if (slots_of_weeks[day] !== "Holiday") {
            number_of_slots_per_day_start = slots_of_weeks[day].split("-")
            number_of_slots_per_day_start.pop()
            start.push(number_of_slots_per_day_start)

            //     END SLOTS------------------------
            let slots_end ;
            if (doctor_key.count === 0) {
                slots_end = data.end[indexx].split(",")
            }
            else if (doctor_key.count === 1) {
                slots_end = data.end1[indexx].split(",")
            }
            else {
                slots_end = data.end2[indexx].split(",")
            }


            let a = slots_end[day].split("-")
            a.pop()
            end.push(a)
            console.log("start",start)
            console.log("end",end)

            let my_whole_slots = into_hours_minutes(start, end)

            setmapping(my_whole_slots)

        }

        else {
            setholiday(1)
        }


        // console.log(start,end)


        // END SLOTS---------------------------








        // if(slots_of_weeks[appointmentday]==="Holiday")
        // {
        //     setholiday("Holiday")
        // }
        // else{
        //     number_of_slots_per_day = slots_of_weeks[appointmentday]
        //     number_of_slots_per_day.pop()
        //     console.log(number_of_slots_per_day)

        // }








    }





    function getmeday(day) {
        let array_of_day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        return array_of_day[day]
    }

    function date(e) {
        set_date_of_appointment(e.target.value)
        setholiday(0)
        let din = 0;
        let present_date = new Date()
        let appoinment_date = new Date(e.target.value)
        if (present_date - appoinment_date > 0) {
            setvaliddate(false)
        }
        else {
            setvaliddate(true)
        }
        // console.log(appoinment_date.getDay())

        if (parseInt((appoinment_date.getDay() - 1)) === -1) {
            din = 6
        }
        else
            din = appoinment_date.getDay() - 1

        setshowday(din)
        // console.log(din)
        get_array_of_slots(din)

    }


    let api_data = ""

    function onclick_submit(value) {

        let appoinment_data = {
            "date": date_of_appoinment,
            "doctor_id": doctor_key['doctor_key'],
            "hospital_id":doctor_key['hospital_key'],
            "count": doctor_key["count"],
            "time": value,
            "user_id": sessionStorage.getItem('user_id'),
            "patients": number_patients
        }

        console.log(appoinment_data)


        var headers = {
            "Content-Type": "application/json;charset=UTF-8",
        }



        axios.post(
            'http://localhost/back_end/user_appointment.php', appoinment_data, headers
        ).then(
            res => {
                if (res.data.signal == 2) {
                    alert(res.data.id)
                }
                else {
                    set_received_data({ "data": res.data, "isloading": true })
                }

            }
        );

    }


    if (received_data["isloading"]) {
        return (
            <div className="review_form">
                <h1>Appointment made</h1>

            </div>

        )
    }







    return (
        <Fragment>
            <div className="review_form">
                <div className="row">
                    <h3>Book Appointment</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <br></br>
                        select date:  <input type="date" onChange={(e) => date(e)} placeholder="select date of appointment" />
                    </div>
                </div>
                <br></br>
                <div className="row">
                    Patients:
                    <div className="col">
                        <select className="form-select" id="city" name="slot" onChange={(e) => set_number_patients(parseInt(e.target.value))} aria-label="Default select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                </div>

                <br></br>
                {
                    validdate ?
                        <div>
                            <div className="row">
                                <div className="col">
                                    <h1>{getmeday(showday)}</h1>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="error"></div>


                }

                {
                    !holiday ?
                        mapping.map((data, kee) => {

                            return (

                                <div className="row" key={kee}>
                                    <h4>Shift {kee + 1}</h4>




                                    <div className="col">
                                        {
                                            data.map((a, b) => {
                                                let time_slots = a.split(":")
                                                let c = a
                                                parseInt(time_slots[0]) > 12 ? a = `${parseInt(time_slots[0]) - 12}:${time_slots[1]} PM` : a = `${time_slots[0]}:${time_slots[1]} AM`
                                                parseInt(time_slots[0]) === 12 ? a = `${parseInt(time_slots[0])}:${time_slots[1]} PM` : <div></div>
                                                parseInt(time_slots[0]) === 0 ? a = `${parseInt(time_slots[0]) + 12}:${time_slots[1]} AM` : <div></div>





                                                return (
                                                    <Fragment key={b}>
                                                        <button value={a} onClick={(e) => onclick_submit(e.target.value)} className="btn btn-outline-success appoinment">{a}</button>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            )

                        })



                        :

                        <h5>Holiday</h5>




                }
                <button className="btn btn-primary back" onClick={() => callback(0, false)}>Back</button>
            </div>
        </Fragment>
    )
}

export default MakeApppointment;