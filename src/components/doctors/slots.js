import React, { Fragment, useState } from 'react'
import "./../../index.css"
import DaySlots from './day'


function DocSlots({submit,set_values}) {

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


    function onSubmit() {
        if (mondaycheck && tuesdaycheck && wednesdaycheck && thursdaycheck && fridaycheck && saturdaycheck && sundaycheck) {
            set_values([mondaySlots,tuesdaySlots,wednesdaySlots,thursdaySlots,fridaySlots,saturdaySlots,sundaySlots])
            submit(3)
        }
        else{
            alert("Complete your slots!")
        }
    }


    return (
        <div>
        
            <DaySlots setDay={setmondaySlots} day="Monday" check={setmondaycheck}/>
            <DaySlots setDay={settuesdaySlots} day="Tuesday" check={settuesdaycheck}/>
            <DaySlots setDay={setwednesdaySlots} day="Wednesday" check={setwednesdaycheck}/>
            <DaySlots setDay={setthursdaySlots} day="Thursday" check={setthursdaycheck}/>
            <DaySlots setDay={setfridaySlots} day="Friday" check={setfridaycheck}/>
            <DaySlots setDay={setsaturdaySlots} day="Saturday" check={setsaturdaycheck}/>
            <DaySlots setDay={setsundaySlots} day="Sunday" check={setsundaycheck}/>

            <button onClick={onSubmit}>Next</button>
            <button onClick={()=>submit(1)}>Back</button>


            
        </div>


    )


}

export default DocSlots;