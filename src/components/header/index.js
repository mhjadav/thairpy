import React, { Component } from "react"
import { Link } from 'react-router-dom';
import LogoImg from '../../static/images/thairpy-logo-new.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false, showDropdownMenu: false};
      }
      openMenu = () => {
        this.setState({
          showMenu:!this.state.showMenu
        });
      };
      openDropdown = () => {
        this.setState(({showDropdownMenu}) => ({
            showDropdownMenu: !showDropdownMenu
        }));
      };
      hideMenu = () => {
        this.setState(({showDropdownMenu, showMenu}) => ({
            showDropdownMenu: !showDropdownMenu,
            showMenu: !showMenu
        }));
      }
    render() {
        return (
            <div className="iparys_inherited">
                <div className="parsys iparsys header-wrap">
                    <div className="header-wrapper section">
                        <header>
                            <nav className="navbar navbar-default">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                        <button type="button" onClick={this.openMenu} className="navbar-toggle navbar-toggle--main collapsed" data-toggle="collapse" data-target="#navbar-collapse-main">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icomoon-menu"></span>
                                            <span className="icomoon-dropdown-nav"></span>
                                        </button>
                                        <div className="logo-component parbase main_logo">
                                            <div className="footer-logo-component">
                                                <div className="image"
                                                    title="">
                                                    <Link to="/">
                                                        Thairpy <span style={{"fontSize": "10px"}}>Spa &amp; Salon</span>
                                                        <img title="THAIRPY SALON & SPA " alt="null" className="cq-dd-image" src={LogoImg} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="topnav nav-bar">
                                        <div className={this.state.showMenu ? 'collapse navbar-collapse in' : 'collapse navbar-collapse'} id="navbar-collapse-main">
                                            <ul className="nav navbar-nav">
                                                <li>
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/team">Team</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/salon">The Salon</Link>
                                                </li>
                                                <li>
                                                    <Link to="/services/spa">The Spa</Link>
                                                </li>
                                                <li className={this.state.showDropdownMenu ? 'open' : ''} onMouseEnter={this.openDropdown} onMouseLeave={this.openDropdown}>
                                                    <Link to="#">
                                                        Services
                                                        <span className="icomoon-down-dir"></span>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <Link to="/services/massage">Massage</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/services/barber">Barber Services</Link>
                                                        </li>
                                                        {/* <li>
                                                            <Link to="/services/medical-esthetics">Medical Esthetics</Link>
                                                        </li> */}
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                                {/* <li>
                                                    <Link to="/hiring">Hiring</Link>
                                                </li>
                                                <li>
                                                    <a rel="noopener noreferrer" href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=887393&tg=&vt=&lvl=&stype=-98&view=&trn=0&page=&catid=&prodid=&date=11%2f3%2f2017&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1" target="_blank"> Book Now
                                                        <span className="icomoon-chevron-right"></span>
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                   
                                    <div className="location top-right-location-par">
                                    </div>
                                    <div className="cartlink top-right-cartlink-par">
                                    </div>
                                </div>
                            </nav>
                        </header>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;