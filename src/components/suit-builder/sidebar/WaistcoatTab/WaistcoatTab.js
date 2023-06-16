import {useContext, useState} from "react";
import {SelectionContext} from "../../../../context/UserSelectionContext";
import WaistcoatTabSlider from "./WaistcoatTabSlider";

export default function WaistcoatTab({extra}) {

    const [openSidebar, setOpenSidebar] = useState(false)
    const [sidebarData, setSidebarData] = useState(null)
    const {selectionData, setHasWaistCoat, hasWaistCoat} = useContext(SelectionContext);
    const waistcoatData = selectionData.waistcoat;

    return (
        <>
            <div className={"container-fluid tab"}>

                {extra && hasWaistCoat &&
                    <div className="py-4 fw-light text-center h5 tab-heading">Customize your Waistcoat</div>}
                {extra && !hasWaistCoat &&
                    <div className="py-4 fw-light text-center h5 tab-heading">Add a Waistcoat?</div>}


                {!extra &&
                    <div className="tab-column">
                        {waistcoatData && waistcoatData.map((item, key) => {
                            if (item.type !== "base") return (
                                <div className={`jacket-card`}
                                     key={key}
                                     onClick={() => {
                                         setSidebarData(item)
                                         setOpenSidebar(true)
                                     }}
                                >
                                    <div className="title">{item.type.replace("_", " ")}</div>
                                    <div className="option">{item.options[0].title}</div>

                                </div>
                            )
                        })}
                    </div>
                }


                {/*Handle extra trousers*/}
                {!hasWaistCoat &&
                    <>
                        <div className={`add-item-card`}>
                            <img src="https://via.placeholder.com/130" alt="" className={"img-fluid"}/>
                            <div className="title">No, Thanks!</div>
                        </div>

                        <div className={`add-item-card`}
                             onClick={() => {
                                 setHasWaistCoat(true)
                             }}>
                            <img src="https://via.placeholder.com/130" alt="" className={"img-fluid"}/>
                            <div className="title">Yes Sure!</div>
                            <div className="option">+ $500</div>
                        </div>
                    </>
                }

                {extra && hasWaistCoat &&
                    <div className="tab-column">

                        {waistcoatData && waistcoatData.map((item, key) => {
                            if (item.type !== "base") return (
                                <div className={`jacket-card`}
                                     key={key}
                                     onClick={() => {
                                         setSidebarData(item)
                                         setOpenSidebar(true)
                                     }}
                                >
                                    <div className="title">{item.type.replace("_", " ")}</div>
                                    <div className="option">{item.options[0].title}</div>

                                </div>
                            )
                        })}
                    </div>
                }


                <WaistcoatTabSlider
                    sidebarData={sidebarData}
                    setOpenSidebar={setOpenSidebar}
                    openSidebar={openSidebar}
                />
            </div>
        </>
    )
}
