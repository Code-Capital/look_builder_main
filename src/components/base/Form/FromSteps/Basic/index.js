import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useContext} from "react";
import * as yup from "yup";
import {FormContext} from "../../../../../pages/LookBuilderForm";

function Basic() {
    const {activeStepIndex, setActiveStepIndex, formData, setFormData} =
        useContext(FormContext);

    const renderError = (message) => (
        <p className="small text-danger">{message}</p>
    );

    const ValidationSchema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string().required(),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: ""
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
                const data = {...formData, ...values};
                setFormData(data);
                setActiveStepIndex(activeStepIndex + 1);
            }}
        >
            <Form className="info-form">
                <div className="builder-title">Wedding Planner</div>
                <div className="step-title">1- Information Form</div>
                <div className="step-sub-title">Quick contact details</div>

                <div className={"fields"}>
                    <div className="input-group">
                        <label className="">Full Name</label>
                        <Field
                            name="name"
                            className="form-control w-100"
                            placeholder="John Doe"
                        />
                        <ErrorMessage name="name" render={renderError}/>
                    </div>

                    <div className="input-group">
                        <label className="">Email Address</label>
                        <Field
                            name="email"
                            className="form-control w-100"
                            placeholder="john.doe@gmail.com"
                        />
                        <ErrorMessage name="email" render={renderError}/>
                    </div>

                    <div className="input-group">
                        <label className="">Phone Number</label>
                        <Field
                            name="phone"
                            className="form-control w-100"
                            placeholder="301 2345678"
                        />
                        <ErrorMessage name="phone" render={renderError}/>
                    </div>


                    <div className="buttons">
                        <button disabled>Go Back</button>
                        <button type="submit">Next Step</button>
                    </div>

                </div>

            </Form>
        </Formik>
    );
}

export default Basic;
