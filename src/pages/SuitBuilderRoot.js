import '../components/styles/suit-builder.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sidebar from "../components/suit-builder/sidebar";
import {AppContext} from "../context/SuitBuilderContext";
import {useContext, useEffect, useRef} from "react";
import JacketPreview from "../components/suit-builder/previews/JacketPreview";
import TrousersPreview from "../components/suit-builder/previews/TrousersPreview";
import WaistcoatPreview from "../components/suit-builder/previews/WaistcoatPreview";
import {SelectionContext} from "../context/UserSelectionContext";
import ExtraTrousersPreview from "../components/suit-builder/previews/ExtraTrousersPreview";


export default function SuitBuilderRoot() {
    const {currentSlide, setCurrentTab} = useContext(AppContext);
    const sliderRef = useRef(null);
    const {hasExtraTrousers} = useContext(SelectionContext);


    useEffect(() => {
        if (sliderRef.current) {
            if (currentSlide === 1 || currentSlide === 0) {
                sliderRef.current.slickGoTo(0);
            } else {
                sliderRef.current.slickGoTo(currentSlide - 1);
            }
        }
    }, [currentSlide]);


    return (
        <>
            <div className="container-fluid suit_builder_container">
                <div className="main-area">

                    <div className="suit-builder-view">
                        <Slider
                            dots={false}
                            arrows={true}
                            ref={sliderRef}
                            infinite={false}
                            speed={500}
                            slidesToShow={1}
                            slidesToScroll={1}
                        >

                            <JacketPreview/>
                            <TrousersPreview/>
                            <ExtraTrousersPreview/>
                            <WaistcoatPreview extra/>

                        </Slider>
                    </div>

                </div>


                <div className="sidebar-area">
                    <Sidebar/>
                    <div className={'sidebar-footer'}>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <span className={"fw-lighter"}>Delivery 3-4 weeks</span>
                                    <h5 className={"fw-lghter"}>$ 999</h5>
                                </div>

                                <div className="col-8">
                                    <button className={"btn btn-light"}
                                            onClick={() => {setCurrentTab(currentSlide - 1)}}
                                    >Prev</button>
                                    <button className={"btn btn-dark"}
                                            onClick={() => {setCurrentTab(currentSlide + 1)}}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
