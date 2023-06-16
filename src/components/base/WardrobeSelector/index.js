import {createRef, useEffect, useState} from "react";
import "./wardrobeSelector.scss";
import SelectorCard from "./Card";
import {getFileURL} from "../../../api/getData";


export default function WardrobeSelector({data, update, handleNextStep}) {
    const [currentPage, setCurrentPage] = useState(null);
    const [currentItem, setCurrentItem] = useState(null)
    const CARD_ANIMATION_DELAY = 50; // in milliseconds


    function goToRoot() {
        setCurrentPage(null);
    }
    function openPage(item) {
        setCurrentPage(item);
    }
    useEffect(()=>{
        setCurrentItem(null)
    }, [currentPage])

    function selectItem(item, category) {
        update(item, category)
        setCurrentItem(item)
    }

    return (
        <>
            <div className={"wardrobe_wrapper"}>

                {!currentPage && <>
                    <div className={"next-btn-wrapper"}>
                        <button className={"next-button"}
                                onClick={()=>{handleNextStep()}}
                        >Next</button>
                    </div>
                </>}

                {!currentPage &&
                    <div className="wardrobe_openers">
                        {data.map((item, key) => {
                            const animationDelay = CARD_ANIMATION_DELAY * key;
                            return (
                                <SelectorCard
                                    key={key}
                                    img={item.image}
                                    text={item.title}
                                    action={() => {
                                        openPage(item);
                                    }}
                                    active={false}
                                    animationDelay={animationDelay}
                                />
                            )
                        })}
                    </div>
                }


                {currentPage &&
                    <div className={"wardrobe_tabs"}>
                        <div className={`wardrobe-tab`}>
                            <div className="header text-center">
                                <span>{currentPage.title}</span>
                            </div>

                            <div className="items">
                                {!currentPage.required &&
                                    <button className={"btn btn-outline-light rounded-0 w-100 btn-sm mb-3"}
                                            onClick={() => {
                                                selectItem(null, currentPage.title)
                                            }}>X</button>
                                }
                                {currentPage.products.map((item, key) => {
                                    const animationDelay = CARD_ANIMATION_DELAY * key;

                                    return (
                                        <SelectorCard
                                            img={item.thumb ? item.thumb : item.image}
                                            key={key}
                                            active={JSON.stringify(item) === JSON.stringify(currentItem)}
                                            text={item.title +" - "+ (item.symbol ? item.symbol : "") + (item.price ? item.price : "")}
                                            action={() => {
                                                selectItem(item, currentPage.title)
                                            }}
                                            animationDelay={animationDelay}
                                        />
                                    )
                                })}


                            </div>

                            <div className="footer">
                                <div className="mobile-info">
                                    {currentItem  ? <>
                                        <span>{currentItem?.symbol} {currentItem?.price}</span>
                                        &nbsp; -  &nbsp;
                                        <span>{currentItem?.title}</span>
                                    </> : <span>Make a selection</span>}

                                </div>
                                <button className={"btn btn-light rounded-pill w-100"} onClick={goToRoot}>✓</button>
                            </div>
                        </div>
                    </div>
                }

            </div>

        </>
    )
}
