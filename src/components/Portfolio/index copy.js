import React from 'react';
import bankingpwa from "../../assets/projects/portfolio/BankingPWA.jpeg";
import lingo from "../../assets/projects/portfolio/Lingo.jpeg"
import natpark from "../../assets/projects/portfolio/Natpark.jpeg"
import password from "../../assets/projects/portfolio/Password.jpeg"
import scheduler from "../../assets/projects/portfolio/scheduler.jpeg"
import weather from "../../assets/projects/portfolio/WeatherApp.jpeg"


const Portfolio = () => {
    const portfolioContents = [
        {
            image: { lingo },
            title: 'Lingo',
            desc: 'An app to create flashcards in order to help learn another language.',
            github: 'https://github.com/RevChrisWarren/language-app',
            url: "https://mysterious-inlet-45382.herokuapp.com/"
        },
        {
            image: { natpark },
            title: 'National Park Finder',
            desc: 'An app to find national parks and travel times by state',
            github: 'https://github.com/matt-wiser/national-park-finder',
            url: "https://matt-wiser.github.io/national-park-finder/index.html"
        },
        {
            image: { bankingpwa },
            title: "Budget Tracker",
            desc: "An app to help track spending.",
            github: 'https://github.com/RevChrisWarren/BankingPWA',
            url: "https://fast-crag-15761.herokuapp.com/"

        },
        {
            image: { password },
            title: "Password Generator",
            desc: "A random Password Generator",
            github: 'https://github.com/RevChrisWarren/passwordGenerator',
            url: 'https://revchriswarren.github.io/passwordGenerator/'

        },
        {
            image: { scheduler },
            title: 'Day scheduler',
            desc: 'An app to keep track of dailty tasks.',
            github: 'https://github.com/RevChrisWarren/DayScheduler',
            url: "https://revchriswarren.github.io/DayScheduler/"

        },
        {
            image: { weather },
            title: 'Travel Weather App',
            desc: 'An app to find weather conditions by location.',
            github: 'https://github.com/RevChrisWarren/weatherapp',
            url: "https://revchriswarren.github.io/weatherapp/"

        }]


    return (
        <div className="flex-row">
            <div className="img-thumbnail mx-1">
                {portfolioContents.map((portfolioContents) => (
                    <Portfolio
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
        </div>

    )

}
export default Portfolio