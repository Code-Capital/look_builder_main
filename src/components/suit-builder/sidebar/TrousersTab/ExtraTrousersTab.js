import {useContext, useState} from "react";
import {SelectionContext} from "../../../../context/UserSelectionContext";
import TrousersTabSlider from "./TrousersTabSlider";

export default function ExtraTrousersTab({extra}) {

    const [openSidebar, setOpenSidebar] = useState(false)
    const [sidebarData, setSidebarData] = useState(null)
    const {setHasExtraTrousers, hasExtraTrousers, selectionData} = useContext(SelectionContext);
    const trousersData = selectionData.trouser;

    return (
        <>
            <div className={"container-fluid tab"}>
                {extra && hasExtraTrousers &&
                    <div className="py-4 fw-light text-center h5 tab-heading">Customize your extra Trousers</div>}
                {extra && !hasExtraTrousers &&
                    <div className="py-4 fw-light text-center h5 tab-heading">Add Extra Trousers?</div>}


                {/*Handle extra trousers*/}
                {!hasExtraTrousers &&
                    <>
                        <div className={`add-item-card`}>
                            <img src="https://via.placeholder.com/130" alt="" className={"img-fluid"}/>
                            <div className="title">No, Thanks!</div>
                        </div>

                        <div className={`add-item-card`}
                             onClick={() => {
                                 setHasExtraTrousers(true)
                             }}>
                            <img src="https://via.placeholder.com/130" alt="" className={"img-fluid"}/>
                            <div className="title">Yes Sure!</div>
                            <div className="option">+ $500</div>
                        </div>
                    </>
                }
                {extra && hasExtraTrousers &&
                    <div className="tab-column">

                        {trousersData && trousersData.map((item, key) => {
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


                <TrousersTabSlider
                    sidebarData={sidebarData}
                    setOpenSidebar={setOpenSidebar}
                    openSidebar={openSidebar}
                />
            </div>
        </>
    )
}
