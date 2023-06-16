import {useContext, useState} from "react";
import Slider_left from "../Slider_left";
import {SelectionContext} from "../../../../context/UserSelectionContext";
import Slide_one from "./Slide_one";
import Slider_2 from "./Slider_2";

export default function SizeTab() {

    const [sizeSelected, setSizeSelected] = useState(false)

    const [openSidebar1, setOpenSidebar1] = useState(false)
    const [sidebar1Data, setSidebar1Data] = useState(false)
    const [openSidebar2, setOpenSidebar2] = useState(false)

    const {sizeChart} = useContext(SelectionContext);
    const [selectedSize, setSelectedSize] = useState(null)

    return (
        <>

            <Slide_one openSidebar1={openSidebar1}
                       setOpenSidebar1={setOpenSidebar1}
                       selectedSize={selectedSize}
                       setOpenSidebar2={setOpenSidebar2}
                       sidebar1Data={sidebar1Data}
            />

            <Slider_2 openSidebar2={openSidebar2}
                      setOpenSidebar2={setOpenSidebar2}
                      setSelectedSize={setSelectedSize}
                      sidebar1Data={sidebar1Data}
            />


            <div className={"container-fluid tab"}>
                <div className="py-4 fw-light text-center h5 tab-heading">Select Size</div>

                <div className="tab-column">
                    {!sizeSelected &&
                        <div className={"size-not-selected text-center mt-5"}>
                            <img src="https://via.placeholder.com/120" alt="" className={"img-fluid"}/>
                            <div className="py-4 fw-lighter text-center h6">No Size is Selected <br/> Add your size to
                                complete the order!
                            </div>

                            <div className={"text-center"}>
                                <button className={"btn btn-dark px-5"}
                                        onClick={() => {
                                            setSizeSelected(true)
                                        }}
                                >Get Started
                                </button>
                            </div>
                        </div>
                    }

                    {
                        sizeSelected &&
                        <>
                            {sizeChart && sizeChart.map((item, key) => {
                                return (
                                    <div className="card mb-3" key={key}
                                         onClick={() => {
                                             setSidebar1Data(item)
                                             console.log(sidebar1Data)
                                             setOpenSidebar1(true)
                                         }}
                                    >
                                        <div className="card-body">
                                            {item.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </>

                    }

                </div>
            </div>
        </>
    )
}
