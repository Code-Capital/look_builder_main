import "./person.scss"
import {getFileURL} from "../../../api/getData";
export default function Person({pants, shirt, jacket, shoes, model}){
    return(
        <>
            <div className="person-wrapper position-relative">
                <div className="person-inner">
                    {shirt &&  <div className="shirt"><img src={getFileURL(shirt.image)} alt="" className={"img-fluid"}/></div>}
                    {pants && <div className="pants"><img src={getFileURL(pants.image)} alt="" className={"img-fluid"}/></div>}
                    {jacket && <div className="jacket"><img src={getFileURL(jacket.image)} alt="" className={"img-fluid"}/></div>}
                    {model && <div className="model"><img src={getFileURL(model.image)} alt="" className={"img-fluid"}/></div>}
                    {shoes && <div className="shoes"><img src={getFileURL(shoes.image)} alt="" className={"img-fluid"}/></div>}

                </div>
            </div>
        </>
    )
}
