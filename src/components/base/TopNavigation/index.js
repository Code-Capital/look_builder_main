import 'font-awesome/css/font-awesome.min.css';
import logo from "../../../assets/logo.png"
import {useState} from "react";

export default function TopNavigation() {
    const [isNavOpen, setNavOpen] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"
                       onClick={e => {
                           e.preventDefault();
                           setNavOpen(c => !c)
                       }}>
                        <i className="fa fa-bars text-dark"/>
                    </a>

                    <img src={logo} alt="" className={"img-fluid"}
                         style={{maxHeight: 24}}/>

                    <div>
                        <a href="#" className={"btn btn-sm"}>
                            <i className={"fa fa-shopping-bag text-dark"}/>
                        </a>
                        <a href="#" className={"btn btn-sm"}>
                            <i className={"fa fa-user-circle text-dark"}/>
                        </a>
                    </div>


                </div>
            </nav>

            <aside className={(isNavOpen ? "active" : "") + " side-wrapper"} onClick={() => {
                setNavOpen(false)
            }}>
                <nav className={"side-nav"}>

                </nav>
            </aside>
        </>
    )
}
