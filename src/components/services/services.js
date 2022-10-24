import React from "react";
import './services.css';
import { BsCheck } from 'react-icons/bs'

function services() {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>

                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>

                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>
                        <li>
                            <BsCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicin</p>
                        </li>

                    </ul>
                </article>
            </div>

        </section>
    )
}

export default services;