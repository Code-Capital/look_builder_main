import {useContext, useState} from "react";
import {SelectionContext} from "../../../../context/UserSelectionContext";

export default function SummaryTab() {

    const {trousersData, jacketsData, waistcoatData, sizeChart} = useContext(SelectionContext);

    return (
        <>
            <div className={"container-fluid tab"}>
                <div className="py-4 fw-light text-center h5 tab-heading">Summary</div>


                <div className="tab-column">
                    <h6>Jacket</h6>
                    {jacketsData && Object.keys(jacketsData).map((item, key) => {
                        return (
                            <div className={`jacket-card`}
                                 key={key}
                            >
                                <div className="title">{item.replace("_", " ")}</div>
                                <div className="option">{jacketsData[item].title}</div>
                            </div>
                        )
                    })}

                    <br/>


                    <h6>Trousers</h6>
                    {trousersData && Object.keys(trousersData).map((item, key) => {
                        return (
                            <div className={`jacket-card`}
                                 key={key}
                            >
                                <div className="title">{item.replace("_", " ")}</div>
                                <div className="option">{trousersData[item].title}</div>
                            </div>
                        )
                    })}

                    <br/>

                    <h6>Waistcoat</h6>
                    {waistcoatData && Object.keys(waistcoatData).map((item, key) => {
                        return (
                            <div className={`jacket-card`}
                                 key={key}
                            >
                                <div className="title">{item.replace("_", " ")}</div>
                                <div className="option">{waistcoatData[item].title}</div>
                            </div>
                        )
                    })}

                    <br/>
                    <br/>
                </div>

            </div>
        </>
    )
}
