import React from 'react';
import './projects.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';

const Projects = () => {
    return (
        <section id='projects'>
           <h2 className="projectsTitle">My Projects</h2>
           <span className="projectsDesc">I always pay attention to the smallest information for all the projects that I have learnt to make personally as well as during in class sessions.<br/>Here are some of my favorite projects captured in images, which I believe have augmented my ability to think outside the box and code.</span>
           <div className="projectsImgs">
                <img src={Project1} alt="Project1" className="projectsImg" style={{width: '250px', height: 'auto'}} />
                <img src={Project2} alt="Project2" className="projectsImg" style={{width: '250px', height: 'auto'}}/>
                <img src={Project3} alt="Project3" className="projectsImg" style={{width: '250px', height: 'auto'}}/>
           </div>
        </section>
    );
}

export default Projects;