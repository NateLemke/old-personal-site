import React from 'react';
import '../styles/projects.css';
import '../App.css';

function ProjectCard({title, link, desc}) {
    return(
        <a href={link}>
            <div className="project-card main-color-1 grow">
                <h2>{title}</h2>
                <p className='proj-desc'>{desc}</p>
            </div>
        </a>
    ); 
} 

export default function Projects() {
    return(
        <div id="projects" className="bg-color">
            <a className="anchor-point" id="a-projects"></a>
            <div className='card-div'>
                <ProjectCard title={"Reservoir Rescue"}  link={"https://github.com/NateLemke/ReservoirRescue"} 
                desc={`A web-based pipe connecting game. 
                This team project used html and css for the menus and Javascript and the Phaser framework for gameplay. 
                SQL and PHP were used to store leaderboard scores.`}/>
                <ProjectCard title={"Memory game"}  link={"https://github.com/NateLemke/MemoryGame"} 
                desc={`A simple pattern memory game made using Node.js and Express.
                Uses a variable size grid of tiles with randomized patterns. Gameplay is handled with Javascript and 
                leaderboard data is stored using MongoDB.`}/>
                <ProjectCard title={"Trieris"}  link={"https://github.com/NateLemke/Trieris"} 
                desc={`A computer version of a tabletop board game.
                    This project was completed as part of a 4-person Agile team. Unity and C# were the main technologies used.
                    For part of this project, we redesigned and implemented a completely new UI for the game.`}/>
                <ProjectCard title={"Covert Channel Detector"} link={"https://github.com/NateLemke/Detector"}
                desc={`A Python project that analyzes a capture file of network traffic and sends warnings if the traffic violates 
                a user-specified ruleset. The included ruleset is focused on detecting unusual activity in IP, TCP, and UDP header fields.`}/>
            </div>
            <h2 className="black-text">More details and other projects can be found on my Github</h2>
            <a href="https://github.com/NateLemke">
                <img id="git-icon" className="grow" src={require('../content/git.png')} width="150px" height="150px"></img>
            </a>
        </div>
    );
}
