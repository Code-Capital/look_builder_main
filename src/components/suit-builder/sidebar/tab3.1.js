import {useContext, useState} from "react";
import {SelectionContext} from "../../../context/UserSelectionContext";
import Slider_left from "./Slider_left";

export default function Tab4() {
    const [selected, setSelected] = useState(0)
    const [active, setActive] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const [sidebarData, setSidebarData] = useState(null)
    const {selectionData} = useContext(SelectionContext);

    return (
        <>
            <div className={"container-fluid tab"}>

                <div className={"container-fluid tab"}>
                    {!active && <div className="py-4 fw-light text-center h5 tab-heading">Add Extra Trousers</div>}
                    {active &&
                        <div className="py-4 fw-light text-center h5 tab-heading">Customize your extra Trousers</div>}

                    <div className="tab-column">
                        {!active &&
                            <>
                                <div className={`add-item-card`}>
                                    <img src="https://via.placeholder.com/130" alt="" className={"img-fluid"}/>
                                    <div className="title">No, Thanks!</div>
                                </div>

                                <div className={`add-item-card`}
                                     onClick={() => {
                                         setActive(true)
                                     }}>
                                    <img src="https://via.placeholder.com/130" alt="" className={"img-fluid"}/>
                                    <div className="title">Yes Sure!</div>
                                    <div className="option">+ $500</div>
                                </div>
                            </>
                        }

                        {active &&
                            <>
                                {selectionData && selectionData.TROUSERS.map((item, key) => {
                                    return (
                                        <div className={`jacket-card ${selected === key ? "selected" : null}`}
                                             key={key}
                                             onClick={() => {
                                                 setSelected(key)
                                                 setSidebarData(item)
                                                 setOpenSidebar(true)
                                             }}
                                        >
                                            <div className="title">{item.title}</div>
                                            <div className="option">{item.options[0].title}</div>
                                        </div>
                                    )
                                })}
                            </>

                        }

                    </div>


                    <Slider_left open={openSidebar} setOpen={setOpenSidebar}>
                        <div className="py-4 fw-light text-center h5 tab-heading">{sidebarData?.title}</div>

                        <div className="tab-column inner">
                            {sidebarData && sidebarData.options.map((item, key) => {
                                return (
                                    <div
                                        className={`text-center inner-selection ${selected === key ? "selected" : null}`}
                                        key={key}>
                                        <img src={item.thumb} alt=""/>
                                        <div className="title">{item.title}</div>
                                        <div className="option">{item.desc}</div>

                                    </div>
                                )
                            })}
                        </div>

                    </Slider_left>
                </div>

            </div>
        </>
    )
}
