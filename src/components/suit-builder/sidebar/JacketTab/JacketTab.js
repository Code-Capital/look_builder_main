import {useContext, useState} from "react";
import {SelectionContext} from "../../../../context/UserSelectionContext";
import JacketTabSlider from "./JacketTabSlider";

export default function JacketTab() {
    const [openSidebar, setOpenSidebar]   = useState(false)
    const [sidebarData, setSidebarData]   = useState(null)
    const {selectionData, selectedFabric} = useContext(SelectionContext);
    const jacketsData = selectionData.jacket;

    return (
        <>
            <div className={"container-fluid tab"}>
                <div className="py-4 fw-light text-center h5 tab-heading">Customize your jacket</div>

                <div className="tab-column">
                    {jacketsData && jacketsData.map((item, key) => {
                        if (item.type !== "base"){
                            return (
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
                        }

                    })}
                </div>

                <JacketTabSlider
                    sidebarData={sidebarData}
                    setOpenSidebar={setOpenSidebar}
                    openSidebar={openSidebar}
                />

            </div>
        </>
    )
}



// import {useContext, useState} from "react";
// import {SelectionContext} from "../../../../context/UserSelectionContext";
// import JacketTabSlider from "./JacketTabSlider";
//
// export default function JacketTab() {
//     const [openSidebar, setOpenSidebar] = useState(false)
//     const [sidebarData, setSidebarData] = useState(null)
//     const {jacketsData} = useContext(SelectionContext);
//
//     return (
//         <>
//             <div className={"container-fluid tab"}>
//                 <div className="py-4 fw-light text-center h5 tab-heading">Customize your jacket</div>
//
//                 <div className="tab-column">
//                     {jacketsData && Object.keys(jacketsData).map((item, key) => {
//                         return (
//                             <div className={`jacket-card`}
//                                  key={key}
//                                  onClick={() => {
//                                      setSidebarData({item: jacketsData[item], key: item})
//                                      setOpenSidebar(true)
//                                  }}
//                             >
//                                 <div className="title">{jacketsData[item].title}</div>
//                                 <div
//                                     className="option">{jacketsData[item].options[jacketsData[item].selectedIndex].title}</div>
//                             </div>
//                         )
//                     })}
//                 </div>
//
//
//                 <JacketTabSlider
//                     sidebarData={sidebarData}
//                     setOpenSidebar={setOpenSidebar}
//                     openSidebar={openSidebar}
//                 />
//
//             </div>
//         </>
//     )
// }
