import React, { useState } from 'react';
import './espn.css';

const Espn = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleHeadshotError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = '/icon.jpg';
    };

    return (
        <div className="espn">
            <section className="espn-hero">
                <img
                    src="/stanford.webp"
                    alt=""
                    aria-hidden="true"
                    className="espn-watermark"
                />

                <div className="espn-hero__grid">
                    <div className="espn-headshot">
                        <img
                            src="/biya.png"
                            alt="Biya Brook headshot"
                            className="espn-headshot__img"
                            onError={handleHeadshotError}
                        />
                    </div>

                    <div className="espn-bio">
                        <div className="espn-name" role="heading" aria-level={1}>
                            <span className="espn-name__first">BIYA</span>
                            <span className="espn-name__last">BROOK</span>
                        </div>
                        <p className="espn-subline">
                            <img src="/stanford.webp" alt="" aria-hidden="true" className="espn-subline__logo" />
                            Stanford Cardinal   •   CS &amp; Linguistics
                        </p>
                        <a
                            className="espn-resume"
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </div>

                    <div className="espn-facts" aria-label="Player quick facts">
                        <div className="espn-fact">
                            <div className="espn-fact__label">CLASS</div>
                            <div className="espn-fact__value">Sophomore</div>
                        </div>
                        <div className="espn-fact">
                            <div className="espn-fact__label">HT/WT</div>
                            <div className="espn-fact__value">6'2", 170 lbs</div>
                        </div>
                        <div className="espn-fact">
                            <div className="espn-fact__label">BIRTHPLACE</div>
                            <div className="espn-fact__value">Boston, MA</div>
                        </div>
                    </div>

                    <aside className="espn-stats" aria-label="2024–25 Career Stats">
                        <div className="espn-stats__header">2025–26 CAREER STATS</div>
                        <div className="espn-stats__grid">
                            <div className="espn-stat">
                                <div className="espn-stat__label">GPA</div>
                                <div className="espn-stat__value">3.91</div>
                            </div>
                            <div className="espn-stat">
                                <div className="espn-stat__label">YT VIEWS</div>
                                <div className="espn-stat__value">75.9K</div>
                            </div>
                            <div className="espn-stat">
                                <div className="espn-stat__label">COMMITS</div>
                                <div className="espn-stat__value">459</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <nav className="espn-tabs" role="tablist">
                {['Overview', 'Projects', 'Experience', 'Contact'].map((tab) => (
                    <a
                        key={tab}
                        href={`#${tab.toLowerCase()}`}
                        className={`espn-tab ${activeTab === tab ? 'espn-tab--active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                        role="tab"
                        aria-selected={activeTab === tab}
                    >
                        {tab}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Espn;


