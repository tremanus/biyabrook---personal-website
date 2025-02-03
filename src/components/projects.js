import React from 'react';
import './projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
    return (
        <div id='projects'>
            <h1 className='section-title'>Projects</h1>
            <div className='projects-grid'>
                <a href="https://scholalatinae.com" rel="noreferrer" target="_blank" className="card-link">
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
                        <p>Developed a Next.js website that helps over 3,000 students learn Latin & Greek for free. Programmed an algorithm for recommending practice questions based on past success, now with over 10,000 qs answered</p>
                        <a href="https://github.com/tremanus/scholalatinae" rel="noreferrer" target="_blank" className='github-link'>
                            <GitHubIcon /> Get code
                        </a>
                    </div>
                </div>
                </a>

                <a href="https://inboxrecap.com" rel="noreferrer" target="_blank" className="card-link">
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
                </a>
            </div>
        </div>
    );
}

export default Projects;