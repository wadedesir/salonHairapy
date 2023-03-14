import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import $ from 'jquery';
import 'magnific-popup';
import Pagination from '../../layouts/Pagination';

import img1 from '../../../assets/img/hairapy/IMG_15472.jpg';
import img2 from '../../../assets/img/hairapy/blondesewin.jpg';
import img3 from '../../../assets/img/hairapy/SH_kid.twists2.jpeg';
import img4 from '../../../assets/img/hairapy/IMG_2718.jpg';
import img5 from '../../../assets/img/hairapy/IMG_2944.jpg';
import img6 from '../../../assets/img/hairapy/IMG_5193.jpg';
import img7 from '../../../assets/img/hairapy/IMG_12142.jpg';
import img8 from '../../../assets/img/hairapy/SH_bridalsilly2.jpg';
import img9 from '../../../assets/img/hairapy/IMG_54302.jpg';

const galleryposts = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
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
                    <div className="gallery-loop columns-3">
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
                <div className="pagination-wrap mt-50">
                    <Pagination />
                </div>
            </div >


        );
    }
}

export default Content;