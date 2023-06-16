import React, {createContext, useEffect, useState} from 'react';
import configg from "../config";

const SelectionContext = createContext({});

const SelectionProvider = ({children}) => {
    const fabrics = [
        {
            id: "fab1",
            img: "https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_lfill,f_auto,h_300,q_auto:good,w_600/suitconfig/S711302-3/thumbnail/thumb",
            title: "Premium Fabric 1",
            price: 1000,
            currency: "$"
        },
        {
            id: "fab2",
            img: "https://cdn.suitsupply.com/image/upload/b_rgb:efefef,c_lfill,f_auto,h_300,q_auto:good,w_600/suitconfig/SPARK.PDSS-NAVY/thumbnail/thumb",
            title: "Premium Fabric 2",
            price: 1000,
            currency: "$"
        }
    ]
    const jacket = {
        closure: {
            title: "Collar",
            hasPreview: true,
            selectedIndex: 0,
            options: [
                {
                    title: "Collar 1",
                    thumb: "https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_600,q_auto:good,w_600/custommade/thumbs2/model/MBN1",
                    desc: "lorem lorem lorem lorem lorem",
                    variation: "collar1.avif",
                },
                {
                    title: "Collar 2",
                    thumb: "https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_600,q_auto:good,w_600/custommade/thumbs2/model/MBN2",
                    desc: "lorem lorem lorem lorem lorem",
                    variation: "collar2.avif"
                }
            ]
        },
        pocket: {
            title: "Pocket",
            hasPreview: true,
            selectedIndex: 0,
            options: [
                {
                    title: "Pocket 1",
                    thumb: "https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_600,q_auto:good,w_600/custommade/thumbs2/model/MBN1",
                    desc: "lorem lorem lorem lorem lorem",
                    variation: "pocket1.avif",
                },
                {
                    title: "Pocket 2",
                    thumb: "https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_600,q_auto:good,w_600/custommade/thumbs2/model/MBN2",
                    desc: "lorem lorem lorem lorem lorem",
                    variation: "pocket2.avif"
                }
            ]
        }
    }
    const trousers = {
        belt: {
            title: "Belt",
            hasPreview: true,
            selectedIndex: 0,
            options: [
                {
                    title: "Belt Hook",
                    thumb: "https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_600,q_auto:good,w_600/custommade/thumbs2/model/MBN1",
                    desc: "lorem lorem lorem lorem lorem",
                    variation: "p3.png",
                },
                {
                    title: "Double Belt Hook",
                    thumb: "https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_600,q_auto:good,w_600/custommade/thumbs2/model/MBN2",
                    desc: "lorem lorem lorem lorem lorem",
                    variation: "p1.webp"
                }
            ]
        }
    }
    const waistcoat = {
        pocket: {
            title: "Pocket",
            hasPreview: true,
            selectedIndex: 0,
            options: [
                {
                    title: "No Pocket",
                    thumb: "https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_600,q_auto:good,w_600/custommade/thumbs2/model/MBN1",
                    desc: "lorem lorem lorem lorem lorem",
                    variation: "w1.webp",
                },
                {
                    title: "Chest Pocket",
                    thumb: "https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_600,q_auto:good,w_600/custommade/thumbs2/model/MBN2",
                    desc: "lorem lorem lorem lorem lorem",
                    variation: "w4.webp"
                }
            ]
        }
    }
    const sizechart = [
        {
            title: "JACKET",
            short: "< 100cm",
            regular: "120cm - 180cm",
            long: "> 220cm",
            sizeList: [
                {
                    key: "XXS",
                    regular: {
                        number: 10,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    },
                    short: {
                        number: 20,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    },
                    long: {
                        number: 30,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    }
                },
                {
                    key: "SMALL",
                    short: {
                        number: 10,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    },
                    long: {
                        number: 30,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    }
                },
            ],
            parameters: [
                "Chest",
                "Waist"
            ]
        },
        {
            title: "TROUSERS",
            short: "< 100cm",
            regular: "120cm - 180cm",
            long: "> 220cm",
            sizeList: [
                {
                    key: "XXS",
                    regular: {
                        number: 10,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    },
                    short: {
                        number: 20,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    },
                    long: {
                        number: 30,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    }
                },
                {
                    key: "SMALL",
                    short: {
                        number: 10,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    },
                    long: {
                        number: 30,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    }
                },
            ],
            parameters: [
                "Chest",
                "Waist"
            ]
        },
        {
            title: "WAISTCOAT",
            short: "< 100cm",
            regular: "120cm - 180cm",
            long: "> 220cm",
            sizeList: [
                {
                    key: "XXS",
                    regular: {
                        number: 10,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    },
                    short: {
                        number: 20,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    },
                    long: {
                        number: 30,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    }
                },
                {
                    key: "SMALL",
                    short: {
                        number: 10,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    },
                    long: {
                        number: 30,
                        attributes: [
                            {
                                key: "Chest",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5

                            },
                            {
                                key: "Waist",
                                min: 10,
                                max: 20,
                                step: 0.5,
                                initial: 16.5
                            },
                        ],
                    }
                },
            ],
            parameters: [
                "Chest",
                "Waist"
            ]
        }
    ]

    const [selectionData, setSelectionData] = useState(null);
    const [selectedFabric, setSelectedFabric] = useState(null)

    const [jacketsData, setJacketsData] = useState({})
    const [trousersData, setTrousersData] = useState({})
    const [waistcoatData, setWaistcoatData] = useState({})
    const [extraTrousersData, setExtraTrousersData] = useState({})

    const [hasExtraTrousers, setHasExtraTrousers] = useState(false)
    const [hasWaistCoat, setHasWaistCoat] = useState(false)
    const [sizeChart, setSizeChart] = useState(sizechart)


    useEffect(() => {
        console.log("Get shirts data")
        // GET SHIRT DATA
        var formdata = new FormData();
        formdata.append("func", "4");
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        fetch(configg.link, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setSelectionData(result)
                setSelectedFabric(result.fabrics[0])
            })
            .catch(error => console.log('error', error));


    }, [])

    useEffect(() => {
        if (selectedFabric) {

            let newAttributes = selectionData.jacket.reduce((acc, attribute) => {
                let matchedOption = attribute.options.find(option => option.fabric_id === selectedFabric.id);
                if(matchedOption){
                    acc[attribute.type] = matchedOption;
                }
                return acc;
            }, {});
            setJacketsData(newAttributes)

            let newAttributes2 = selectionData.trouser.reduce((acc, attribute) => {
                let matchedOption = attribute.options.find(option => option.fabric_id === selectedFabric.id);
                if(matchedOption){
                    acc[attribute.type] = matchedOption;
                }
                return acc;
            }, {});
            setTrousersData(newAttributes2)

            let newAttributes3 = selectionData.waistcoat.reduce((acc, attribute) => {
                let matchedOption = attribute.options.find(option => option.fabric_id === selectedFabric.id);
                if(matchedOption){
                    acc[attribute.type] = matchedOption;
                }
                return acc;
            }, {});
            setWaistcoatData(newAttributes3)
        }

    }, [selectedFabric])




    const contextValue = {
        selectionData,
        setSelectionData,
        selectedFabric,
        setSelectedFabric,

        jacketsData, setJacketsData,
        trousersData, setTrousersData,

        extraTrousersData, setExtraTrousersData,
        hasExtraTrousers, setHasExtraTrousers,

        hasWaistCoat, setHasWaistCoat,
        waistcoatData, setWaistcoatData,

        sizeChart, setSizeChart

    };

    return (
        <SelectionContext.Provider value={contextValue}>
            {children}
        </SelectionContext.Provider>
    );
};

export {SelectionProvider, SelectionContext};
