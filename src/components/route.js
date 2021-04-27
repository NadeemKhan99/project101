import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import About from './about'
import HosSign from './hospitals/register_hospital/login'
import Doctor from './doctor'
import Lab from './lab'
import Sign from './signin'
import Signup from './signup'
import DoctorSignup from './doctors/stepper'
import User_Appointments from './userfolder/my_appointments'

function RouteConfig()
{
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/hospital" component={HosSign}/>
                    <Route exact path="/lab" component={Lab}/>
                    <Route exact path="/doctor" component={Doctor}/>
                    <Route exact path="/doctor/doc_register" component={DoctorSignup}/>
                    <Route exact path="/login" component={Sign}/>
                    <Route exact path="/register" component={Signup}/>
                    <Route exact path="/my_appointments" component={User_Appointments}/>
                </Switch>
            </Router>
        </div>
    );
}

export default RouteConfig;