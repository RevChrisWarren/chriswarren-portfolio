import React, { useEffect } from 'react';
import cwAvatar from "../../assets/cwavatar.jpeg"
import { capitalizeFirstLetter } from "../../utils/helpers"

const projects = [
    {
        name: "Budget Tracker",
        description: "An app to help track spending"
    },
    {
        name: "lingo",
        description: "An app to create flashcards in order to help learn another language."
    },
    {
        name: "National Park Finder",
        description: "An app to find national parks and travel times by state."
    },
    {
        name: "Password Generator",
        description: "A random password generator"

    },
    {
        name: "Day Scheduler",
        description: "An app to keep track of daily tasks"

    },
    {
        name: "Weather Tracker",
        description: "An app to find weather conditions"
    }
]


function Nav() {

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="cwavatar">
                        <img className="avatar" src={cwAvatar} alt="Chris Avatar" ></img>
                    </span> Chris Warren Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;