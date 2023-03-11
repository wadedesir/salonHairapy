import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Backtotop from './Backtotop';

import logo from '../../assets/img/logo-thin.jpg'

const Footerthree = ({ contactCard }) => {
    return (
        <Fragment>
            <Backtotop />
            <footer>
                <div className="footer-subscibe-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="subscribe-text text-center">
                                    <div className="footer-logo mb-45">
                                        <img style={{ width: '50%' }} src={contactCard ? contactCard : logo} alt="images" />
                                    </div>
                                    <p>
                                    Have an appointment request, question or concern? Send us a message! Want to send a photo? 
Email us directly at SalonHairapy4u@gmail.com - PLEASE NOTE if you do NOT receive a CONFIRMATION e-mail you DO NOT have an appointment!
                                    </p>
                                    <form action="#" className="subscribe-form mt-50">
                                        <input type="email" placeholder="Enter your email address" />
                                        <button type="submit">subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area pt-20 pb-20">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5 order-2 order-md-1">
                                <p className="copyright-text">copyright by@Yourwebsite</p>
                            </div>
                            <div className="col-md-7 order-1 order-md-2">
                                <div className="social-links ">
                                    <a href="https://twitter.com/SalonHairapy"> <i className="fab fa-twitter" /> </a>

                                    <a href="https://www.yelp.com/biz/salon-hairapy-malden"> <i className="fab fa-yelp" /> </a>

                                    <a href="https://www.yelp.com/biz/salon-hairapy-malden"> <i className="fab fa-linkedin" /> </a>

                                    <a href="https://www.yelp.com/biz/salon-hairapy-malden"> <i className="fab fa-youtube" /> </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footerthree;