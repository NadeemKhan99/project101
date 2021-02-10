import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Appp() {
    const initialValues = {
        numberOfTickets: '',
        tickets: []
    };

    // const validationSchema = Yup.object().shape({
    //     numberOfTickets: Yup.string()
    //         .required('Number of tickets is required'),
    //     tickets: Yup.array().of(
    //         Yup.object().shape({
    //             name: Yup.string()
    //                 .required('Name is required'),
    //             email: Yup.string()
    //                 .email('Email is invalid')
    //                 .required('Email is required')
    //         })
    //     )
    // });

    function onChangeTickets(e, field, values, setValues) {
        // update dynamic form
        const tickets = [...values.tickets];
        const numberOfTickets = e.target.value;
        if (e.target.value !== 0) {
            const previousNumber = parseInt(field.value);
            if (previousNumber < numberOfTickets) {
                for (let i = previousNumber; i < numberOfTickets; i++) {
                    tickets.push({ name: '', email: '' });
                }
            } else {
                for (let i = previousNumber; i >= numberOfTickets; i--) {
                    tickets.splice(i, 1);
                }
            }
        }

        setValues({ ...values, tickets });

        // call formik onChange method
        field.onChange(e);
    }

    function onSubmit(fields) {
        // display form field values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
    }

    return (
        <Formik initialValues={initialValues}  onSubmit={onSubmit}>
            {({ errors, values, touched, setValues }) => (
                <Form>
                    <div className="card m-3">
                        <h5 className="card-header">React + Formik Dynamic Form Example</h5>
                        <div className="card-body border-bottom">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Monday</label>
                                    <Field name="numberOfTickets">
                                        {({ field }) => (
                                            <select  required {...field} className={'form-control' + (errors.numberOfTickets && touched.numberOfTickets ? ' is-invalid' : '')} onChange={e => onChangeTickets(e, field, values, setValues)}>
                                                <option value={0}></option>
                                                {[0, 1, 2, 3].map(i =>
                                                    <option key={i} value={i}>{i}</option>
                                                )}
                                            </select>
                                        )}
                                    </Field>
                                    <ErrorMessage name="numberOfTickets" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                        </div>
                        <FieldArray name="tickets">
                            {() => (values.tickets.map((ticket, i) => {
                                // const ticketErrors = errors.tickets?.length && errors.tickets[i] || {};
                                // const ticketTouched = touched.tickets?.length && touched.tickets[i] || {};
                                return (
                                    <div key={i} className="list-group list-group-flush">
                                        <div className="list-group-item">
                                            <h5 className="card-title">Shift {i + 1}</h5>
                                            <div className="form-row">
                                                <div className="form-group col-6">
                                                    <label>Start</label>
                                                    <Field name={`tickets.${i}.name`} type="time" required className='form-control' />

                                                </div>
                                                <div className="form-group col-6">
                                                    <label>End</label>
                                                    <Field name={`tickets.${i}.email`} type="time" required className='form-control' />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }))}
                        </FieldArray>
                        <div className="card-footer text-center border-top-0">
                            <button type="submit" className="btn btn-primary mr-1">
                                Submit
                            </button>
                            <button className="btn btn-secondary mr-1" type="reset">Reset</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Appp;