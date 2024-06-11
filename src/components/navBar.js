import React from 'react';
import '../styles/navBar.css';
import '../App.css';

export default function NavBar() {
    return (
        <div id="nav-bar">
            <ul id="nav-list" className="main-color-1">
            <li className="nav-item">
                    <a className="nav-link" href="#top">HOME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#a-about">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#a-projects">PROJECTS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#a-contact">CONTACT</a>
                </li>
            </ul>
        </div>
    );
}
