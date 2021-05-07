import React, { useState } from 'react'
import "./../../../index.css"
import axios from 'axios';



function ReviewAlready({ submit, slots_data, back_to_search, doctor_id}) {



    let monday_slots = slots_data[0]
    let tuesday_slots = slots_data[1]
    let wednesday_slots = slots_data[2]
    let thursday_slots = slots_data[3]
    let friday_slots = slots_data[4]
    let saturday_slots = slots_data[5]
    let sunday_slots = slots_data[6]

    let monday_database = ["", ""]
    let tuesday_database = ["", ""]
    let wednesday_database = ["", ""]
    let thursday_database = ["", ""]
    let friday_database = ["", ""]
    let saturday_database = ["", ""]
    let sunday_database = ["", ""]


    function get_mapped_data(data) {
        let i = 1;
        let rows = []
        while (i <= parseInt(data)) {
            rows.push(i)
            i++
        }
        return rows
    }



    // console.log(doctor_id)
    // console.log(sessionStorage.getItem("hospital_id"))



    function onSubmit() {



        let starting = `${monday_database[0]},${tuesday_database[0]},${wednesday_database[0]},${thursday_database[0]},${friday_database[0]},${saturday_database[0]},${sunday_database[0]}`
        let ending = `${monday_database[1]},${tuesday_database[1]},${wednesday_database[1]},${thursday_database[1]},${friday_database[1]},${saturday_database[1]},${sunday_database[1]}`

        const registration_data = {
            doctor_id: doctor_id,
            start: starting,
            end: ending
        }



        var headers = {
            "Content-Type": "application/json;charset=UTF-8",
        }




        axios.post(
            'http://localhost/back_end/update_doctor_slots.php', registration_data, headers
        ).then(
            res => {

                if(res.data.signal === 1)
                {
                    alert(res.data.id)
                    back_to_search(false)

                }
                else{
                    alert(res.data.id)
                    back_to_search(false)
                }




            }
        );


    }



    return (
        <div className="review_form">
            <h2>Review</h2>
            <br></br>

            {/*  ------------------------------------MONDAY----------------------------- */}
            <h4>Slots</h4>
            <b>Monday</b>
            {
                monday_slots.numberOfTickets !== "0" ?


                    get_mapped_data(monday_slots.numberOfTickets).map((data, key) => {

                        const start_data = monday_slots.tickets[key].email.split(":")
                        console.log(start_data)
                        const end_data = monday_slots.tickets[key].name.split(":")
                        console.log(end_data)
                        let start_time = ""
                        let end_time = ""




                        parseInt(start_data[0]) > 12 ? start_time = `${parseInt(start_data[0])}:${start_data[1]} PM` : start_time = `${start_data[0]}:${start_data[1]} AM`
                        parseInt(start_data[0]) === 12 ? start_time = `${start_data[0]}:${start_data[1]} PM` : <div></div>

                        parseInt(end_data[0]) > 12 ? end_time = `${parseInt(end_data[0])}:${end_data[1]} PM` : end_time = `${end_data[0]}:${end_data[1]} AM`
                        parseInt(end_data[0]) === 12 ? end_time = `${end_data[0]}:${end_data[1]} PM` : <div></div>

                        monday_database[0] = monday_database[0].concat(end_time + "-")
                        monday_database[1] = monday_database[1].concat(start_time + "-")





                        return (
                            <div key={key}>
                                <br></br>
                                <p>From {end_time} to {start_time}</p>
                            </div>
                        )
                    })


                    :

                    get_mapped_data(1).map((data, key) => {
                        monday_database[0] = "Holiday"
                        monday_database[1] = "Holiday"
                        return (
                            <div key={key}>
                                <p>Not Available</p>
                            </div>
                        )

                    })
            }


            {/*  ------------------------------------Tuesday----------------------------- */}

            <h5>Tuesday</h5>
            {
                tuesday_slots.numberOfTickets !== "0" ?


                    get_mapped_data(tuesday_slots.numberOfTickets).map((data, key) => {

                        const start_data = tuesday_slots.tickets[key].email.split(":")
                        const end_data = tuesday_slots.tickets[key].name.split(":")
                        let start_time = ""
                        let end_time = ""
                        parseInt(start_data[0]) > 12 ? start_time = `${parseInt(start_data[0])}:${start_data[1]} PM` : start_time = `${start_data[0]}:${start_data[1]} AM`
                        parseInt(start_data[0]) === 12 ? start_time = `${start_data[0]}:${start_data[1]} PM` : <div></div>

                        parseInt(end_data[0]) > 12 ? end_time = `${parseInt(end_data[0])}:${end_data[1]} PM` : end_time = `${end_data[0]}:${end_data[1]} AM`
                        parseInt(end_data[0]) === 12 ? end_time = `${end_data[0]}:${end_data[1]} PM` : <div></div>


                        tuesday_database[0] = tuesday_database[0].concat(end_time + "-")
                        tuesday_database[1] = tuesday_database[1].concat(start_time + "-")

                        return (
                            <div key={key}>
                                <br></br>
                                <p>From {end_time} to {start_time}</p>
                            </div>
                        )
                    })


                    :
                    get_mapped_data(1).map((data, key) => {
                        tuesday_database[0] = "Holiday"
                        tuesday_database[1] = "Holiday"
                        return (
                            <div key={key}>
                                <p>Not Available</p>
                            </div>
                        )

                    })
            }


            {/*  ------------------------------------Wednesday----------------------------- */}

            <h5>Wednesday</h5>
            {
                wednesday_slots.numberOfTickets !== "0" ?


                    get_mapped_data(wednesday_slots.numberOfTickets).map((data, key) => {
                        const start_data = wednesday_slots.tickets[key].email.split(":")
                        const end_data = wednesday_slots.tickets[key].name.split(":")
                        let start_time = ""
                        let end_time = ""
                        parseInt(start_data[0]) > 12 ? start_time = `${parseInt(start_data[0])}:${start_data[1]} PM` : start_time = `${start_data[0]}:${start_data[1]} AM`
                        parseInt(start_data[0]) === 12 ? start_time = `${start_data[0]}:${start_data[1]} PM` : <div></div>

                        parseInt(end_data[0]) > 12 ? end_time = `${parseInt(end_data[0])}:${end_data[1]} PM` : end_time = `${end_data[0]}:${end_data[1]} AM`
                        parseInt(end_data[0]) === 12 ? end_time = `${end_data[0]}:${end_data[1]} PM` : <div></div>

                        wednesday_database[0] = wednesday_database[0].concat(end_time + "-")
                        wednesday_database[1] = wednesday_database[1].concat(start_time + "-")

                        return (
                            <div key={key}>
                                <br></br>
                                <p>From {end_time} to {start_time}</p>
                            </div>
                        )
                    })


                    :
                    get_mapped_data(1).map((data, key) => {
                        wednesday_database[0] = "Holiday"
                        wednesday_database[1] = "Holiday"
                        return (
                            <div key={key}>
                                <p>Not Available</p>
                            </div>
                        )

                    })
            }




            {/*  ------------------------------------Thursday----------------------------- */}

            <h5>Thursday</h5>
            {
                thursday_slots.numberOfTickets !== "0" ?


                    get_mapped_data(thursday_slots.numberOfTickets).map((data, key) => {

                        const start_data = thursday_slots.tickets[key].email.split(":")
                        const end_data = thursday_slots.tickets[key].name.split(":")
                        let start_time = ""
                        let end_time = ""
                        parseInt(start_data[0]) > 12 ? start_time = `${parseInt(start_data[0])}:${start_data[1]} PM` : start_time = `${start_data[0]}:${start_data[1]} AM`
                        parseInt(start_data[0]) === 12 ? start_time = `${start_data[0]}:${start_data[1]} PM` : <div></div>

                        parseInt(end_data[0]) > 12 ? end_time = `${parseInt(end_data[0])}:${end_data[1]} PM` : end_time = `${end_data[0]}:${end_data[1]} AM`
                        parseInt(end_data[0]) === 12 ? end_time = `${end_data[0]}:${end_data[1]} PM` : <div></div>

                        thursday_database[0] = thursday_database[0].concat(end_time + "-")
                        thursday_database[1] = thursday_database[1].concat(start_time + "-")

                        return (
                            <div key={key}>
                                <br></br>
                                <p>From {end_time} to {start_time}</p>
                            </div>
                        )
                    })


                    :
                    get_mapped_data(1).map((data, key) => {
                        thursday_database[0] = "Holiday"
                        thursday_database[1] = "Holiday"
                        return (
                            <div key={key}>
                                <p>Not Available</p>
                            </div>
                        )

                    })
            }


            {/*  ------------------------------------Friday----------------------------- */}

            <h5>Friday</h5>
            {
                friday_slots.numberOfTickets !== "0" ?


                    get_mapped_data(friday_slots.numberOfTickets).map((data, key) => {
                        const start_data = friday_slots.tickets[key].email.split(":")
                        const end_data = friday_slots.tickets[key].name.split(":")
                        let start_time = ""
                        let end_time = ""
                        parseInt(start_data[0]) > 12 ? start_time = `${parseInt(start_data[0])}:${start_data[1]} PM` : start_time = `${start_data[0]}:${start_data[1]} AM`
                        parseInt(start_data[0]) === 12 ? start_time = `${start_data[0]}:${start_data[1]} PM` : <div></div>

                        parseInt(end_data[0]) > 12 ? end_time = `${parseInt(end_data[0])}:${end_data[1]} PM` : end_time = `${end_data[0]}:${end_data[1]} AM`
                        parseInt(end_data[0]) === 12 ? end_time = `${end_data[0]}:${end_data[1]} PM` : <div></div>

                        friday_database[0] = friday_database[0].concat(end_time + "-")
                        friday_database[1] = friday_database[1].concat(start_time + "-")

                        return (
                            <div key={key}>
                                <br></br>
                                <p>From {end_time} to {start_time}</p>
                            </div>
                        )
                    })


                    :
                    get_mapped_data(1).map((data, key) => {
                        friday_database[0] = "Holiday"
                        friday_database[1] = "Holiday"
                        return (
                            <div key={key}>
                                <p>Not Available</p>
                            </div>
                        )

                    })
            }


            {/*  ------------------------------------Saturday----------------------------- */}

            <h5>Saturday</h5>
            {
                saturday_slots.numberOfTickets !== "0" ?


                    get_mapped_data(saturday_slots.numberOfTickets).map((data, key) => {

                        const start_data = saturday_slots.tickets[key].email.split(":")
                        const end_data = saturday_slots.tickets[key].name.split(":")
                        let start_time = ""
                        let end_time = ""
                        parseInt(start_data[0]) > 12 ? start_time = `${parseInt(start_data[0])}:${start_data[1]} PM` : start_time = `${start_data[0]}:${start_data[1]} AM`
                        parseInt(start_data[0]) === 12 ? start_time = `${start_data[0]}:${start_data[1]} PM` : <div></div>

                        parseInt(end_data[0]) > 12 ? end_time = `${parseInt(end_data[0])}:${end_data[1]} PM` : end_time = `${end_data[0]}:${end_data[1]} AM`
                        parseInt(end_data[0]) === 12 ? end_time = `${end_data[0]}:${end_data[1]} PM` : <div></div>

                        saturday_database[0] = saturday_database[0].concat(end_time + "-")
                        saturday_database[1] = saturday_database[1].concat(start_time + "-")

                        return (
                            <div key={key}>
                                <br></br>
                                <p>From {end_time} to {start_time}</p>
                            </div>
                        )
                    })


                    :
                    get_mapped_data(1).map((data, key) => {
                        saturday_database[0] = "Holiday"
                        saturday_database[1] = "Holiday"
                        return (
                            <div key={key}>
                                <p>Not Available</p>
                            </div>
                        )

                    })
            }


            {/*  ------------------------------------Sunday----------------------------- */}

            <h5>Sunday</h5>
            {
                sunday_slots.numberOfTickets !== "0" ?


                    get_mapped_data(sunday_slots.numberOfTickets).map((data, key) => {
                        const start_data = sunday_slots.tickets[key].email.split(":")
                        const end_data = sunday_slots.tickets[key].name.split(":")
                        let start_time = ""
                        let end_time = ""
                        parseInt(start_data[0]) > 12 ? start_time = `${parseInt(start_data[0])}:${start_data[1]} PM` : start_time = `${start_data[0]}:${start_data[1]} AM`
                        parseInt(start_data[0]) === 12 ? start_time = `${start_data[0]}:${start_data[1]} PM` : <div></div>

                        parseInt(end_data[0]) > 12 ? end_time = `${parseInt(end_data[0])}:${end_data[1]} PM` : end_time = `${end_data[0]}:${end_data[1]} AM`
                        parseInt(end_data[0]) === 12 ? end_time = `${end_data[0]}:${end_data[1]} PM` : <div></div>

                        sunday_database[0] = sunday_database[0].concat(end_time + "-")
                        sunday_database[1] = sunday_database[1].concat(start_time + "-")

                        return (
                            <div key={key}>
                                <br></br>
                                <p>From {end_time} to {start_time}</p>
                            </div>
                        )
                    })


                    :
                    get_mapped_data(1).map((data, key) => {
                        sunday_database[0] = "Holiday"
                        sunday_database[1] = "Holiday"
                        return (
                            <div key={key}>
                                <p>Not Available</p>
                            </div>
                        )

                    })
            }

            <div className="row">
                <div className="col">
                    <button className="btn btn-danger" onClick={() => submit(0)}>Back</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary" onClick={onSubmit}>Submit</button>
                </div>
                <div className="col">

                    <button className="btn btn-success" onClick={() => back_to_search(false)}>Back to Accounts</button>
                </div>

            </div>







        </div>
    );
}

export default ReviewAlready;