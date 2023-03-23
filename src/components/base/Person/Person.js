import "./person.scss"
export default function Person({pants, shirt, jacket, shoes, model}){
    return(
        <>
            <div className="person-wrapper position-relative">
                <div className="person-inner">
                    {shirt &&  <div className="shirt"><img src={shirt.image} alt="" className={"img-fluid"}/></div>}

                    {pants && <div className="pants"><img src={pants.image} alt="" className={"img-fluid"}/></div>}
                    {jacket && <div className="jacket"><img src={jacket.image} alt="" className={"img-fluid"}/></div>}
                    {model && <div className="model"><img src={model.image} alt="" className={"img-fluid"}/></div>}
                    {shoes && <div className="shoes"><img src={shoes.image} alt="" className={"img-fluid"}/></div>}

                </div>
            </div>
        </>
    )
}
