import 'animate.css';
import {useEffect, useState} from "react";
import {getFileURL} from "../../../api/getData";

export default function SelectorCard({img, text, action, active, animationDelay}) {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimated(true);
        }, animationDelay);
    }, [animationDelay]);

    const animationClass = animated ? "animate__animated animate__fadeInRight" : "";

    if (animated) {

        return (
            <div className={"card mb-4 selector-card " + (active ? " active " : "") + animationClass}
                 onClick={action}>
                <div className="card-body">
                    <img src={img ? getFileURL(img) : "https://via.placeholder.com/200"} alt=""
                         className={"img-fluid"}/>
                </div>
                <div className="card-footer">
                    {text}
                </div>
            </div>
        )
    }
}
