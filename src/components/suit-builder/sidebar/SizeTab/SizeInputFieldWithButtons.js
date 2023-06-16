import {useState} from "react";

export default function SizeInputFieldWithButtons({item}) {
    const [value, setValue] = useState(parseInt(item.initial));

    const min = item.min;
    const max = item.max;
    const step = item.step;

    const handleIncrement = () => {
        if (value + step <= max) {
            setValue(value + step);
        }
    };

    const handleDecrement = () => {
        if (value - step >= min) {
            setValue(value - step);
        }
    };

    return (
        <div className={"d-flex align-items-center form-group"}>

            <button className={"btn btn-light"} onClick={handleDecrement}>-</button>

            <input type="text" className={"form-control"} style={{width: 60}}
                   value={value}/>

            <button className={"btn btn-light"} onClick={handleIncrement}>+</button>
        </div>
    )
}
