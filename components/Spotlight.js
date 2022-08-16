import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faPinterest} from "@fortawesome/free-brands-svg-icons";
import SpotlightAccordion from "./elements/SpotlightAccordion";
import axios from "axios";

function Spotlight({setSearchResults, setIsLoading}) {

    const onLinkClick = async (term) => {
        setIsLoading(true)
        const raw = await axios.post('/api/search', {term})
        const response = raw.data.data.filter(post => post.result_type === "things_to_do")
        setIsLoading(false)
        setSearchResults(response)
    }

    return(
        <div id="spotlight" className="col-3">
            <div className="spotlight-heading">Quick Links</div>

            <div className="accordion" id="spotlightAccordion">
                <SpotlightAccordion id="one" title="Continents">
                    <ul className="list-group list-group-flush">
                        <li onClick={() => onLinkClick('world')} className="list-group-item">World</li>
                        <li onClick={() => onLinkClick('europe')} className="list-group-item">Europe</li>
                        <li onClick={() => onLinkClick('africa')} className="list-group-item">Africa</li>
                        <li onClick={() => onLinkClick('america')} className="list-group-item">America</li>
                        <li onClick={() => onLinkClick('asia')} className="list-group-item">Asia</li>
                    </ul>
                </SpotlightAccordion>
                <SpotlightAccordion id="two" title="Countries">
                    <ul className="list-group list-group-flush">
                        <li onClick={() => onLinkClick('spain')} className="list-group-item">Spain</li>
                        <li onClick={() => onLinkClick('mexico')} className="list-group-item">Mexico</li>
                        <li onClick={() => onLinkClick('egypt')} className="list-group-item">Egypt</li>
                        <li onClick={() => onLinkClick('brazil')} className="list-group-item">Brazil</li>
                        <li onClick={() => onLinkClick('australia')} className="list-group-item">Australia</li>
                    </ul>
                </SpotlightAccordion>
                <SpotlightAccordion id="three" title="Cities">
                    <ul className="list-group list-group-flush">
                        <li onClick={() => onLinkClick('london')} className="list-group-item">London</li>
                        <li onClick={() => onLinkClick('puerto rico')} className="list-group-item">Puerto Rico</li>
                        <li onClick={() => onLinkClick('nairobi')} className="list-group-item">Nairobi</li>
                        <li onClick={() => onLinkClick('los angeles')} className="list-group-item">Los Angeles</li>
                        <li onClick={() => onLinkClick('tokyo')} className="list-group-item">Tokyo</li>
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
                <p>&copy; {new Date().getFullYear()} Tour Guide.</p>
            </div>
        </div>
    )
}

export default Spotlight