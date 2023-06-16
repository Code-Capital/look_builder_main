import React, {useContext, useEffect} from "react";
import {FormContext} from "../../../pages/LookBuilderForm";
import './stepper.scss'
import {AiOutlineCheckCircle} from 'react-icons/ai';

function Stepper() {
    const {activeStepIndex} = useContext(FormContext);

    const getClassName = (stepIndex) => {
        if (stepIndex < activeStepIndex) {
            return "done";
        } else if (stepIndex === activeStepIndex) {
            return "active";
        } else {
            return "";
        }
    }

    useEffect(() => {
        const stepperItems = document.querySelectorAll(".stepper-item");
        stepperItems.forEach((step, i) => {
            step.classList = "stepper-item " + getClassName(i);
        });
    }, [activeStepIndex]);


    return (
        <div className="stepper-wrapper">
            <div className="stepper-item">
                <div>
                    <span>1. Information Form</span>
                    <AiOutlineCheckCircle/>
                </div>
            </div>
            <div className="stepper-item">
                <div>
                    <span>2. Assign Suits</span>
                    <AiOutlineCheckCircle/>
                </div>
            </div>
            <div className="stepper-item">
                <div>
                    <span>3. Save the date</span>
                    <AiOutlineCheckCircle/>
                </div>
            </div>
            <div className="stepper-item">
                <div>
                    <span>4. Look Builder</span>
                    <AiOutlineCheckCircle/>
                </div>
            </div>
        </div>
    );
}

export default Stepper;
