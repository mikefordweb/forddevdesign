import React, { MouseEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface FooterProps {
    headerType: string;
}

const Footer = ({ headerType }: FooterProps) => {

    let [showHideMainMenu, setShowHideMainMenu] = useState<string>('show');
    let [showHideMobileIcon, setShowHideMobileIcon] = useState<string>('hide');
    let [showHideMobileMenu, setShowHideMobileMenu] = useState<string>('hide');

    useEffect(() => {
        showHideMobile();
    });

    const clickMenu = (ev: MouseEvent) => {
        if (showHideMobileMenu === 'hide') {
          setShowHideMobileMenu('show');
        } else {
          setShowHideMobileMenu('hide');
        }
    }

    const showHideMobile = () => {
        if (window.innerWidth < 870) {
          //setShowHideMobileMenu('show');
          setShowHideMobileIcon('show');
          setShowHideMainMenu('hide');
        } else {
          //setShowHideMobileMenu('hide');
          setShowHideMobileIcon('hide');
          setShowHideMainMenu('show');
        }
    }

    return (
        headerType === 'main' ? <header>
        <img src="/img/Ford-Dev-Design-logo-light.png" className="fdd-logo" alt="logo" />
        
        <ul className={`header-nav ${showHideMainMenu}`}>
          <li>
            <a href="#ourwork" className="header-nav-span">Our Work</a>
            <div className="header-nav-bottom-left"></div>
            <div className="header-nav-bottom-right"></div>
          </li>
          <li>
            <a href="#services" className="header-nav-span">Services</a>
            <div className="header-nav-bottom-left"></div>
            <div className="header-nav-bottom-right"></div>
          </li>
          <li>
            <a href="#clients" className="header-nav-span">Clients</a>
            <div className="header-nav-bottom-left"></div>
            <div className="header-nav-bottom-right"></div>
          </li>
          <li>
            <a href="#contact" className="header-nav-span">Contact</a>
            <div className="header-nav-bottom-left"></div>
            <div className="header-nav-bottom-right"></div>
          </li>
        </ul> 

        <FontAwesomeIcon icon={faBars} className={`fa-bars ${showHideMobileIcon}`} onClick={clickMenu} />
        <div className={`mobile-menu ${showHideMobileMenu}`}>
          <div className="mobile-menu-item">
            <a href="#" className="mobile-menu-link">Our Work</a>
          </div>
          <div className="mobile-menu-item">
            <a href="#" className="mobile-menu-link">Services</a>
          </div>
          <div className="mobile-menu-item">
            <a href="#" className="mobile-menu-link">Clients</a>
          </div>
          <div className="mobile-menu-item">
            <a href="#" className="mobile-menu-link">Contact</a>
          </div>
        </div>
      </header> : headerType === 'portfolio' ? <header className="portfolio-header">
        <a href="/"><img src="/img/Ford-Dev-Design-logo-dark.png" className="fdd-logo-white" alt="logo" /></a>

        <ul className="header-nav portfolio-nav">
          <li>
            <span className="header-nav-span">Our Work</span>
          </li>
          <li>
            <span className="header-nav-span">Services</span>
          </li>
          <li>
            <span className="header-nav-span">Clients</span>
          </li>
          <li>
            <span className="header-nav-span">Contact</span>
          </li>
        </ul>
      </header> : <></>
    )

}
 
export default Footer;