import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Navbar from './../../navbar'
import DocSlotsAlready from './add_doctor_slots'
import ReviewAlready from './add_doctor_review'
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
    return ['Change Slots', 'Review'];
}

function getStepContent(stepIndex, setStep,set_slots_timing,slots_timing,back_slots,doctor_id) {
    switch (stepIndex) {
        case 0:
            return <DocSlotsAlready submit={setStep} set_data = {set_slots_timing} back_slotss = {back_slots}/>;
        case 1:
            return <ReviewAlready submit={setStep} slots_data = {slots_timing} back_to_search = {back_slots} doctor_id = {doctor_id}/>;


    }
}

export default function DoctorExistStepper({back_slots,doctor_id}) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    let [slots_timing,set_slots_timing] = useState([])


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
                    getStepContent(activeStep, setActiveStep, set_slots_timing, slots_timing,back_slots,doctor_id)
                }



            </div>
        </Fragment>
    );
}
