import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about-section'>
        <div className='hero-section' id="about">
        <h3 className='about-title'>About Me</h3>
        <hr></hr>
        <h6 className="about-text">I'm Biya, a freshman at Stanford interested in language education, web design, and machine learning. I've loved learning languages since I was young, and have just recently began coding this summer (2024). So far, I'm having a blast and have learnt so much through experimenting and making my ideas come to life.</h6>
        <h6 className="about-text">Today, along with taking CS coursework at Stanford, I am experimenting and learning many coding skills by creating various projects. In high school, I created <b className='special'>ScholaLatinae</b>, a 501(c)(3) non-profit website for teaching people Latin & Greek in a free and fun way. Recently, I revamped the practice and leaderboard feature using Flask and plan to migrate the entire website from Squarespace to Next.js soon.</h6>
        <h6 className="about-text">I also this summer working on a few more projects, including <b className='special'>InboxRecap</b>. Using the Gmail API & OpenAI API, it is an email management service that gives people daily summaries of their inbox and unsubscribes from annoying mailing lists.</h6>
        <h6 className="about-text">As I continue college and coding, I hope to get a stronger understanding of Python & Javascript and ultimately use what I've learned to better the world.</h6>
        </div>
        <img src='/picture.jpg' alt='Biya at Stanford' className='stanford-picture' />
        </div>
    )
}

export default About;