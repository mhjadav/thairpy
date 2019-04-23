import React, { Component } from "react"
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <div className="parsys footer-wrap iparsys">
            <div className="section">
                <div className="new"></div>
            </div>
            <div className="iparys_inherited">
                <div className="parsys footer-wrap iparsys">
                    <div className="footer-wrapper section">
                        <footer>
                            <div className="container">
                                <div className="footer_local footerlinks">
                                    <div className="local-footer-component">
                                        <div className="hidden-sm hidden-md hidden-lg">
                                            <div className="sociallinks social-links">
                                                <ul className="social">
                                                    
                                                </ul>
                                            </div>
                                            <div className="address">
                                                <div className="address text-uppercase">
                                                    <p>
                                                    <Link to="/">THAIRPY SALON & SPA </Link>
                                                    </p>
                                                    <p>9955 170 St NW, Edmonton, AB T5P 4S2, Canada</p>
                                                    <p>
                                                        &nbsp;&nbsp; <a href="tel:+1 780-484-3555">+1 780-484-3555</a> &nbsp;&nbsp; | &nbsp;&nbsp;
                                                        <Link to="/contact">Contact Us</Link> &nbsp;&nbsp;
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden-xs hidden-md hidden-lg">
                                            <div className="property-name">
                                                <p>
                                                <Link to="/">THAIRPY SALON & SPA</Link>
                                                </p>
                                            </div>
                                            <div className="sociallinks social-links">
                                                <ul className="social">
                                                    
                                                </ul>
                                            </div>
                                            <div className="address">
                                                <p>
                                                    9955 170 St NW, Edmonton, AB T5P 4S2, Canada &nbsp;&nbsp; | &nbsp;&nbsp;  <a href="tel:+1 780-484-3555">+1 780-484-3555</a>
                                                    &nbsp;&nbsp;
                                                    <Link to="/contact">Contact Us</Link> &nbsp;&nbsp;
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hidden-xs hidden-sm">
                                            <div className="address" style={{"verticalAlign": "text-top"}}>
                                                <div className="address text-uppercase">
                                                    <p>
                                                        <Link to="/">THAIRPY SALON & SPA</Link> &nbsp;&nbsp; | &nbsp;&nbsp; 9955 170 St NW, Edmonton, AB T5P 4S2, Canada &nbsp;&nbsp; | &nbsp;&nbsp;  <a href="tel:+1 780-484-3555">+1 780-484-3555</a>
                                                        &nbsp;&nbsp; | &nbsp;&nbsp;
                                                        <Link to="/contact">Contact Us</Link> &nbsp;&nbsp;
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="sociallinks social-links">
                                                <ul className="social">
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="global-footer-component">
                                    <div className="richtext full-width-text">
                                        <div className="text">
                                            
                                            <p>
                                                <a>&nbsp; &nbsp; © 2018 THAIRPY SALON & SPA</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;