import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-text">© 2023 Ford Dev & Design Inc.</div>
            <div className="scroll-to-top">
                <FontAwesomeIcon icon={faChevronUp} className="fa-chevron-up" />
            </div>
        </div>
    )

}
 
export default Footer;