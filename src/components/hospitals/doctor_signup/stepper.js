import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Navbar from './../../navbar'
import SignupForm from './doc_basic'
import EducationForm from './doc_education'
import Review from './doc_review'
import DocSlots from './doc_slots'
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
    return ['Register Data', 'Education Info', 'Slots', 'Review'];
}

function getStepContent(stepIndex, setStep, setformValues, formValues, setformValuesEducation, formValuesEducation, doctor_slots, set_doctor_slots,back_slots) {
    switch (stepIndex) {
        case 0:
            return <SignupForm submit={setStep} preValues={formValues} setformValues={setformValues} back_slots={back_slots}/>;
        case 1:
            return <EducationForm submit={setStep} formValuesEducation={formValuesEducation} setformValuesEducation={setformValuesEducation} back_slots={back_slots}/>;
        case 2:
            return <DocSlots submit={setStep} set_values={set_doctor_slots} back_slots={back_slots}/>;
        case 3:
            return <Review submit={setStep} values={[formValues, formValuesEducation]} slots_data={doctor_slots} back_slots={back_slots}/>;


    }
}

export default function HosDocStepper({back_slots}) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [doctor_slots, set_doctor_slots] = React.useState([]);
    const [formValues, setformValues] = React.useState({
        name: "",
        email: "",
        password: "",
        city: "",
        phone: "",
        address: "",
        // clinic: "",
        experience: "",
        fees: "",
        speciality: "",
        qualification: ""
    })

    const [formValuesEducation, setformValuesEducation] = React.useState({
        // clinic: "",
        experience: "",
        fees: "",
        speciality: "",
        qualification: ""
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


    // if (activeStep === 4) {
    //     return (
    //         <Doctor />
    //     )
    // }

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
                    getStepContent(activeStep, setActiveStep, setformValues, formValues, setformValuesEducation, formValuesEducation, doctor_slots, set_doctor_slots,back_slots)
                }



            </div>
        </Fragment>
    );
}
