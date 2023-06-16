import {useContext, useState} from "react";
import Slider_left from "./Slider_left";
import {SelectionContext} from "../../../context/UserSelectionContext";

export default function Tab5() {

    const [sizeSelected, setSizeSelected] = useState(false)

    const [openSidebar1, setOpenSidebar1] = useState(false)
    const [sidebar1Data, setSidebar1Data] = useState(false)
    const [openSidebar2, setOpenSidebar2] = useState(false)

    const {selectionData} = useContext(SelectionContext);

    const [selectedSize, setSelectedSize] = useState(null)


    const handleSizeSelection = (key) => {
        console.log(key)
        setSelectedSize(key)
        setOpenSidebar2(false)
    }
    return (
        <>

            <Slider_left open={openSidebar1} setOpen={setOpenSidebar1}>
                {sidebar1Data && <>
                    <div className="py-4 fw-light text-center h5 tab-heading">{sidebar1Data.title}</div>

                    <div className="tab-column inner">
                        <>
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Select Size</h4>
                                    <button className={"btn btn-outline-dark w-100"}
                                            onClick={() => {
                                                setOpenSidebar2(true)
                                            }}
                                    >Make a selection
                                    </button>
                                </div>
                            </div>
                            <br/>

                            {selectedSize ?
                                selectedSize.attributes.map((item, key) => {
                                    return (
                                        <div className={"card mb-3"} key={key}>
                                            <div
                                                className="card-body d-flex align-items-center justify-content-between">
                                                <span>{item.key}</span>
                                                <div className={"d-flex align-items-center form-group"}>
                                                    <button className={"btn btn-light"}>+</button>
                                                    <input type="text" className={"form-control"} style={{width: 60}}
                                                           value={item.initial}/>
                                                    <button className={"btn btn-light"}>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                sidebar1Data.parameters.map((item, key) => {
                                    return (
                                        <div className={"card mb-3"} key={key}>
                                            <div
                                                className="card-body d-flex align-items-center justify-content-between">
                                                <span>{item}</span>
                                                <div className={"d-flex align-items-center form-group"}>
                                                    <button className={"btn btn-light"}>+</button>
                                                    <input type="text" className={"form-control"} style={{width: 60}}
                                                           value={item.initial}/>
                                                    <button className={"btn btn-light"}>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                        </>
                    </div>
                </>}
            </Slider_left>

            <Slider_left open={openSidebar2} setOpen={setOpenSidebar2}>
                <div className="py-4 fw-light text-center h5 tab-heading">Select Size</div>

                <div className="tab-column inner">
                    <>
                        <table className={"table table-borderless table-sm text-center align-middle"}>

                            <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <p className={"fw-bold m-0"}>Short </p>
                                    <p className={"text-muted m-0 text-small small"}>{sidebar1Data.short}</p>
                                </td>
                                <td>
                                    <p className={"fw-bold m-0"}>Medium</p>
                                    <p className={"text-muted m-0 text-small small"}>{sidebar1Data.regular}</p>

                                </td>
                                <td>
                                    <p className={"fw-bold m-0"}>Large</p>
                                    <p className={"text-muted m-0 text-small small"}>{sidebar1Data.long}</p>
                                </td>
                            </tr>

                            {sidebar1Data && sidebar1Data.sizeList.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{item.key}</td>
                                        <td>{item.short && <button onClick={() => {
                                            handleSizeSelection(item.short)
                                        }}
                                                                   className="btn btn-dark btn-sm px-4">{item.short.number}</button>}</td>
                                        <td>{item.regular && <button onClick={() => {
                                            handleSizeSelection(item.regular)
                                        }}
                                                                     className="btn btn-dark btn-sm px-4">{item.regular.number}</button>}</td>
                                        <td>{item.long && <button onClick={() => {
                                            handleSizeSelection(item.long)
                                        }}
                                                                  className="btn btn-dark btn-sm px-4">{item.long.number}</button>}</td>
                                    </tr>
                                )
                            })}


                            </tbody>
                        </table>
                    </>
                </div>
            </Slider_left>


            <div className={"container-fluid tab"}>
                <div className="py-4 fw-light text-center h5 tab-heading">&nbsp;</div>

                <div className="tab-column">
                    {!sizeSelected &&
                        <div className={"size-not-selected text-center mt-5"}>
                            <img src="https://via.placeholder.com/120" alt="" className={"img-fluid"}/>
                            <div className="py-4 fw-lighter text-center h6">No Size is Selected <br/> Add your size to
                                complete the order!
                            </div>

                            <div className={"text-center"}>
                                <button className={"btn btn-dark px-5"}
                                        onClick={() => {
                                            setSizeSelected(true)
                                        }}
                                >Get Started
                                </button>
                            </div>
                        </div>
                    }

                    {
                        sizeSelected &&
                        <>
                            {selectionData && selectionData.SIZE_CHART.map((item, key) => {
                                return (
                                    <div className="card" key={key}
                                         onClick={() => {
                                             setSidebar1Data(item)
                                             console.log(sidebar1Data)
                                             setOpenSidebar1(true)
                                         }}
                                    >
                                        <div className="card-body">
                                            {item.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </>

                    }

                </div>
            </div>
        </>
    )
}
