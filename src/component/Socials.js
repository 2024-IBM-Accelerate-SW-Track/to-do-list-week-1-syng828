import React from 'react'; 
import LinkedIn from "../assets/LinkedIn.png";
import Github from "../assets/Github.png";
import Gmail from "../assets/Gmail.png";

const socials = [
    {name: "LinkedIn", image: LinkedIn, link: "https://www.linkedin.com/in/stephanie-ng-/" },
    {name: "GitHub", image: Github, link: "https://github.com/syng828"},
    {name: "Gmail", image: Gmail, link: "mailto:syng828@gmail.com" }
]

const Socials = () => { 
    return (
        <div>
            <h2>Socials</h2>
            {socials.map((social) => (
               <a href = {social.link}> <img src = {social.image} alt = {social.name} style={{ width: 50 }}></img></a>
            ))}
        </div>
    )
}

export default Socials;