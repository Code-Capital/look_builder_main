import "./footer.scss"
import {AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';

export default function Footer() {

    return (
        <>
            <div className={"footer_site"}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-3">
                                    <h5>Exclusive Services</h5>
                                    <p><a href="#">Wedding</a></p>
                                    <p><a href="#">Style Guide</a></p>
                                    <p><a href="#">Online Measurements</a></p>
                                </div>
                                <div className="col-lg-3">
                                    <h5>How we can help?</h5>
                                    <p><a href="#">FAQ</a></p>
                                    <p><a href="#">Contact</a></p>
                                    <p><a href="#">Payment Options</a></p>
                                    <p><a href="#">Shipping</a></p>
                                    <p><a href="#">Returns & Alterations</a></p>
                                    <p><a href="#">Product Care</a></p>
                                </div>
                                <div className="col-lg-3">
                                    <h5>The Company</h5>
                                    <p><a href="#">Press</a></p>
                                    <p><a href="#">Privacy</a></p>
                                    <p><a href="#">Terms of service</a></p>
                                </div>
                                <div className="col-lg-3">
                                    <h5>Find us on</h5>
                                    <p className={"social"}>
                                        <a href="#"><AiFillFacebook/></a>
                                        <a href="#"><AiOutlineInstagram/></a>
                                        <a href="#"><AiOutlineTwitter/></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5>SIGN UP FOR IZOTTI UPDATES</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, placeat!</p>
                                    <form action="#">
                                        <input type="email" placeholder={"Enter your email"} className={"form-control"}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-black py-2 text-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <span>&copy; Izotti 2023 | Designed by xyz</span>
                        </div>
                        <div className="col-lg-6 text-end">
                            <img src="https://via.placeholder.com/30" alt=""/> &nbsp;
                            <img src="https://via.placeholder.com/30" alt=""/> &nbsp;
                            <img src="https://via.placeholder.com/30" alt=""/> &nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
