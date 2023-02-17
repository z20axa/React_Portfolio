import React from 'react';
import '../styles/Projects.css';

function Projects() {
    return (
        <section class="projects" id="projects">
            <div>
                <h2>PROJECTS</h2>
            </div>
            <div id="projectsImgContainer">
                <div class="figureContainer">
                    <figure>
                        <header>Project 1 - Nail Salon Appoinment App</header>
                        <a href="https://caltran117.github.io/Nail-Salon-App/" target="_blank"><img class="enlarge-pic"/>
                                src="../public/images/Web capture_23-12-2022_32539_caltran117.github.io.jpeg"
                                alt="Nail Salon App"></a>
                    </figure>
                </div>
                <div class="figureContainer">
                    <figure>
                        <header>Project 2 - Gym Member App</header>
                        <a href="https://hemlock-fit-club.herokuapp.com/" target="_blank"><img class="enlarge-pic"/>
                                src="../public/images/Web capture_23-12-2022_35149_hemlock-fit-club.herokuapp.com.jpeg"
                                alt="Gym Member App"></a>
                    </figure>
                </div>
            </div>
        </section>
    );
  }

export default Projects;


