import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component';
import ReactWOW from 'react-wow';

// About img
import aboutimg1 from '../../assets/img/feature/04.jpg';
import aboutimg2 from '../../assets/img/feature/05.jpg';
import aboutbottomimg from '../../assets/img/bg/03.jpg';
import awa from '../../assets/img/awa.jpeg'

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
                                        <span className="title-tag">Service</span>
                                        <h2>Awapuhi Intensive Treatments</h2>
                                    </div>
                                    <p className="mb-30">
                                        Need Intense Hydration or Repair? #GetYourDose by adding a 15-min Awapuhi Intensive Deep Conditioner from Paul Mitchell to your next service to rebuild and revive your hair!
                                    </p>
                                    <p className="mb-30" >
                                        <strong>For Damaged/Chemically Treated Hair:</strong> Our Keratriplex™ treatment is a 2-step repair process that restores texture, prevents color fade and improves shine using isolated proteins virtually identical to keratin in human hair                                    </p>
                                    <p className="" >
                                        <strong>For Dry/Frizzy Hair:</strong> Our HydraTriplex Treatment used a concentrated blend of amino acids, vegetable proteins and nourishing oils to hydrate, smooth and soften hair
                                    </p>
                                    <Link to="/contact" className="main-btn btn-filled mt-40"> Know More</Link>
                                </div>
                            </div>
                        </ReactWOW>
                        <ReactWOW animation='fadeInLeft' data-delay=".3s">
                            <div className="col-lg-6 col-md-10">
                                <Masonry className="row about-features-boxes fetaure-masonary" imagesLoadedOptions={imagesLoadedOptions}>
                                    {/* <div className="col-sm-6">
                                        <div className="single-feature-box">
                                            <div className="icon">
                                                <i className="flaticon-ring" />
                                            </div>
                                            <h4><Link to="#">New Rings</Link></h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="single-feature-box only-bg mt-30" style={{ backgroundImage: "url(" + aboutimg1 + ")" }}>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="single-feature-box only-bg mt-30" style={{ backgroundImage: "url(" + aboutimg2 + ")" }}>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="single-feature-box dark mt-30">
                                            <div className="icon">
                                                <i className="flaticon-necklace" />
                                            </div>
                                            <h4><Link to="#">Wedding Collection</Link></h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                                            </p>
                                        </div>
                                    </div> */}
                                    <div>
                                        <img src={awa} alt="picture of hair products" />
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