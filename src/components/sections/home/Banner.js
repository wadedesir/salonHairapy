import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ReactWOW from 'react-wow';
import Cursor from '../../layouts/Cursor';

// import img1 from '../../../assets/img/custom/kathy.jpg';
import img2 from '../../../assets/img/banner/landing1.jpg';

const bannerposts = [
    // { img: img1 },
    { img: img2 },
]

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: false,
        }
        return (
            <section className="banner-area banner-style-one position-relative">
                {/* Follow Circle                             <li>
                               <Link to="https://www.tiktok.com/@salonhairapy"> <i className="fab fa-tiktok" /> Tiktok </Link>
                            </li>
 */}
                <Cursor />
                <ReactWOW animation='fadeIn' data-delay=".3s">
                    <div className="d-md-block vertical-text">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/SalonHairapyMalden"> <i className="fab fa-facebook" /> Facebook </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/salonhairapymalden/?hl=en"> <i className="fab fa-instagram" /> Instagram </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@salonhairapy" ><i className="fab fa-tiktok" /> tiktok </a>
                            </li>

                        </ul>
                    </div>
                </ReactWOW>
                <ReactWOW animation='fadeIn' data-delay=".3s">
                    <div className=" d-md-block vertical-text right">
                        <span>Call us on: </span>
                        <span>+1 (781) 480-3629</span>
                    </div>
                </ReactWOW>
                <div className="container container-custom-two">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="banner-content">
                                <ReactWOW animation='fadeInDown' data-delay=".3s">
                                    <span className="promo-tag" >Where Hair Meets Therapy</span>
                                </ReactWOW>
                                <ReactWOW animation='fadeInLeft' data-delay=".5s">
                                    <h1 className="title">Welcome To <br />Salon Hairapy</h1>
                                </ReactWOW>
                                <ul>
                                    <li>
                                        <ReactWOW animation='fadeInUp' data-delay=".7s">
                                            <Link className="main-btn btn-filled book-btn" to="/book-appointment">Book Now</Link>
                                        </ReactWOW>
                                    </li>
                                    <li>
                                        <ReactWOW animation='fadeInUp' data-delay=".9s">
                                            <a className="main-btn btn-border" href="https://squareup.com/gift/6B3KQJN1024K7/order">
                                                Purchase Giftcard
                                            </a>
                                            {/* <Link className="main-btn btn-border" to="/about"></Link> */}
                                        </ReactWOW>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ReactWOW animation='fadeInRight' data-delay="0.5s">
                            <div className="col-lg-6 col-md-6 picture-banner">
                                <div className="banner-thumb d-md-block">
                                    <Slider className="carousel hero-slider-one" {...settings}>
                                        {bannerposts.map((item, i) => (
                                            <div key={i} className="single-thumb">
                                                <img src={item.img} alt="images" />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                </div >
            </section >
        );
    }
}

export default Banner;