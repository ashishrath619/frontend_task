import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MenuIcon from '@material-ui/icons/Menu';
import "./navbar.css"
// import AcUnitIcon from '@material-ui/icons/AcUnitIcon';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar_container">
            <div className="abhedya_logo_container">
                {/* <AcUnitIcon style={{fontSize:"2.5rem"}} className="navlogo"/> */}
                <img className="navlogo" src="navlogo.jpeg" alt=" abhedya logo "/>
                <strong className="abhedya_logo_txt"> Abhedya  </strong>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="threebar"> <MenuIcon/> </span>
            </button>
            <div className="collapse desktop_nav navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a  className="navbar_links" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="navbar_links" href="#"> Services </a>
                </li>
                <li className="nav-item">
                    <a className="navbar_links" href="#"> About </a>
                </li>
                <li className="nav-item">
                    <a className="navbar_links disabled" href="#"> Contact </a>
                </li>
                <li className="nav-item">
                    <a className="navbar_links disabled" href="#"> Career </a>
                </li><li className="nav-item">
                    <a className="navbar_links disabled" href="#"> Portfolio </a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;