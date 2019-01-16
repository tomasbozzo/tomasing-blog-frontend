import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/blog">Tomasing.com</Link>
            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse"
                data-target="#navb" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navb">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com">About me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com">Tutorials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com">News</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default header;
