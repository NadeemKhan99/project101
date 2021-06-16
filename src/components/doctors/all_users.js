import React, { useState, Fragment } from 'react'
import Navbar from './../navbar'
import "./../../index.css"

import DoctorExistStepper from './change_slots/stepper'

import SignupForm from './change_doctors/stepper'
import { date } from 'yup/lib/locale'
// import {get_user_appoinments,cancel_appoinments} from './../api_requests/login'


function AllUers({flagg = false}) {





    let [change_page, set_change_page] = useState(flagg)

    
  


    let i = 0;
    let rows = []


    while (i < sessionStorage.getItem("counter")) {
        rows.push(i)
        i++
    }



    function get_array_of_slots(day, starting_time, ending_time) {

    
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
                my_data.push(start[0][i] + " - " + end[0][i])

            }
            let rows1 = []
            let i = 0

            while (i < my_data.length) {
                rows1.push(i)
                i++
            }

            return (
                <Fragment>
                    {
                        rows1.map((data, key) => {
                            return (
                                <div key={key}>
                                    <b>Shift {data + 1}</b>
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


    


    function get_string(start) {
        let start_array = []

        for (let j = 0; j < start.length; j++) {

            if (j % 7 == 0) {
                start_array.push(start[j])
            }
            else {
                start_array[start_array.length - 1] = start_array[start_array.length - 1] + "," + start[j]
            }


        }


        return start_array
    }


    let start = sessionStorage.getItem("start").split(",")
    let end = sessionStorage.getItem("end").split(",")

    let start_array = get_string(start)
    let end_array = get_string(end)
    

    let hospital_names = sessionStorage.getItem("hospital_names").split(",")





    function change_it(flag)
    {
        set_change_page(flag)
    }

    if(change_page)
    {
        return(<DoctorExistStepper back_slots={change_it} doctor_id={sessionStorage.getItem("doctor_id")}/>)
    }

  









    return (
        <div>
            <Navbar />
            <h1 className="title">My Sittings   </h1>



            {


                rows.map((data, key) => {
                    return (
                        <div className="review_form" key={key}>
                            <div className="container">
                                <div className="row">

                                    {
                                        sessionStorage.getItem("clinic") !== "nothing" && key === 0 ?
                                            <div className="col">
                                                <b>{sessionStorage.getItem("clinic")}</b>
                                            </div>

                                            :
                                            
                                            <div className="col">
                                                {
                                                    sessionStorage.getItem("clinic") !== "nothing" ?
                                                    <b>{hospital_names[data - 1]}</b>
                                                    :
                                                   <b>{hospital_names[key]}</b>
                                                }


                                            </div>
                                    }


                                    <div className="col">
                                        <b>{sessionStorage.getItem("email")}</b>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col">
                                        +92 {sessionStorage.getItem("phone")}
                                    </div>
                                    <div className="col">
                                        {sessionStorage.getItem("address")}
                                    </div>
                                    <div className="col">
                                        <b>{sessionStorage.getItem("city")}</b>
                                    </div>
                                    
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col">
                                        {sessionStorage.getItem("experience")} experience
                                        </div>
                                    <div className="col">
                                        {sessionStorage.getItem("fees")} fee
                                        </div>
                                    <div className="col">
                                        <b>speciality:</b> <br></br>{sessionStorage.getItem("speciality")}
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
                                        {get_array_of_slots(0, start_array[key], end_array[key])}

                                    </div>
                                    <div className="col">
                                        {get_array_of_slots(1, start_array[key], end_array[key])}
                                    </div>
                                    <div className="col">
                                        {get_array_of_slots(2, start_array[key], end_array[key])}
                                    </div>
                                    <div className="col">
                                        {get_array_of_slots(3, start_array[key], end_array[key])}
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
                                        {get_array_of_slots(4, start_array[key], end_array[key])}

                                    </div>
                                    <div className="col">
                                        {get_array_of_slots(5, start_array[key], end_array[key])}
                                    </div>
                                    <div className="col">
                                        {get_array_of_slots(6, start_array[key], end_array[key])}
                                    </div>
                                   
                                </div>
                            </div>


                            {
                                        sessionStorage.getItem("clinic") !== "nothing" && key === 0 ?
                                                <div className="row">
                                                 <div className="col">
                                                     <button className="btn btn-success" onClick={()=>change_it(true)}>Change Slots</button>
                                                 </div>
                                               
                                         </div>                                       

                                            :
                                            ""
                                    }


                            





                        </div>
                    )

                })



            }







        </div>
    );
}

export default AllUers;