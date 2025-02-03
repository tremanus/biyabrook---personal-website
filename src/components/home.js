import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Experience from './experience';
import Projects from './projects';
import './home.css'

const Home = () => {
    return (
        <>
        <div className='hero-section'>
    <div className='content-wrapper'>
        <h4>Hello, I am</h4>
        <h1>Biya Brook</h1>
        <h2>CS & Linguistics @ Stanford</h2>
        <p>I'm a freshman at Stanford interested in language education, web design, and machine learning. I have experience with <b className='special'>Python</b>, <b className='special'>C++</b>, and <b className='special'>Javascript</b>, as well as the <b className='special'>Next.js, React,</b> and <b className='special'>Flask</b> frameworks. I am passionate in leveraging software engineering and machine learning to improve language education and several other fields.</p>
        
        <div className='nav-words'>
    <a href="#experience" className="link">Experience</a>
    <span className="separator">-</span>
    <a href="#projects" className="link">Projects</a>
    <span className="separator">-</span>
    <a href="/resume.pdf" className="link" target="_blank" rel="noopener noreferrer">Resume</a>
</div>
        <div className='social-icons'>
        <a href='https://github.com/tremanus' target='_blank' rel='noreferrer'><GitHubIcon style={{ color: 'white', fontSize: '48px', position: 'absolute', left: '0px', top: '1px' }} /></a>
        <a href='https://www.linkedin.com/in/biya-brook-800984247/' target='_blank' rel='noreferrer'><LinkedInIcon style={{ color: 'white', fontSize: '52px', position: 'absolute', left: '65px' }} /></a>
        <a href='https://www.youtube.com/@yaboyb1527' target='_blank' rel='noreferrer'><YouTubeIcon style={{ color: 'white', fontSize: '60px', position: 'absolute', left: '130px', top: '-5px' }} /></a>
        <a href='https://www.instagram.com/biyabrook' target='_blank' rel='noreferrer'><InstagramIcon style={{ color: 'white', fontSize: '50px', position: 'absolute', left: '205px' }} /></a>
        <a href='mailto:bbrook@stanford.edu' target='_blank' rel='noreferrer'><EmailOutlinedIcon style={{ color: 'white', fontSize: '52px', position: 'absolute', left: '270px', top: '-1px' }} /></a>
    </div>
    </div>
    
    <div className='image-wrapper'>
        <img src="icon.jpg" alt="Profile" className="profile-image" />
    </div>
</div>
        <Experience />
        <Projects />
        </>
    )
}

export default Home;