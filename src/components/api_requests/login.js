import axios from 'axios';

export const get_appointments = async(idd) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }

    let values = {
        id: idd
    }

    
    let data = await axios.post(
        'http://localhost/back_end/appointment.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    return data;
}



export const get_doctors = async(city,speciality) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        city: city,
        speciality: speciality
    }

    
    let data = await axios.post(
        'http://localhost/back_end/getsearch.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}



export const get_max_user_appoints = async(user_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: user_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/getmaxusers.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}



export const get_user_appoinments = async(user_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: user_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/user_appointment_get.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}



export const cancel_appoinments = async(cancel_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: cancel_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/user_cancel_appointment.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}


export const get_specialist = async(hospital_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: hospital_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/hos_get_specialist.php', values, headers
    ).then(
            res => {

                let specialist = res.data.special

                let specialist_array = specialist.trim().split("|")
                let my_array = []

                for (let i = 0; i < specialist_array.length; i++) {
                  
                    if(specialist_array[i].trim() === "")
                    {
                        continue
                    }
                    else{
                        my_array.push(specialist_array[i].trim())
                    }
                   
                }


                return my_array
            }
        );
    
    return data;
}




export const get_hospital_doctors = async(hospital_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: hospital_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/get_hsopital_doc.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}



export const get_hospital_appoinments = async(hospital_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: hospital_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/hospital_appointments_get.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}




