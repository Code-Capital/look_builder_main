import {useContext} from "react";
import {SelectionContext} from "../../../context/UserSelectionContext";
import LinkBuilder from "../../../utils/LinkBuilder";
import configg from "../../../config";

export default function JacketPreview() {
    const {selectedFabric, jacketsData, selectionData} = useContext(SelectionContext);

    function Work(option) {

        let selectedObject = selectionData.jacket.find(obj => obj.type === option)
        let fabricIdMatch = selectedObject.options.filter(option => option.fabric_id === selectedFabric.id)[0];
        let returnData;

        if (jacketsData[option]) {
            returnData = jacketsData[option]
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
                <div className={`holder`}>
                    <img className={"img-fluid"} src={Work("base")}/>
                    <img className={"img-fluid"} src={Work("buttons")}/>
                    <img className={"img-fluid"} src={Work("chest_pocket")}/>
                    <img className={"img-fluid"} src={Work("side_pocket")}/>
                    <img className={"img-fluid"} src={Work("lapel")}/>
                </div>
            </div>
        )
    }

    // return (
    //     <div className={"viewer jacket-viewer"} id={"jacket-view"}>
    //
    //         <div className="holder">
    //             <img src={LinkBuilder(selectedFabric, "jacket", "0.jpeg")} className={"img-fluid"}/>
    //             <img src={LinkBuilder(selectedFabric, "jacket", "1.avif")} className={"img-fluid"}/>
    //             <img src={LinkBuilder(selectedFabric, "jacket", "5.avif")} className={"img-fluid"}/>
    //             <img src={LinkBuilder(selectedFabric, "jacket", jacketsData.closure)} className={"img-fluid"}/>
    //             <img src={LinkBuilder(selectedFabric, "jacket", jacketsData.pocket)} className={"img-fluid"}/>
    //         </div>
    //
    //     </div>
    // )
}
