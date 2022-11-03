import React from "react";
import './header.css';
import CTA from "./CTA";
import ME from "../../assets/me.png"
import HeaderSocial from "./HeaderSocial";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Md Athar</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="30"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"

                >
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>

            </div>
        </header>

    )
}

export default Header;
