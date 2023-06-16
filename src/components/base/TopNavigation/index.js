import 'font-awesome/css/font-awesome.min.css';
import logo from "../../../assets/logo.png"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function TopNavigation() {
    const [isNavOpen, setNavOpen] = useState(false)

    const [themeDark, setThemeDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        if (themeDark) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('theme', themeDark ? 'dark' : 'light');
    }, [themeDark]);


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
                        <a href="#" className={"btn btn-sm"}
                           onClick={() => {
                               setThemeDark(current => !current)
                           }}
                        >
                            {themeDark
                                ? <i className={"fa fa-sun-o text-dark"}/>
                                : <i className={"fa fa-moon-o text-dark"}/>
                            }
                        </a>
                    </div>


                </div>
            </nav>

            <aside className={(isNavOpen ? "active" : "") + " side-wrapper"} onClick={() => {
                setNavOpen(false)
            }}>
                <nav className={"side-nav p-1"}>
                    <br/>
                    <Link to={"/"} className={"btn btn-outline-dark rounded-0 w-100 mb-2 text-start"}>Look
                        Builder</Link>

                    
                    <Link to={"suit-builder"} className={"btn btn-outline-dark rounded-0 w-100 mb-2 text-start"}>Suit
                        Builder</Link>
                </nav>
            </aside>
        </>
    )
}
