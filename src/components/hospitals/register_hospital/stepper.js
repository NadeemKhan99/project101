import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Navbar from './../../navbar'
import HospitalSignup from './signup_form'
import EducationForm from './education_form'
import Review from './review'
import HosSign from './login'
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));




function getSteps() {
    return ['Register Data', 'Hospital Info', 'Review'];
}

function getStepContent(stepIndex, setStep, setformValues, formValues, setformValuesEducation, formValuesEducation) {
    switch (stepIndex) {
        case 0:
            return <HospitalSignup submit={setStep} preValues={formValues} setformValues={setformValues} />;
        case 1:
            return <EducationForm submit={setStep} formValuesEducation={formValuesEducation} setformValuesEducation={setformValuesEducation} />;
        case 2:
            return <Review submit={setStep} values={[formValues, formValuesEducation]} />;


    }
}

export default function HospitalSignupFront() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValues, setformValues] = React.useState({
        name: "",
        email: "",
        password: "",
        city: "",
        phone: "",
        address: "",
        hospital: "",
        numberDoctor: "",
        speciality: ""
    })

    const [formValuesEducation, setformValuesEducation] = React.useState({
        hospital: "",
        numberDoctor: "",
        speciality: ""
    })

    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    if (activeStep === 3) {
        return (
            <HosSign />
        )
    }

    return (
        <Fragment>
            <Navbar />
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {
                    getStepContent(activeStep, setActiveStep, setformValues, formValues, setformValuesEducation, formValuesEducation)
                }



            </div>
        </Fragment>
    );
}
