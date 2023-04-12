import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import $ from 'jquery';
import 'magnific-popup';
import Pagination from '../../layouts/Pagination-gallery';


const Content = ({ galleryposts }) => {

    function popup() {
        $('.gallery-loop .popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
            mainClass: 'mfp-fade',
        });
    }


    React.useEffect(() => {
        popup();
    })

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

export default Content;