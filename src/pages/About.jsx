import React from 'react';
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import './About.css' 

export const About = () => {
    return (
        <div className='about-container'>
            <div className="holder"><h3>About us </h3>
            <div className="about-section">
                <img src={about1} alt="About1" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat libero accusamus minus deleniti quaerat aut ipsa, quidem placeat mollitia architecto dolorem fugit facere rem labore blanditiis corrupti cupiditate earum?</p>
            </div>
            <div className="about-section">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nam architecto vitae, placeat incidunt ipsa alias expedita, blanditiis ratione esse sequi ab dolores rem reprehenderit corrupti tempora assumenda nulla totam?</p>
                <img src={about2} alt="About2" />

            </div>
            </div>
            

        </div>
    );
};
