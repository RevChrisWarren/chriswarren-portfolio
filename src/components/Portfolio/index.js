import React from 'react';
import bankingpwa from "../../assets/projects/portfolio/BankingPWA.jpeg";
import lingo from "../../assets/projects/portfolio/Lingo.jpeg"
import natpark from "../../assets/projects/portfolio/Natpark.jpeg"
import password from "../../assets/projects/portfolio/Password.jpeg"
import scheduler from "../../assets/projects/portfolio/scheduler.jpeg"
import weather from "../../assets/projects/portfolio/WeatherApp.jpeg"


const Portfolio = ({ category }) => {



    return (
        <div className="flex-row">
            <div className="img-thumbnail mx-1">
                <img src={lingo} alt="lingophoto" />
                <h3>Lingo</h3>
                <p>An app to create flashcards in order to help learn another language.</p>
                <h4><a href="https://mysterious-inlet-45382.herokuapp.com/">LINGO Language Learner</a></h4>
            </div>
            <div className="img-thumbnail mx-1">
                <img src={natpark} alt="natparkphoto" />
                <h3>National Park Finder</h3>
                <p>An app to find national parks and travel times by state.</p>
                <h4><a href="https://matt-wiser.github.io/national-park-finder/index.html">National Park Finder</a></h4>
            </div>
            <div className="img-thumbnail mx-1">
                <img src={bankingpwa} alt="budgetphoto" />
                <h3>Budget Tracker</h3>
                <p>An app to help track spending.</p>
                <h4><a href="https://fast-crag-15761.herokuapp.com/">Budget Tracker</a></h4>
            </div>
            <div className="img-thumbnail mx-1">
                <img src={password} alt="passwordphoto" />
                <h3>Password Generator</h3>
                <p>A random password generator.</p>
                <h4><a href="https://revchriswarren.github.io/passwordGenerator/">Password Generator</a></h4>
            </div>
            <div className="img-thumbnail mx-1">
                <img src={scheduler} alt="schedulerphoto" />
                <h3>Day Scheduler</h3>
                <p>An app to keep track of daily tasks.</p>
                <h4><a href="https://revchriswarren.github.io/DayScheduler/">Dayscheduler</a></h4>
            </div>
            <div className="img-thumbnail mx-1">
                <img src={weather} alt="weatherphoto" />
                <h3>Travel Weather App</h3>
                <p>An app to find weather conditions.</p>
                <h4><a href="https://revchriswarren.github.io/weatherapp/">Travel Weather App</a></h4>
            </div>
        </div>
    )
}

export default Portfolio