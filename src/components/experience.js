import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import './experience.css';

const Experience = () => {
    return (
        <div id='experience'>
            <div className='hero-section'>
                <h3 className='experience-title' style={{marginBottom: '80px'}}>Experience</h3>
                <Timeline position="alternate">
      <TimelineItem style={{marginBottom: '80px'}}>
        <TimelineOppositeContent color='#cfe2e3'>
        <b><i>July 2021 - August 2022</i></b>
        <img className='company-img' alt='calcproject' src='/tcp.png' />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className='timeline-item'>
                <p className='timeline-title'><b>Peer Tutor | The Calculus Project</b></p>
                <p className='timeline-content'>- Tutored low-income students in Algebra 1, Algebra 2, Geometry, and Precalculus 25 hours a week</p>
                <p className='timeline-content'>- Led teams of students to two 1st place wins at SuccessLink entrepreneurship hackathons</p>
            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='#cfe2e3'>
        <b><i>June 2023 - August 2024</i></b>
        <img className='company-img' alt='calcproject' src='/bch.png' />
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color='#cfe2e3'>
        <div className='timeline-item'>
                <p className='timeline-title'><b>Research Assistant | Boston Children’s Hospital</b></p>
                <p className='timeline-content'>- Trained and validated a <b className='special'>3D U-Net CNN ML model</b> to segment bones from MRI & CT scans</p>
                <p className='timeline-content'>- Created <b className='special'>3D knee models</b> of ACL injuries using automatically segmented MRI data</p>
                <p className='timeline-content'>- Pruned low-quality CT scans for optimized model training using MATLAB  </p>
            </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
            </div>
        </div>
    )
}

export default Experience;