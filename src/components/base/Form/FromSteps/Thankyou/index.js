import React, {useContext, useEffect, useState} from "react";
import {AiOutlineCheckCircle} from "react-icons/ai";
import "./thankyou.scss"
import {FormContext} from "../../../../../pages/LookBuilderForm";
import {PostData} from "../../../../../api/getData";
import logo from "../../../../../assets/logo.png"
function Basic() {
    const {activeStepIndex, setActiveStepIndex, formData, setFormData} = useContext(FormContext);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        let dataToSend = formData;
        delete dataToSend.rows
        PostData(dataToSend).then(r => {
            if (r.success){
                setTimeout(()=>{
                    setLoading(false)
                }, 2000)
            }
        })

    }, [formData])

    return (
        <div>
            <div className={loading ? "thankyou-page-step loading" : "thankyou-page-step"}>
                {loading ?
                    <div className={"loading"}>
                        <img src={logo} alt="" className={"img-fluid"}/>
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    :

                    <div>
                        <div className="builder-title">Wedding Planner</div>

                        <div className="checkmark">
                            <AiOutlineCheckCircle/>
                        </div>

                        <div className={"success-message"}>
                            <p>WEDDING ORDER SUCCESSFULLY SUBMITTED!</p>
                            <hr/>
                            <p className={"confirmation"}>
                                A confirmation email has been sent to <a href="#">{formData.email}</a>
                            </p>
                        </div>

                        <div className={"home"}>
                            <a href="/" className={"btn btn-lg bg-black text-white rounded-0 text-uppercase"}>
                                Back to home</a>
                        </div>
                        <div className={"terms"}>
                            <span>Click here to see <a href="#">terms of service</a></span>
                        </div>

                        <div className={"change"}>
                            <a href="#" className={"golden"}>Need to make a change?</a>
                            <br/>
                            <a href="#" className={"my-account"}>My Account</a>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
}

export default Basic;
