import React from 'react';
import './experience.css';

const Experience = () => {
    return (
        <div id='experience'>
            <h1 className='section-title'>Experience</h1>
            <div className='timeline'>
                <div className='timeline-item'>
                    <div className='timeline-icon'>
                        <img src='/ba.jpeg' alt="Burton Algorithms" />
                    </div>
                    <div className='timeline-content'>
                        <h2>Software Engineer</h2>
                        <h3>Burton Algorithms | April 2025 - Present</h3>
                        <div className='timeline-details'>
                            <p>• Lead the development of full stack, AI-first applications from concept to production for startups</p>
                            <p>• Built <span className='special'>ConcertBuddy</span>, a full-stack social concert discovery app integrating Ticketmaster and RevenueCat; engineered user-matching logic and popularity-based concert ranking from scratch</p>
                        </div>
                    </div>
                </div>

                <div className='timeline-item'>
                    <div className='timeline-icon'>
                        <img src='/hms.png' alt="Harvard Medical School & Boston Children's Hospital" />
                    </div>
                    <div className='timeline-content'>
                        <h2>Machine Learning Researcher</h2>
                        <h3>Harvard Medical School &amp; Boston Children's Hospital | June 2023 - August 2024</h3>
                        <div className='timeline-details'>
                            <p>• Trained and validated a <span className='special'>3D U-Net CNN ML model</span> on MRI &amp; CT scans to segment bones</p>
                            <p>• Created <span className='special'>3D knee models</span> of ACL injuries for mock surgeries using automatically segmented MRI data</p>
                            <p>• Performed statistical analysis for pre-operational &amp; post-operational clinical notes classification</p>
                        </div>
                    </div>
                </div>

                <div className='timeline-item'>
                    <div className='timeline-icon'>
                        <img src='/schola.png' alt="Schola Latinae" />
                    </div>
                    <div className='timeline-content'>
                        <h2>Lead Software Engineer &amp; Founder</h2>
                        <h3>Schola Latinae | April 2023 - Present</h3>
                        <div className='timeline-details'>
                            <p>• Developed an educational platform using Next.js that helps <span className='special'>over 4,000 students</span> learn Latin &amp; Greek</p>
                            <p>• Programmed a recommendation algorithm for practice questions with over <span className='special'>10k qs answered</span></p>
                            <p>• Produce video lessons with <span className='special'>3,000+ views</span> on YouTube</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;