import React from 'react';
import resume from '../../assets/ChrisWarrenResume.pdf'

function Resume() {
    return (
        <section className="my-5 resumesection">
            <h1 id="resume" className="resumetitle">Chris Warren Resume</h1>
            <h3 className="resumeheader">Vanderbilt Full-Stack Bootcamp, July 2022</h3>
            <h4 className="resumehead">Current Skills</h4>
            <ol className="resumelist">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>noSQL</li>
                <li>PWAs</li>
                <li>REACT</li>
            </ol>
            <a href={resume} download>Download my resume</a>
        </section>
    );
}

export default Resume