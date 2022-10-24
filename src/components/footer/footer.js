import React from "react";
import './footer.css';
import {BsInstagram} from'react-icons/bs'
import {BsLinkedin} from'react-icons/bs'
import {BsGithub} from'react-icons/bs'



function Footer(){
    return <div className="footer">
        <a href="#" className="footer__logo"></a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://www.instagram.com/mdathar44__/"><BsInstagram/></a>
            <a href="https://www.linkedin.com/in/md-athar-0b0abb239"><BsLinkedin/></a>
            <a href="https://github.com/mdathar4403"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Md Athar .All rights reserved.</small>
        </div>
    </div>
}

export default Footer;