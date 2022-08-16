import {useState} from "react";
import Image from "next/image";
import logo from "../public/images/logo.webp"

function Navbar() {

    const [term, setTerm] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-light">
            <div className="container-fluid">
                <a className="navbar-brand h1 ps-5" href="#">
                    <Image src={logo} alt="logo" layout="fixed" height="20" width="20"/>
                    <span className="brand-name">Tour Guide</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form onSubmit={onFormSubmit} className="d-flex mx-auto" role="search">
                        <input className="form-control" id="search-bar" type="search"
                               placeholder="&#x1F50D; Search for a destination" aria-label="Search" value={term}
                               onChange={event => setTerm(event.target.value)}/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar