import React from 'react';
import '../styles/header.css';
import '../App.css';

export default function Header(){
    return (
        <div id="header">
        <h1>Hi, I'm Nate Lemke</h1>
        <h2>Software Developer from Burnaby, BC</h2>
        <a class="rounded-button" href="/personal-site/static/media/Resume.203eaad0.pdf">Resume</a>
    </div>
    );
}