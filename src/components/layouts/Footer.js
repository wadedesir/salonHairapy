import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import logo from '../../assets/img/logo.png';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // Back to top
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 300
            });
        }, false);
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const Map = ReactMapboxGl({
            accessToken:
                'pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg'
        });
        return (
            <footer className="sigma-footer">
                <div className="sigma-footer-top">
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6">
                                        {/*====== Back to top ======*/}
                                        <div className="sigma-backto-top">
                                            <Link to="#" className="back-to-top" id="backToTop" onClick={() => this.scrollToTop()}>
                                                <i className="fal fa-chevron-up" /> Back to Top
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">

                                    </div>
                                </div>
                                {/*====== Footer content ======*/}
                                {/* <div className="sigma-footer-box">
                                    <div className="sigma-footer-box-top">
                                        <div className="ft-logo">
                                            <Link to="/">
                                                <img src={logo} alt="Logo" />
                                            </Link>
                                        </div>
                                        <ul className="ft-social-media">
                                            <li>
                                                <Link to="https://www.facebook.com/SalonHairapyMalden"> <i className="fab fa-facebook" /> </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.instagram.com/salonhairapymalden/?hl=en"> <i className="fab fa-instagram" /> </Link>
                                            </li>
                                            <li>
                                                <Link to="https://twitter.com/SalonHairapy"> <i className="fab fa-twitter" />  </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.tiktok.com/@salonhairapy"> <i className="fab fa-tiktok" />  </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.yelp.com/biz/salon-hairapy-malden"> <i className="fab fa-yelp" /> </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sigma-footer-nav">
                                        <ul className="ft-nav">
                                            <li className="menu-item">
                                                <Link to="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/about">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/blog-grid">
                                                    News
                                                </Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/gallery">
                                                    Gallery
                                                </Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/contact">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="col-lg-4">
                                <Map
                                    // eslint-disable-next-line react/style-prop-object
                                    style="mapbox://styles/mapbox/light-v10"
                                    className="contact-maps"
                                >
                                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                                        <Feature coordinates={[-77.04, 38.907]} zoom={11.5} />
                                    </Layer>
                                </Map>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="sigma-footer-bottom">
                    <div className="container-fluid">
                        <div className="sigma-footer-bottom-inner">
                            <div className="row no-gutters align-items-end">
                                <div className="col-lg-6">
                                    <div className="sigma-footer-contact">
                                        <ul>
                                            <li>
                                                <i className="flaticon-phone" />
                                                <Link> <a href="tel:7814803629"> <span style={{ color: 'white' }}>Phone Number</span>(781) 480-3629</a></Link>
                                            </li>
                                            <li>
                                                <i className="flaticon-message" />
                                                <Link ><a href="mailto:SalonHairapy4u@gmail.com">  <span style={{ color: 'white' }}>Email Address</span>SalonHairapy4u@gmail.com </a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    {/* <div className="sigma-footer-search">
                                        <form>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <button><i className="fal fa-search" /></button>
                                                </div>
                                                <input type="text" name="#" className="form-control" placeholder="Search..." />
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                                <div className="col-lg-3">
                                    <div className="sigma-footer-contact style-2">
                                        <ul>
                                            <li>
                                                <i className="flaticon-location-pin" />
                                                <Link to="#"><span>Office Address</span> 902 SALEM ST MALDEN, MA 02148</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="sigma-copyright d-none">
                    <div className="container-fluid">
                        <div className="sigma-copyright-inner">
                            <div className="row">
                                <div className="col-lg-6 col-md-5 order-2 order-md-1">
                                    <p className="sigma-copyright-text">Copyright By@<Link to="#">Salon Hairapy</Link> - 2023</p>
                                </div>
                                <div className="col-lg-6 col-md-7 order-1 order-md-2">
                                    <div className="sigma-copyright-menu">
                                        <ul>
                                            <li>
                                                <Link to="#">Terms of use</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Privacy Environmental Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >

        );
    }
}

export default Footer;