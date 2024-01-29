//File: NavBar.css, Student's name: Sothyra Chan, ID: 301289779, Date: 28 01 2024
import React from 'react';
import './projects.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';

const Projects = () => {
    return (
        <section id='projects'>
           <h2 className="projectsTitle">Projects</h2>
           <span className="projectsDesc">I always pay attention to the smallest information for all the individual projects that I have learnt to make personally as well as during in class sessions.<br/>Here are some of my favorite projects captured in images, which I believe have augmented my ability to think outside the box and to code.</span>
           <div className="projectsImgs">
                <div className="projectContainer">
                    <span className="projectsImgsText"><p1>"Bug Smusher Game"<br/>Users can adjust the speed of the bug <br/> and try to catch it to earn points.</p1></span>
                        <img src={Project1} alt="Project1" className="projectsImg" style={{width: '300px', height: 'auto'}} />
                </div>
                <div className="projectContainer">
                    <span className="projectsImgsText"><p1>"Personal Portfolio"<br/>This is my personal portfolio project <br/> reflecting my coding experience.</p1></span>
                        <img src={Project2} alt="Project2" className="projectsImg" style={{width: '300px', height: 'auto'}} />
                </div>
                <div className="projectContainer">
                    <span className="projectsImgsText"><p1>"House Agent Profile"<br/>A profile of an agent with listings <br/> where buyers can view and contact.</p1></span>
                        <img src={Project3} alt="Project3" className="projectsImg" style={{width: '300px', height: 'auto'}} />
                </div>
           </div>
        </section>
    );
}

export default Projects;