import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component';
import ReactWOW from 'react-wow';

import finity from '../../assets/img/hairfinity.jpg'

class Habout extends Component {
    render() {
        const imagesLoadedOptions = {
            itemSelector: '.col-sm-6',
            percentPosition: false,
            resize: true,
            fitWidth: true
        };
        return (
            <section className="about-section pt-115 pb-115">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <ReactWOW animation='fadeInRight' data-delay=".3s">
                            <div className="col-lg-6 col-md-8 col-sm-10">
                                <div className="abour-text pl-50 pr-50">
                                    <div className="section-title mb-30">
                                        <span className="title-tag">Promotion</span>
                                        <h2>Hairfinity</h2>
                                    </div>
                                    <p className="mb-30">
                                        Hairfinity is a complete hair care system that works from the inside out. Our holistic approach includes vitamin supplements paired with a full range of hair care products to repair, nourish and protect each strand from root to tip.
                                    </p>
                                    <p className="mb-30" >
                                        <strong></strong> On a quest to find solutions to her own hair challenges, Tymeka Lawrence created Hairfinity, a global hair care company. Hairfinity’s success is due to Tymeka’s go-getter attitude, incredible products that work, and millions of satisfied customers who shared their love of Hairfinity with their friends.</p>
                                    <p className="" >
                                        <strong></strong> Our products contain only pure, gentle ingredients that work with your hair, not against it. We leave out what we call The Awful 8: Silicones, sulfates, mineral oils/petroleum, parabens, phthalates, PEG, propylene glycol, chlorine and formaldehyde
                                    </p>
                                    <a href='https://www.hairfinity.com' className="main-btn btn-filled mt-40">Visit</a>
                                </div>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation='fadeInLeft' data-delay=".3s">
                            <div className="col-lg-6 col-md-10">
                                <Masonry className="row about-features-boxes fetaure-masonary" imagesLoadedOptions={imagesLoadedOptions}>
                                    <div className='m-3'>
                                        <img src={finity} alt="picture of hair products" />
                                    </div>
                                </Masonry>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
                <div className="about-right-bottom">
                    <div className="about-bottom-img">
                        {/* <img src={aboutbottomimg} alt="" /> */}
                    </div>
                </div>
            </section>

        );
    }
}

export default Habout;