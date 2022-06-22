import React from 'react';
import cwAvatar from "../../assets/cwavatar.jpeg"
import { capitalizeFirstLetter } from "../../utils/helpers"

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;


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
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About Me</a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume" onClick={() => setContactSelected(false)}>
                            Resume</a>
                    </li>

                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>

                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                    setContactSelected(false);
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