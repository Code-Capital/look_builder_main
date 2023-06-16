
export default function Slider_left({open, setOpen, children}){
    return(
        <>
            <div className={`slider-left ${open ? "active" : null}`}>

                <div className="content">
                    {children}
                </div>

                <div className={'sidebar-footer'}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                           <div className="col-6">
                               <button className={"btn btn-light w-100"}
                                       onClick={()=>{
                                           setOpen(false)
                                       }}
                               >Close</button>
                           </div>
                            <div className="col-6">
                                <button className={"btn btn-dark w-100"}
                                        onClick={()=>{
                                            setOpen(false)
                                        }}
                                >Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
