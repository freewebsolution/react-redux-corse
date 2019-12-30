import React from 'react'

const Hero = ({ hero, toggleImportance,deleteHero }) => {
    const label = hero.important ? 'Remove important' : 'Add important'
    return (
        <li>
            {hero.name}
            <button onClick={toggleImportance}>
                {label}
            </button>
            <button style={{marginLeft:'10px'}} onClick={deleteHero}>Delete</button>
        </li>
    );
}

export default Hero;