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
        gmen_name: yup.array().of(yup.string()),
        gmen_email: yup.array().of(yup.string().email("Invalid email")),
    });


    function addNewRow(values, setFieldValue) {
        const newRow = (
            <div className="row">
                <div className="col-2">
                    <label htmlFor="">&nbsp;</label>
                    <div className="count-block">
                        {values.rows.length + 1}
                    </div>
                </div>
                <div className="col-5">
                    <div className="input-group">
                        <label className="">Full Name</label>
                        <Field
                            name={`gmen_name[${values.rows.length}]`}
                            className="form-control w-100"
                            placeholder="John Doe"
                        />
                        <ErrorMessage name={`gmen_name[${values.rows.length}]`} render={renderError}/>
                    </div>
                </div>
                <div className="col-5">
                    <div className="input-group">
                        <label className="">Email Address</label>
                        <Field
                            name={`gmen_email[${values.rows.length}]`}
                            className="form-control w-100"
                            placeholder="JohnDoe@gmail.com"
                        />
                        <ErrorMessage name={`gmen_email[${values.rows.length}]`} render={renderError}/>
                    </div>
                </div>
            </div>
        );
        setFieldValue("gmen_name", [...values.gmen_name, ""]);
        setFieldValue("gmen_email", [...values.gmen_email, ""]);
        setFieldValue("rows", [...values.rows, newRow]);
    }


    return (
        <Formik
            initialValues={{
                gmen_name: ["", ""],
                gmen_email: ["", ""],
                rows: [
                    // Existing rows go here
                    <div className="row">
                        <div className="col-2">
                            <label htmlFor="">&nbsp;</label>
                            <div className="count-block">
                                1
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <label className="">Full Name</label>
                                <Field
                                    name={`gmen_name[0]`}
                                    className="form-control w-100"
                                    placeholder="John Doe"
                                />
                                <ErrorMessage name={`gmen_name[0]`} render={renderError}/>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <label className="">Email Address</label>
                                <Field
                                    name={`gmen_email[0]`}
                                    className="form-control w-100"
                                    placeholder="JohnDoe@gmail.com"
                                />
                                <ErrorMessage name={`gmen_email[0]`} render={renderError}/>
                            </div>
                        </div>
                    </div>,
                    <div className="row">
                        <div className="col-2">
                            <label htmlFor="">&nbsp;</label>
                            <div className="count-block">2</div>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <label className="">Full Name</label>
                                <Field
                                    name={`gmen_name[1]`}
                                    className="form-control w-100"
                                    placeholder="John Doe"
                                />
                                <ErrorMessage name={`gmen_name[1]`} render={renderError}/>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <label className="">Email Address</label>
                                <Field
                                    name={`gmen_email[1]`}
                                    className="form-control w-100"
                                    placeholder="JohnDoe@gmail.com"
                                />
                                <ErrorMessage name={`gmen_email[1]`} render={renderError}/>
                            </div>
                        </div>
                    </div>,
                ],
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => {
                const data = {...formData, ...values};
                setFormData(data);
                setActiveStepIndex(activeStepIndex + 1);
            }}
        >
            {({values, setFieldValue}) => (
                <Form className="assign-form">
                    <div className="builder-title">Wedding Planner</div>
                    <div className="step-title">2- Assign Suits</div>
                    <div className="step-sub-title">
                        Simply enter the names and gmen_email addresses of the groomsmen as we
                        will send details right away and handle everything else from here.
                    </div>
                    <div className={"fields"}>
                        {values.rows}

                        {/*add row button*/}
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="">&nbsp;</label>
                                <div
                                    className="count-block bg-white border border-dark text-dark"
                                    style={{cursor: "pointer"}}
                                    onClick={() => {
                                        addNewRow(values, setFieldValue)
                                    }}
                                >
                                    +
                                </div>
                            </div>
                        </div>

                        <div className="buttons">
                            <button type={"button"} onClick={()=>{setActiveStepIndex(activeStepIndex - 1)}}>Go Back</button>
                            <button type="submit">Next Step</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>

    );
}

export default Basic;

