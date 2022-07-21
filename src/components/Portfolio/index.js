import React from 'react';

import PortfolioCard from "../PortfolioCard";

const Portfolio = () => {
    const portfolioContents = [
        {
            image: "/portfolio/Raymond.jpeg",
            title: "Raging Raymond Fluke Tournament",
            desc: "A site for a fishing tournament to fight the VAMP2 disorder",
            github: "https://github.com/swazunga/raging-raymond-project",
            url: "https://raging-raymond.herokuapp.com/"
        },
        {
            image: "/portfolio/Lingo.jpeg",
            title: 'Lingo',
            desc: 'An app to create flashcards in order to help learn another language',
            github: 'https://github.com/RevChrisWarren/language-app',
            url: "https://mysterious-inlet-45382.herokuapp.com/"
        },
        {
            image: "/portfolio/Natpark.jpeg",
            title: 'National Park Finder',
            desc: 'An app to find national parks and travel times by state',
            github: 'https://github.com/matt-wiser/national-park-finder',
            url: "https://matt-wiser.github.io/national-park-finder/index.html"
        },
        {
            image: "/portfolio/BankingPWA.jpeg",
            title: "Budget Tracker",
            desc: "An app to help track spending.",
            github: 'https://github.com/RevChrisWarren/BankingPWA',
            url: "https://fast-crag-15761.herokuapp.com/"

        },
        {
            image: "/portfolio/Password.jpeg",
            title: "Password Generator",
            desc: "A random Password Generator",
            github: 'https://github.com/RevChrisWarren/passwordGenerator',
            url: 'https://revchriswarren.github.io/passwordGenerator/'

        },
        {
            image: "/portfolio/scheduler.jpeg",
            title: 'Day scheduler',
            desc: 'An app to keep track of dailty tasks.',
            github: 'https://github.com/RevChrisWarren/DayScheduler',
            url: "https://revchriswarren.github.io/DayScheduler/"

        },
        {
            image: "/portfolio/WeatherApp.jpeg",
            title: 'Travel Weather App',
            desc: 'An app to find weather conditions by location.',
            github: 'https://github.com/RevChrisWarren/weatherapp',
            url: "https://revchriswarren.github.io/weatherapp/"

        }]


    return (
        <div className="flex-row">

            {portfolioContents.map((portfolioContents) => (
                <PortfolioCard
                    key={portfolioContents._id}
                    _id={portfolioContents._id}
                    image={portfolioContents.image}
                    title={portfolioContents.title}
                    desc={portfolioContents.desc}
                    github={portfolioContents.github}
                    url={portfolioContents.url}
                />
            ))}

        </div>

    )

}
export default Portfolio