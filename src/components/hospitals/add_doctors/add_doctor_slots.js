import React, { Fragment, useState } from 'react'
import "./../../../index.css"
import DaySlots from './../../doctors/day'
import Navbar from './../../navbar'
import ReviewAlready from './add_doctor_slots'


function DocSlotsAlready({submit,set_data,back_slotss}) {


    const [mondaySlots,setmondaySlots] = useState([])
    const [tuesdaySlots,settuesdaySlots] = useState([])
    const [wednesdaySlots,setwednesdaySlots] = useState([])
    const [thursdaySlots,setthursdaySlots] = useState([])
    const [fridaySlots,setfridaySlots] = useState([])
    const [saturdaySlots,setsaturdaySlots] = useState([])
    const [sundaySlots,setsundaySlots] = useState([])


    const [mondaycheck,setmondaycheck] = useState(false)
    const [tuesdaycheck,settuesdaycheck] = useState(false)
    const [wednesdaycheck,setwednesdaycheck] = useState(false)
    const [thursdaycheck,setthursdaycheck] = useState(false)
    const [fridaycheck,setfridaycheck] = useState(false)
    const [saturdaycheck,setsaturdaycheck] = useState(false)
    const [sundaycheck,setsundaycheck] = useState(false)


    function ondeliver() {
        if (mondaycheck && tuesdaycheck && wednesdaycheck && thursdaycheck && fridaycheck && saturdaycheck && sundaycheck) {
        
            

            let mon = {"numberOfTickets": String(mondaySlots['tickets'].length) ,"tickets": mondaySlots['tickets']}
            let tues = {"numberOfTickets": String(tuesdaySlots['tickets'].length) ,"tickets": tuesdaySlots['tickets']}
            let wed = {"numberOfTickets": String(wednesdaySlots['tickets'].length) ,"tickets": wednesdaySlots['tickets']}
            let thurs = {"numberOfTickets": String(thursdaySlots['tickets'].length) ,"tickets": thursdaySlots['tickets']}
            let fri = {"numberOfTickets": String(fridaySlots['tickets'].length) ,"tickets": fridaySlots['tickets']}
            let satur = {"numberOfTickets": String(saturdaySlots['tickets'].length) ,"tickets": saturdaySlots['tickets']}
            let sun = {"numberOfTickets": String(sundaySlots['tickets'].length),"tickets": sundaySlots['tickets']}

            set_data([mon,tues,wed,thurs,fri,satur,sun])
            submit(1)
            

        }
        else{
            alert("Complete your slots!")
        }
    }


    




    return (
        <Fragment>
    
    
            
            <h2 align="center">Slots</h2>
        
            <DaySlots setDay={setmondaySlots} day="Monday" check={setmondaycheck}/>
            <DaySlots setDay={settuesdaySlots} day="Tuesday" check={settuesdaycheck}/>
            <DaySlots setDay={setwednesdaySlots} day="Wednesday" check={setwednesdaycheck}/>
            <DaySlots setDay={setthursdaySlots} day="Thursday" check={setthursdaycheck}/>
            <DaySlots setDay={setfridaySlots} day="Friday" check={setfridaycheck}/>
            <DaySlots setDay={setsaturdaySlots} day="Saturday" check={setsaturdaycheck}/>
            <DaySlots setDay={setsundaySlots} day="Sunday" check={setsundaycheck}/>
            <br></br>
            <div className="row">
                <div className="col col-5">

                </div>
                <div className="col">
                <button align="center" className="btn btn-success" onClick={ondeliver}>Submit all slots</button>
                </div>
            </div>
            <br></br>

            <button className="btn btn-success back" onClick={() => back_slotss(false)}>Back </button>


            
    
        </Fragment>


    )


}

export default DocSlotsAlready;