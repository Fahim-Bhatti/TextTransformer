import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const handleColorChange = (color) => {
        document.body.style.backgroundColor = color;
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">{props.aboutText}</Link>
                        </li>
                    </ul>

                    <div className={`form-check form-check-inline text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                        <input className="form-check-input" type="radio" name="color" id="colorGreen" value="green" onChange={() => handleColorChange('green')} />
                        <label className="form-check-label" htmlFor="colorGreen">Green</label>
                    </div>
                    <div className={`form-check form-check-inline text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                        <input className="form-check-input" type="radio" name="color" id="colorPurple" value="purple" onChange={() => handleColorChange('purple')} />
                        <label className="form-check-label" htmlFor="colorPurple">Purple</label>
                    </div>
                    <div className={`form-check form-check-inline text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                        <input className="form-check-input" type="radio" name="color" id="colorBrown" value="brown" onChange={() => handleColorChange('brown')} />
                        <label className="form-check-label" htmlFor="colorBrown">Brown</label>
                    </div>

                    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

// Navbar.defaultProps = {
//     title: "Set Title Here",
//     aboutText: "About",
// }
