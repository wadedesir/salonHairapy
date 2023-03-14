import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import $ from 'jquery';
import 'magnific-popup';

import img1 from '../../../assets/img/salon/chairs.JPG';
import img2 from '../../../assets/img/salon/products.JPG';
import img3 from '../../../assets/img/salon/wash.JPG';
import img4 from '../../../assets/img/salon/machines.JPG';
import img5 from '../../../assets/img/salon/closet.JPG';
import img6 from '../../../assets/img/salon/desk.JPG';
import img7 from '../../../assets/img/salon/closet2.JPG';
import img8 from '../../../assets/img/salon/corner.JPG';

import butterfly from '../../../assets/img/salon/butterfly.jpg'
import plaque from '../../../assets/img/salon/plaque.jpg'
import gold from '../../../assets/img/salon/gold.jpg'
import scissors from '../../../assets/img/salon/scissors.jpg'
import crown from '../../../assets/img/salon/crown.jpg'




const galleryposts = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
];
class Content extends Component {
    componentDidMount() {
        function popup() {
            $('.gallery-loop .popup-image').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                },
                mainClass: 'mfp-fade',
            });
        }
        popup();
    }
    render() {
        return (
            <div className="gallery-wrappper pt-120 pb-120">
                <div className="container">
                    <div className='gallery-loop loop-mobile columns-3 mb-5'>
                        <ReactWOW key='crown' animation="fadeInUp" data-wow-delay=".3s">
                            <div className="single-gallery-image d-flex justify-content-center">
                                <Link to={crown} className="popup-image">
                                    <img src={crown} alt="" className='salon-img' />
                                </Link>
                            </div>
                        </ReactWOW>
                        <ReactWOW key='gold' animation="fadeInUp" data-wow-delay=".3s">
                            <div className="single-gallery-image d-flex justify-content-center">
                                <Link to={gold} className="popup-image">
                                    <img src={gold} alt="" className='salon-img' />
                                </Link>
                            </div>
                        </ReactWOW>
                        <ReactWOW key='butterfly' animation="fadeInUp" data-wow-delay=".3s">
                            <div className="single-gallery-image d-flex justify-content-center">
                                <Link to={butterfly} className="popup-image">
                                    <img src={butterfly} alt="" className='salon-img' />
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                    <div className='gallery-loop loop-mobile mb-5'>
                        <ReactWOW key='plaque' animation="fadeInUp" data-wow-delay=".3s">
                            <div className="single-gallery-image d-flex justify-content-center">
                                <Link to={plaque} className="popup-image">
                                    <img src={plaque} width='335' height='512' alt="" />
                                </Link>
                            </div>
                        </ReactWOW>
                        <ReactWOW key='scissors' animation="fadeInUp" data-wow-delay=".3s">
                            <div className="single-gallery-image d-flex justify-content-center">
                                <Link to={scissors} className="popup-image">
                                    <img src={scissors} width='335' height='512' alt="" />
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>
                    <div className="gallery-loop columns-3 loop-mobile">
                        {galleryposts.map((item, i) => (
                            <ReactWOW key={i} animation="fadeInUp" data-wow-delay=".3s">
                                <div className="single-gallery-image">
                                    <Link to={item.img} className="popup-image">
                                        <img src={item.img} alt="" />
                                    </Link>
                                </div>
                            </ReactWOW>
                        ))}
                    </div>
                </div>
            </div >

        );
    }
}

export default Content;