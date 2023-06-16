import Slider_left from "../Slider_left";

export default function Slider_2({openSidebar2, setOpenSidebar2, sidebar1Data, setSelectedSize}){


    const handleSizeSelection = (key) => {
        console.log(key)
        setSelectedSize(key)
        setOpenSidebar2(false)
    }

    return(
        <Slider_left open={openSidebar2} setOpen={setOpenSidebar2}>
            <div className="py-4 fw-light text-center h5 tab-heading">Select Size</div>

            <div className="tab-column inner">
                <>
                    <table className={"table table-borderless table-sm text-center align-middle"}>

                        <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <p className={"fw-bold m-0"}>Short </p>
                                <p className={"text-muted m-0 text-small small"}>{sidebar1Data.short}</p>
                            </td>
                            <td>
                                <p className={"fw-bold m-0"}>Medium</p>
                                <p className={"text-muted m-0 text-small small"}>{sidebar1Data.regular}</p>

                            </td>
                            <td>
                                <p className={"fw-bold m-0"}>Large</p>
                                <p className={"text-muted m-0 text-small small"}>{sidebar1Data.long}</p>
                            </td>
                        </tr>

                        {sidebar1Data && sidebar1Data.sizeList.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>{item.key}</td>
                                    <td>{item.short && <button onClick={() => {
                                        handleSizeSelection(item.short)
                                    }}
                                                               className="btn btn-dark btn-sm px-4">{item.short.number}</button>}</td>
                                    <td>{item.regular && <button onClick={() => {
                                        handleSizeSelection(item.regular)
                                    }}
                                                                 className="btn btn-dark btn-sm px-4">{item.regular.number}</button>}</td>
                                    <td>{item.long && <button onClick={() => {
                                        handleSizeSelection(item.long)
                                    }}
                                                              className="btn btn-dark btn-sm px-4">{item.long.number}</button>}</td>
                                </tr>
                            )
                        })}


                        </tbody>
                    </table>
                </>
            </div>
        </Slider_left>
    )
}
