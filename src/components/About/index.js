import React from 'react';
import coverImage from "../../assets/computerbackground.jpg"


function About() {
    return (
        <section className="my-5 aboutsection">
            <h1 id="about">About Me</h1>
            <h4 className="aboutsection">I have an unusual background for a developer. I started out studying music. I have a bachelor's degree in
                voice from Vanderbilt University and a master's degree in voice from the University of Michigan.
                I served several churches as music director, and was called to the ministry. I completed a Master of
                Divinity degree from Vanderbilt University, and have been serving as a full-time minister for 14 years.
                I've always loved computers and dabbling. I decided to make a change and am working toward a career as a
                developer.
            </h4>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

        </section>
    );
}

export default About