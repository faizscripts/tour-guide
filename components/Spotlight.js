import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faPinterest} from "@fortawesome/free-brands-svg-icons";
import SpotlightAccordion from "./elements/SpotlightAccordion";

function Spotlight() {
    return(
        <div id="spotlight" className="col-3">
            <div className="spotlight-heading">Quick Links</div>

            <div className="accordion" id="spotlightAccordion">
                <SpotlightAccordion id="one" title="Regions">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">World</li>
                        <li className="list-group-item">Europe</li>
                        <li className="list-group-item">Africa</li>
                        <li className="list-group-item">America</li>
                        <li className="list-group-item">Asia</li>
                    </ul>
                </SpotlightAccordion>
                <SpotlightAccordion id="two" title="Countries">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Spain</li>
                        <li className="list-group-item">Mexico</li>
                        <li className="list-group-item">Egypt</li>
                        <li className="list-group-item">Brazil</li>
                        <li className="list-group-item">Australia</li>
                    </ul>
                </SpotlightAccordion>
                <SpotlightAccordion id="three" title="Cities">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">London</li>
                        <li className="list-group-item">Puerto Rico</li>
                        <li className="list-group-item">Nairobi</li>
                        <li className="list-group-item">Los Angeles</li>
                        <li className="list-group-item">Tokyo</li>
                    </ul>
                </SpotlightAccordion>
            </div>

            <div className="info">
                <p>Your one stop platform for all your tourism needs.</p>
                <div className="socials">
                    <a href="#">
                        <button className="icons" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} className="instagram"/>
                        </button>
                    </a>
                    <a href="#">
                        <button className="icons" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} className="facebook"/>
                        </button>
                    </a>
                    <a href="#">
                        <button className="icons" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} className="twitter"/>
                        </button>
                    </a>
                    <a href="#">
                        <button className="icons" aria-label="Pinterest">
                            <FontAwesomeIcon icon={faPinterest} className="pinterest"/>
                        </button>
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Tourist Guide.</p>
            </div>
        </div>
    )
}

export default Spotlight