import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Step1, Step2, Step3 } from "./FromSteps";
import { FormContext } from "../../../pages/LookBuilderForm";
import LookBuilder from "../../../pages/LookBuilder";
import Thankyou from "./FromSteps/Thankyou";
import "./animate.scss";

function Step() {
    const { activeStepIndex } = useContext(FormContext);


    let stepContent;
    switch (activeStepIndex) {
        case 0:
            stepContent = <Step1 />;
            break;
        case 1:
            stepContent = <Step2 />;
            break;
        case 2:
            stepContent = <Step3 />;
            break;
        case 3:
            stepContent = <LookBuilder />;
            break;
        case 4:
            stepContent = <Thankyou />;
            break;
        default:
            break;
    }

    return (
        <TransitionGroup className="steps-wrapper">
            <CSSTransition
                key={activeStepIndex}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                {stepContent}
            </CSSTransition>
        </TransitionGroup>
    );
}

export default Step;
