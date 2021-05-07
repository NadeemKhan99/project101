import React from 'react'
import HosSign from './hospitals/register_hospital/login'
import Hospital_appointments from './hospitals/show_hospital_data/show_appointments'
function Hospital() {

    return (
        <div>
            {sessionStorage.getItem('hospital_id')===null?
            <HosSign/>
            :
            <Hospital_appointments/>
        
        }
            
        </div>
    );
}

export default Hospital;