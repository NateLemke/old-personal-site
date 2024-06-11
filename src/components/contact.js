import React from 'react';
import '../styles/contact.css'
import '../App.css';

export default function Contact(){
    return (
        <div id='contact' className="main-color-2">
            <a className="anchor-point" id="a-contact"></a>
        <div className='col'>
            <img src={require('../content/email.png')} width="100px" height="100px"></img>
            <h2>Nateglemke@gmail.com</h2>
        </div>
        <div className='col'>
        <img src={require('../content/phone.png')} width="100px" height="100px"></img>
            <h2>250 877 8077</h2>
        </div>
        </div> 
    );
}