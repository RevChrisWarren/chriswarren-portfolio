import React, { useState, useEffect } from 'react';
import cwAvatar from "../../assets/cwavatar.jpeg"
import { capitalizeFirstLetter } from "../../utils/helpers"


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name)
    }, [currentCategory]);

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
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume">Resume</a>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;