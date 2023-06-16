import {useContext, useState} from "react";
import {SelectionContext} from "../../../../context/UserSelectionContext";
import TrousersTabSlider from "./TrousersTabSlider";

export default function TrousersTab() {

    const [openSidebar, setOpenSidebar] = useState(false)
    const [sidebarData, setSidebarData] = useState(null)
    const {selectionData} = useContext(SelectionContext);
    const trousersData = selectionData.trouser;

    return (
        <>
            <div className={"container-fluid tab"}>
                <div className="py-4 fw-light text-center h5 tab-heading">Customize your Trousers</div>


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


                <TrousersTabSlider
                    sidebarData={sidebarData}
                    setOpenSidebar={setOpenSidebar}
                    openSidebar={openSidebar}
                />
            </div>
        </>
    )
}
