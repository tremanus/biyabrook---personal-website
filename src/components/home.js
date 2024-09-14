import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import About from './about';
import Experience from './experience';
import './home.css'

const Home = () => {
    return (
        <>
        <div className='hero-section'>
            <h4>Hello, I am</h4>
            <h1>Biya Brook</h1>
            <h2>College Student & Developer</h2>
            <p>I am a current freshman at <b className='special'>Stanford University</b> studying Computer Science. I have experience with <b className='special'>Javascript</b> and <b className='special'>Python</b>, as well as the <b className='special'>Next.js, React,</b> and <b className='special'>Flask</b> frameworks. I am passionate in leveraging software engineering and machine learning to improve language education and several other fields.</p>
            <div className='social-icons'>
                <a href='https://github.com/tremanus' target='_blank' rel='noreferrer'><GitHubIcon style={{ color: 'white', fontSize: '48px', position: 'absolute', left: '0px', top: '1px' }} /></a>
                <a href='https://www.linkedin.com/in/biya-brook-800984247/' target='_blank' rel='noreferrer'><LinkedInIcon style={{ color: 'white', fontSize: '52px', position: 'absolute', left: '65px' }} /></a>
                <a href='https://www.youtube.com/@yaboyb1527' target='_blank' rel='noreferrer'><YouTubeIcon style={{ color: 'white', fontSize: '60px', position: 'absolute', left: '130px', top: '-5px' }} /></a>
                <a href='https://www.instagram.com/biyabrook' target='_blank' rel='noreferrer'><InstagramIcon style={{ color: 'white', fontSize: '50px', position: 'absolute', left: '205px' }} /></a>
                <EmailOutlinedIcon style={{ color: 'white', fontSize: '52px', position: 'absolute', left: '270px', top: '-1px' }} />
            </div>
        </div>
        <About />
        <Experience />
        </>
    )
}

export default Home;