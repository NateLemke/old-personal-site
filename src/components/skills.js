import React from 'react';
import '../styles/skills.css';
import '../App.css';

export default function Skills() {
    return(
        <div id="skills" className="main-color-1">
            <div id="skills-container" className="bg-color">
                <img src={require('../content/htmlCssJs.png')} className="skillImg" width="75px" height="75px" alt="HTML, CSS, and Javascript logos"></img>
                <img src={require('../content/node.png')} className="skillImg" width="75px" height="75px" alt="A Node.js logo"></img>
                <img src={require('../content/react.png')} className="skillImg" width="150px" height="75px" alt="A React logo"></img>
            </div>
        </div>
    );
}