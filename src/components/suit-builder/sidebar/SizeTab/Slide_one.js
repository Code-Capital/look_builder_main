import Slider_left from "../Slider_left";
import SizeInputFieldWithButtons from "./SizeInputFieldWithButtons";

export default function Slide_one({openSidebar1, setOpenSidebar1, sidebar1Data, setOpenSidebar2, selectedSize}) {

    return (
        <Slider_left open={openSidebar1} setOpen={setOpenSidebar1}>
            {sidebar1Data && <>
                <div className="py-4 fw-light text-center h5 tab-heading">{sidebar1Data.title}</div>

                <div className="tab-column inner">
                    <>
                        <div className="card">
                            <div className="card-body text-center">
                                <h4>Select Size</h4>
                                <button className={"btn btn-outline-dark w-100"}
                                        onClick={() => {
                                            setOpenSidebar2(true)
                                        }}
                                >Make a selection
                                </button>
                            </div>
                        </div>
                        <br/>

                        { selectedSize ?
                            selectedSize.attributes.map((item, key) => {
                                return (
                                    <div className={"card mb-3"} key={key}>
                                        <div
                                            className="card-body d-flex align-items-center justify-content-between">
                                            <span>{item.key}</span>
                                            <SizeInputFieldWithButtons item={item}/>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            sidebar1Data.parameters.map((item, key) => {
                                return (
                                    <div className={"card mb-3"} key={key}>
                                        <div
                                            className="card-body d-flex align-items-center justify-content-between">
                                            <span>{item}</span>
                                            {/*<SizeInputFieldWithButtons item={item}/>*/}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </>
                </div>
            </>}
        </Slider_left>
    )
}
