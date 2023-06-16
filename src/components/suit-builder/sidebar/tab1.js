import {useContext, useState} from "react";
import {SelectionContext} from "../../../context/UserSelectionContext";
import configg from "../../../config";

export default function Tab1() {
    const [selected, setSelected] = useState(0)
    const {selectionData, setSelectedFabric} = useContext(SelectionContext);

    return (
        <>
            <div className={"container-fluid fabric-tab tab"}>
                <div className="py-4 fw-light text-center h5 tab-heading">Select Your Fabric</div>
                <div className="fabrics-selector tab-column">
                    {selectionData && selectionData.fabrics.map((item, key) => {
                        return (
                            <div className={`fabric-card ${selected === key ? "selected" : null}`}
                                 key={key}
                                 onClick={() => {
                                     setSelected(key)
                                     setSelectedFabric(item)
                                 }}
                            >
                                <div className="fabric-image mb-1">
                                    <img src={configg.img+item.cover_image} alt=""/>
                                </div>
                                <div className="details d-flex align-items-center justify-content-between">
                                    <span className={"fw-lighter"}>{item.title}</span>
                                    <span className={"fw-lighter"}>{item.currency} {item.price} </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
