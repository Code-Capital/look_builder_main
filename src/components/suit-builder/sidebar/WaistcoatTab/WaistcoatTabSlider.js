import Slider_left from "../Slider_left";
import {useContext, useEffect} from "react";
import {SelectionContext} from "../../../../context/UserSelectionContext";
import configg from "../../../../config";

export default function WaistcoatTabSlider({openSidebar, setOpenSidebar, sidebarData}) {
    const {setWaistcoatData, selectedFabric} = useContext(SelectionContext);

    function updateSelectedIndex(OBJ, type) {
        setWaistcoatData((prevJacketsData) => {
            const newData = {...prevJacketsData};
            newData[type] = OBJ
            return newData
        });
    }


    return (
        <Slider_left open={openSidebar} setOpen={setOpenSidebar}>
            <div
                className="py-4 fw-light text-center h5 tab-heading">{sidebarData?.type.replace("_", " ").toUpperCase()}</div>
            <div className="tab-column inner">
                {sidebarData && sidebarData.options.map((item, key) => {
                    if (item.fabric_id === selectedFabric.id) {
                        return (
                            <div className={`text-center inner-selection ${"" === key ? "selected" : null}`}
                                 onClick={() => {
                                     updateSelectedIndex(item, sidebarData.type)
                                 }} key={key}
                            >
                                <img src={configg.img + item.cover_image}
                                     alt=""/>
                                <div className="title">{item.title}</div>
                                <div className="option">{item.desc}</div>
                            </div>
                        )
                    }

                })}
            </div>

        </Slider_left>
    )
}
