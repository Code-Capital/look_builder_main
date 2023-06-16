import { ErrorMessage, Form, Formik } from "formik";
import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import * as yup from "yup";
import { FormContext } from "../../../../../pages/LookBuilderForm";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.scss"
function Basic() {
    const {
        activeStepIndex,
        setActiveStepIndex,
        formData,
        setFormData,
    } = useContext(FormContext);

    const renderError = (message) => (
        <p className="small text-danger">{message}</p>
    );

    const ValidationSchema = yup.object().shape({});

    const initialValues = {
        date: new Date(),
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
                const data = { ...formData, ...values };
                setFormData(data);
                console.log(data)
                setActiveStepIndex(activeStepIndex + 1);
            }}
        >
            {({ values, setFieldValue }) => (
                <Form className="assign-form">
                    <div className="builder-title">Wedding Planner</div>
                    <div className="step-title">3- Save the date</div>
                    <div className="step-sub-title">Enter date details</div>

                    <div className={"fields"}>
                        <div className="input-group has-date-picker">
                            <DatePicker
                                name="date"
                                selected={values.date}
                                onChange={(date) => setFieldValue("date", date)}
                                inline
                                className={""}
                            />
                            <ErrorMessage name="date" render={renderError} />
                        </div>

                        <div className="buttons">
                            <button type={"button"} onClick={() => {
                                setActiveStepIndex(activeStepIndex - 1)
                                console.log(activeStepIndex)
                            }}>

                                Go Back
                            </button>
                            <button type="submit">Next Step</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default Basic;
