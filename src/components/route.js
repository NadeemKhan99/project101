import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'
import HospitalSignupFront from './hospitals/register_hospital/stepper'
import Doctor from './doctor'
import Lab from './lab'
import Sign from './signin'
import Signup from './signup'
import DoctorSignup from './doctors/stepper'
import SignupForm from './doctors/change_doctors/stepper'
import AllUers from './doctors/all_users'
import User_Appointments from './userfolder/my_appointments'
import Hospital from './hospital_page'
import SearchDoctor from './hospitals/add_doctors/search_doctor'
import ShowHosDoctors from './hospitals/show_hospital_data/my_doctors'
import Hospital_Appointments from './hospitals/show_hospital_data/show_appointments_detail'

function RouteConfig()
{
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/hospital" component={Hospital}/>
                    <Route exact path="/lab" component={Lab}/>
                    <Route exact path="/doctor" component={Doctor}/>
                    <Route exact path="/doctor/doc_register" component={DoctorSignup}/>
                    <Route exact path="/login" component={Sign}/>
                    <Route exact path="/register" component={Signup}/>
                    <Route exact path="/my_appointments" component={User_Appointments}/>
                    <Route exact path="/hospital/register" component={HospitalSignupFront}/>
                    <Route exact path="/search_doctor" component={SearchDoctor}/>
                    <Route exact path="/hospital/doctors" component={ShowHosDoctors}/>
                    <Route exact path="/accounts" component={AllUers}/>
                    <Route exact path="/update" component={SignupForm}/>
                    <Route exact path="/hospital/appointments" component={Hospital_Appointments}/>
                    
                    
                </Switch>
            </Router>

        </div>
    );
}

export default RouteConfig;