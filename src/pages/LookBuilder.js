import Person from "../components/base/Person/Person";
import WardrobeSelector from "../components/base/WardrobeSelector";
import {useEffect, useState} from "react";

let data = [
    {
        type: "category",
        title: "T-shirts",
        required: true,
        id: 1,
        image: "/catalogue/shirt.avif",
        products: [
            {
                id: 1,
                title: "shirt 1",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/shirt.avif"
            },
            {
                id: 2,
                title: "shirt 2",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/shirt1.avif"
            },
            {
                id: 3,
                title: "shirt",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/shirt2.avif"
            },
            {
                id: 4,
                title: "shirt",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/shirt3.avif"
            },
            {
                id: 5,
                title: "shirt",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/shirt4.avif"
            },
        ]
    },
    {
        type: "category",
        title: "Jackets",
        required: false,
        id: 2,
        image: "/catalogue/jacket.avif",
        products: [
            {
                id: 1,
                title: "Jacket",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/jacket.avif"
            },
            {
                id: 2,
                title: "Jacket",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/jacket2.avif"
            },
            {
                id: 3,
                title: "Jacket",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/jacket3.avif"
            },
            {
                id: 4,
                title: "Jacket",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/jacket4.avif"
            },
            {
                id: 5,
                title: "Jacket",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/jacket5.avif"
            },

        ]
    },
    {
        type: "category",
        title: "Pants",
        required: true,
        id: 3,
        image: "/catalogue/pant.avif",
        products: [
            {
                id: 1,
                title: "Black Pants",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/pant.avif"
            },
            {
                id: 2,
                title: "Black Pants",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/pants1.avif"
            },
            {
                id: 3,
                title: "Black Pants",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/pants2.avif"
            },
            {
                id: 4,
                title: "Black Pants",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/pants3.avif"
            },
            {
                id: 5,
                title: "Black Pants",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/pants4.avif"
            },
            {
                id: 6,
                title: "Pants",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/pants5.avif"
            },

        ]
    },
    {
        type: "category",
        title: "Shoes",
        required: false,
        id: 4,
        image: "/catalogue/shoes.avif",
        products: [
            {
                id: 1,
                title: " Shoes",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/shoes.avif"
            },
            {
                id: 1,
                title: " Shoes",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/shoes1.avif"
            },
            {
                id: 2,
                title: " Shoes",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/shoes2.avif"
            },
            {
                id: 3,
                title: " Shoes",
                price: "10",
                currency: "usd",
                symbol: "$",
                image: "/catalogue/shoes3.png"
            },

        ]
    },
    {
        type: "model",
        title: "Model",
        required: true,
        id: 4,
        image: "catalogue/thumb_2.avif",
        products: [
            {
                id: 1,
                title: "White",
                price: null,
                currency: null,
                symbol: null,
                image: "catalogue/model_1.avif",
                thumb: "catalogue/thumb_4.avif",
            },
            {
                id: 2,
                title: "Dark",
                price: null,
                currency: null,
                symbol: null,
                image: "catalogue/model2.avif",
                thumb: "catalogue/thumb_2.avif",
            },

        ]
    }
]
export default function LookBuilder() {
    const [selectedPants, setPants] = useState(null)
    const [selectedJacket, setJacket] = useState(null)
    const [selectedShirt, setShirt] = useState(null)
    const [selectedShoes, setShoes] = useState(null)
    const [selectedModel, setModel] = useState(null)


    const [ready, setReady] = useState(false)

    useEffect(() => {
        data.forEach(item => {
            item.title === "T-shirts" && setShirt(item.products[0])
            item.title === "Jackets" && setJacket(item.products[0])
            item.title === "Pants" && setPants(item.products[0])
            item.title === "Shoes" && setShoes(item.products[0])
            item.title === "Model" && setModel(item.products[0])
        })
        setReady(true)
    }, [])

    useEffect(() => {
        const onResize = () => {
            const vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        window.addEventListener('resize', onResize)
        onResize()
        return () => window.removeEventListener('resize', onResize)
    }, [])

    function handleUpdate(item, cat){
        cat === "T-shirts" && setShirt(item)
        cat === "Jackets" && setJacket(item)
        cat === "Pants" && setPants(item)
        cat === "Shoes" && setShoes(item)
        cat === "Model" && setModel(item)
    }

    if (ready){
        return (
            <>
                <div className="container-fluid look_builder_wrapper">
                    <div className="row">
                        <div className="person-col col">
                            <Person
                                pants={selectedPants}
                                jacket={selectedJacket}
                                shoes={selectedShoes}
                                shirt={selectedShirt}
                                model={selectedModel}
                            />
                        </div>
                        <div className="col sidebar">
                            <WardrobeSelector data={data}
                                              update={handleUpdate}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
