import {useContext} from "react";
import {SelectionContext} from "../../../context/UserSelectionContext";
import LinkBuilder from "../../../utils/LinkBuilder";
import configg from "../../../config";

export default function WaistcoatPreview() {
    const {selectedFabric, waistcoatData, selectionData, hasWaistCoat} = useContext(SelectionContext);

    function Work(option) {

        let selectedObject = selectionData.waistcoat.find(obj => obj.type === option)
        let fabricIdMatch = selectedObject.options.filter(option => option.fabric_id === selectedFabric.id)[0];
        let returnData;

        if (waistcoatData[option]) {
            returnData = waistcoatData[option]
        } else {
            returnData = fabricIdMatch
        }

        if (fabricIdMatch?.preview_image) {
            return configg.img + returnData.preview_image
        } else {
            return ""
        }

    }


    if (selectedFabric && selectionData) {

        return (
            <div className={"viewer jacket-viewer"} id={"waist-coat-view"}>
                <div className={`holder ${!hasWaistCoat ? "overlay" : ""}`}>
                    <img className={"img-fluid"} src={Work("base")}/>

                </div>
            </div>
        )
    }

}
