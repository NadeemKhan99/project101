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



//  forms....formik.....validatoins....


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
                return res.data.message
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


export const get_labs = async(city) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        city: city
    }

    
    let data = await axios.post(
        'http://localhost/back_end/getlabs.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}




export const get_max_user_labs = async(user_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: user_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/getmaxuserslab.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}



export const get_lab_appoinments = async(user_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: user_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/user_lab_appointment.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}


export const get_appointments_lab = async(lab_id) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }


    let values = {
        id: lab_id
    }

    
    let data = await axios.post(
        'http://localhost/back_end/lab_appointments_get.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}


export const get_cities = async() =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }



    let values = {
        id: 0
    }

    
    let data = await axios.post(
        'http://localhost/back_end/get_cities.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}



export const get_all_doctors_city_wise = async(city) =>{
    var headers = {
        "Content-Type": "application/json;charset=UTF-8",
    }



    let values = {
        id: city
    }

    
    let data = await axios.post(
        'http://localhost/back_end/get_doctor_city_wise.php', values, headers
    ).then(
            res => {
                return res.data
            }
        );
    
    return data;
}










