import React from "react";

const PortfolioCard = ({ image, title, desc, github, url }) => {
    return (<>

        <div className="img-thumbnail mx-1">
            <img src={process.env.PUBLIC_URL + image} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <h4><a href={url}>{title}</a></h4>
            <h4><a href={github}>{title} GitHub</a></h4>
        </div>

    </>)
}


export default PortfolioCard;