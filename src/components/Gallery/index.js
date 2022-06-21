import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Portfolio from '../Portfolio';


function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;


    return (
        <section>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <Portfolio category={currentCategory.name} />


        </section>
    )
}

export default Gallery;