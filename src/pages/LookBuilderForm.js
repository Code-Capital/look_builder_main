import React, {createContext, useState} from "react";
import Stepper from "../components/base/Form/Stepper";
import Step from "../components/base/Form/Step";
import "../components/styles/stepper-form-wrapper-main.scss"


export const FormContext = createContext(undefined);

function LookBuilderForm() {
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const [formData, setFormData] = useState({});

    return (
        <FormContext.Provider
            value={{activeStepIndex, setActiveStepIndex, formData, setFormData}}
        >
            <div className="stepper-form-wrapper-main">
                <Step/>
                <div className="stepper-bottom">
                    <Stepper/>
                </div>
            </div>
        </FormContext.Provider>
    );
}

export default LookBuilderForm;
