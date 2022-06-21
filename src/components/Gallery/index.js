import React from 'react';
import photo from "../../assets/Projects/BankingPWA.png"

function Gallery(props) {
    const currentProject = {
        name: "projects",
        description: "screenshots of projects by developer Chris Warren"
    }
    return (
        <section>
            <h1>{currentProject.name}</h1>
            <p>{currentProject.name}</p>
            <div>
                <img
                    src={photo}
                    alt="Project Example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    )
}

export default Gallery;