import React from 'react';
import '../styles/about.css'
import '../App.css';


export default function About() {
    return(
        <div id="about" className="bg-color">
            <a className="anchor-point" id="a-about"></a>
            <div id="blurb" className="column bg-color black-text">
                <h2>About me</h2>
                <p>I am a recent graduate of the Computer Systems Bachelor of Technology degree program at BCIT. 
                    In this program I completed both the Techncial Programming and Network Security Applications Development options.
                    During my time at BCIT I completed various team-based and solo programming projects. 
                    I am passionate about coding and enjoy learning new langauages and techniques. 
                </p>
                <p>I am currently searching for new job opportunities, if you are interested, my contact information is posted on this site.</p>
            </div>
            <div id="img-div" className="column bg-color black-text">
                <img src={require('../content/portrait.jpg')} alt="me" id="portrait"></img>
            </div>
            <div id="info" className="column bg-color black-text">
                <ul>
                    <li><b>Full Name </b> <p>Nathaniel Lemke</p></li>
                    <li><b>Location </b> <p>Vancouver, British Columbia</p></li>
                    <li><b>Phone </b> <p>250 877 8077</p></li>
                    <li><b>Email </b> <p>Nateglemke@gmail.com</p></li>
                </ul>
            </div>
        </div>
    );
}