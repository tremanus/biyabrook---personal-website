import React from 'react';
import './projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
    return (
        <div id='projects'>
            <h1 className='section-title'>Projects</h1>
            <div className='projects-grid'>
                <div className='project-card'>
                    <div className='project-image'>
                        <img src='/docllama.png' alt='DocLlama Project' />
                    </div>
                    <div className='project-content'>
                        <h2>ScholaLatinae</h2>
                        <div className='tech-stack'>
                            <span>JavaScript</span>
                            <span>Next.js</span>
                            <span>NextAuth.js</span>
                            <span>React</span>
                            <span>Supabase</span>
                        </div>
                        <p>Developed a Next.js website that helps over 2,900 students learn Latin & Greek for free. Edit video lessons and release them on YouTube; Design social media marketing posts using Photoshop. Programmed an algorithm for recommending practice questions based on past success, over 10k qs answered</p>
                        <a href="https://github.com/yourusername/docllama" className='github-link'>
                            <GitHubIcon /> Get code
                        </a>
                    </div>
                </div>

                <div className='project-card'>
                    <div className='project-image'>
                        <img src='/2d-gas.png' alt='2D Gas Mechanics Engine' />
                    </div>
                    <div className='project-content'>
                        <h2>2D Gas-Mechanics Engine</h2>
                        <div className='tech-stack'>
                            <span>C++</span>
                            <span>SFML</span>
                            <span>Makefile</span>
                        </div>
                        <p>Developed a gas mechanics engine with realistic physics and real-time graphical display from scratch. Achieved an average frame processing time of 345 μs simulating 600+ non-identical particles at 60 FPS. Reduced latency accumulation by 50% using a predictive sweep-and-prune collision detection algorithm.</p>
                        <a href="https://github.com/yourusername/gas-mechanics" className='github-link'>
                            <GitHubIcon /> Get code
                        </a>
                    </div>
                </div>

                <div className='project-card'>
                    <div className='project-image'>
                        <img src='/rasp.png' alt='RASP Project' />
                    </div>
                    <div className='project-content'>
                        <h2>RASP</h2>
                        <div className='tech-stack'>
                            <span>Java</span>
                            <span>JavaFX</span>
                            <span>Groovy</span>
                            <span>Gradle</span>
                            <span>Batch</span>
                        </div>
                        <p>Added a "pull annotations" feature to the QuPath-OMERO database extension for collaborative use cases. Created a Python scripting extension within QuPath, providing an interface to run custom AI/ML pipelines. Developed offline import and export features, allowing users to save annotations as binary mask PNGs.</p>
                        <a href="https://github.com/yourusername/rasp" className='github-link'>
                            <GitHubIcon /> Get code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;