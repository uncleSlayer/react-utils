import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function TheNav(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <h1 className={`nav-link active text-${props.mode === 'light'?'dark': 'light'}`}>U fucking ber</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className={`nav-link active text-${props.mode === 'light'?'dark': 'light'}`} aria-current="page" href="/">{props.title}</a> */}
                            <Link className={`nav-link active text-${props.mode === 'light'?'dark': 'light'}`} aria-current="page" to="/">{props.title}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active text-${props.mode === 'light'?'dark': 'light'}`} aria-current="page" to="/about">about us</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.change}/>
                            <label className={`form-check-label text-${props.mode === 'light'?'dark': 'light'}`} htmlFor="flexSwitchCheckDefault">change mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

TheNav.prototype = {
    title: PropTypes.string
}

TheNav.defaultProps = {
    title: 'the non super nav'
}