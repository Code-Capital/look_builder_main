import {useContext} from "react";
import {SelectionContext} from "../../../context/UserSelectionContext";
import LinkBuilder from "../../../utils/LinkBuilder";
import configg from "../../../config";

export default function TrousersPreview(extra) {
    const {selectedFabric, trousersData, selectionData, hasExtraTrousers} = useContext(SelectionContext);

    function Work(option) {

        let selectedObject = selectionData.trouser.find(obj => obj.type === option)
        let fabricIdMatch = selectedObject.options.filter(option => option.fabric_id === selectedFabric.id)[0];
        let returnData;

        if (trousersData[option]) {
            returnData = trousersData[option]
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
            <div className={"viewer jacket-viewer "} id={"waist-coat-view"}>
                <div className={`holder ${!hasExtraTrousers ? "overlay" : ""}`}>
                    <img className={"img-fluid"} src={Work("base")}/>
                    <img className={"img-fluid"} src={Work("waistband")}/>
                    <img className={"img-fluid"} src={Work("waistband_details")}/>
                </div>
            </div>
        )
    }
}
