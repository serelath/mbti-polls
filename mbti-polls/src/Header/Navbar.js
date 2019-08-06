import React from 'react';

const navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <a className="navbar-brand px-3" href="#">MBTI Polls</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item px-4 py-3">
                    <a className="nav-link" href="#">Polls</a>
                </li>
                <li className="nav-item px-4 py-3">
                    <a className="nav-link" href="#">Find Out Your Type</a>
                </li>
                <li className="nav-item px-4 py-3">
                    <a className="nav-link" href="#">Request Box</a>
                </li>
                <FontAwesomeIcon icon="search" />
                </ul>
            </div>
        </nav>
    )
}

export default navbar;