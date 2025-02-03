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
                        <img src='/scl.png' alt='ScholaLatinae Project' />
                    </div>
                    <div className='project-content'>
                        <h2>ScholaLatinae</h2>
                        <div className='tech-stack'>
                            <span>JavaScript</span>
                            <span>Next.js</span>
                            <span>React</span>
                            <span>Supabase</span>
                        </div>
                        <p>Developed a Next.js website that helps over 3,000 students learn Latin & Greek for free. Edit video lessons and release them on YouTube; Design social media marketing posts using Photoshop. Programmed an algorithm for recommending practice questions based on past success, over 10k qs answered</p>
                        <a href="https://github.com/tremanus/scholalatinae" rel="noreferrer" target="_blank" className='github-link'>
                            <GitHubIcon /> Get code
                        </a>
                    </div>
                </div>

                <div className='project-card'>
                    <div className='project-image'>
                        <img src='/inb.png' alt='InboxRecap Project' />
                    </div>
                    <div className='project-content'>
                        <h2>InboxRecap</h2>
                        <div className='tech-stack'>
                            <span>JavaScript</span>
                            <span>Next.js</span>
                            <span>React</span>
                            <span>Gmail API</span>
                            <span>OpenAI API</span>
                        </div>
                        <p>Run an inbox management software that sends daily summary emails of one’s inbox & helps bulk unsubscribe from mailing lists. Leverage Gmail API to mark emails as read and get email body to summarize using OpenAI API.</p>
                        <a href="https://github.com/tremanus/inboxrecap" rel="noreferrer" target="_blank" className='github-link'>
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