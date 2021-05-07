import React, { Fragment, useState } from 'react'
import "./../../index.css"
import DaySlots from './day'


function DocSlots({ submit, set_values }) {

    const [mondaySlots, setmondaySlots] = useState([])
    const [tuesdaySlots, settuesdaySlots] = useState([])
    const [wednesdaySlots, setwednesdaySlots] = useState([])
    const [thursdaySlots, setthursdaySlots] = useState([])
    const [fridaySlots, setfridaySlots] = useState([])
    const [saturdaySlots, setsaturdaySlots] = useState([])
    const [sundaySlots, setsundaySlots] = useState([])


    const [mondaycheck, setmondaycheck] = useState(false)
    const [tuesdaycheck, settuesdaycheck] = useState(false)
    const [wednesdaycheck, setwednesdaycheck] = useState(false)
    const [thursdaycheck, setthursdaycheck] = useState(false)
    const [fridaycheck, setfridaycheck] = useState(false)
    const [saturdaycheck, setsaturdaycheck] = useState(false)
    const [sundaycheck, setsundaycheck] = useState(false)


    function onSubmit() {
        if (mondaycheck && tuesdaycheck && wednesdaycheck && thursdaycheck && fridaycheck && saturdaycheck && sundaycheck) {


            let mon = { "numberOfTickets": String(mondaySlots['tickets'].length), "tickets": mondaySlots['tickets'] }
            let tues = { "numberOfTickets": String(tuesdaySlots['tickets'].length), "tickets": tuesdaySlots['tickets'] }
            let wed = { "numberOfTickets": String(wednesdaySlots['tickets'].length), "tickets": wednesdaySlots['tickets'] }
            let thurs = { "numberOfTickets": String(thursdaySlots['tickets'].length), "tickets": thursdaySlots['tickets'] }
            let fri = { "numberOfTickets": String(fridaySlots['tickets'].length), "tickets": fridaySlots['tickets'] }
            let satur = { "numberOfTickets": String(saturdaySlots['tickets'].length), "tickets": saturdaySlots['tickets'] }
            let sun = { "numberOfTickets": String(sundaySlots['tickets'].length), "tickets": sundaySlots['tickets'] }



            set_values([mon, tues, wed, thurs, fri, satur, sun])
            submit(3)
        }
        else {
            alert("Complete your slots!")
        }
    }


    return (
        <div>
            <h3 className="title">Make Slots</h3>
            <DaySlots setDay={setmondaySlots} day="Monday" check={setmondaycheck} />
            <DaySlots setDay={settuesdaySlots} day="Tuesday" check={settuesdaycheck} />
            <DaySlots setDay={setwednesdaySlots} day="Wednesday" check={setwednesdaycheck} />
            <DaySlots setDay={setthursdaySlots} day="Thursday" check={setthursdaycheck} />
            <DaySlots setDay={setfridaySlots} day="Friday" check={setfridaycheck} />
            <DaySlots setDay={setsaturdaySlots} day="Saturday" check={setsaturdaycheck} />
            <DaySlots setDay={setsundaySlots} day="Sunday" check={setsundaycheck} />

            <div className="row padd">
                <div className="col">
                    <button className="btn btn-primary float-right" onClick={() => submit(1)}>Back</button>
                </div>
                <div className="col">
                    <button className="btn btn-success" onClick={onSubmit}>Next</button>
                </div>
            </div>





        </div>


    )


}

export default DocSlots;