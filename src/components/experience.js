import React from 'react';
import './experience.css';

const Experience = () => {
    return (
        <div id='experience'>
            <h1 className='section-title'>Experience</h1>
            <div className='timeline'>
                <div className='timeline-item'>
                    <div className='timeline-icon'>
                        <img src='/bch.png' alt="Boston Children's Hospital" />
                    </div>
                    <div className='timeline-content'>
                        <h2>Research Assistant</h2>
                        <h3>Boston Children's Hospital | June 2023 - August 2024</h3>
                        <div className='timeline-details'>
                            <p>• Trained and validated a <b className='special'>3D U-Net CNN ML model</b> to segment bones from MRI & CT scans</p>
                            <p>• Created <b className='special'>3D knee models</b> of ACL injuries using automatically segmented MRI data</p>
                            <p>• Pruned low-quality CT scans for optimized model training using MATLAB</p>
                        </div>
                    </div>
                </div>

                <div className='timeline-item'>
                    <div className='timeline-icon'>
                        <img src='/tutor.png' alt="Transform Tutoring" />
                    </div>
                    <div className='timeline-content'>
                        <h2>Math and SAT Tutor</h2>
                        <h3>Transform Tutoring | November 2024 - Present</h3>
                        <div className='timeline-details'>
                            <p>• Provide individualized 1 on 1 tutoring to Bay Area high school students over zoom and in person</p>
                        </div>
                    </div>
                </div>

                <div className='timeline-item'>
                    <div className='timeline-icon'>
                        <img src='/tcp.png' alt='The Calculus Project' />
                    </div>
                    <div className='timeline-content'>
                        <h2>Peer Tutor</h2>
                        <h3>The Calculus Project | July 2021 - August 2022</h3>
                        <div className='timeline-details'>
                            <p>• Tutored low-income students in Algebra 1, Algebra 2, Geometry, and Precalculus 25 hours a week</p>
                            <p>• Led teams of students to two 1st place wins at SuccessLink entrepreneurship hackathons</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;