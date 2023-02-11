import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Blogsidebar';

import authorimg from "../../../assets/img/blog-details/author.jpg";

import commentuser1 from '../../../assets/img/blog-details/avatar-1.jpg';
import commentuser2 from '../../../assets/img/blog-details/avatar-2.jpg';
import commentuser3 from '../../../assets/img/blog-details/avatar-3.jpg';

import blogimg from '../../../assets/img/blog-details/01.jpg';
import blogauthor from '../../../assets/img/blog-details/02.jpg';
import blogicon from '../../../assets/img/blog-details/icon.png';


import img1 from '../../../assets/img/blog-details/03.jpg';
import img2 from '../../../assets/img/blog-details/04.jpg';


const relatedtags = [
    { tag: 'Rings' },
    { tag: 'desgin' },
    { tag: 'necklace' },
];
const blogsocials = [
    { icon: 'fa-facebook-f', url: '#' },
    { icon: 'fa-twitter', url: '#' },
    { icon: 'fa-medium', url: '#' },
    { icon: 'fa-google-plus-g', url: '#' },
    { icon: 'fa-tumblr', url: '#' },
];
const relatedposts = [
    { img: img1, title: 'Non-Diamond Gemstones for Engagement Rings', text: 'Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.', postdate: '24th March 2022' },
    { img: img2, title: 'Non-Diamond Gemstones for Engagement Rings', text: 'Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.', postdate: '24th March 2022' },
];

class Content extends Component {
    render() {
        return (
            <section className="blog-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center column-reverse">
                        <div className="col-lg-12">
                            <div className="news-details-box">
                                <div className="entry-footer">
                                    <div className="author-info-box mb-45">
                                        <div className="author-img">
                                            <img src={authorimg} alt="" />
                                        </div>
                                        <div className="info-text">
                                            <span>Stylist</span>
                                            <h3>Kathy</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem.
                                            </p>
                                            <ul className="social-icon d-flex mt-45 justify-content-around">
                                                <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author-info-box mb-45">
                                        <div className="author-img">
                                            <img src={authorimg} alt="" />
                                        </div>
                                        <div className="info-text">
                                            <span>Stylist</span>
                                            <h3>Casandra</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem.
                                            </p>
                                            <ul className="social-icon d-flex mt-45 justify-content-around">
                                                <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author-info-box mb-45">
                                        <div className="author-img">
                                            <img src={authorimg} alt="" />
                                        </div>
                                        <div className="info-text">
                                            <span>Stylist</span>
                                            <h3>Melissa</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem.
                                            </p>
                                            <ul className="social-icon d-flex mt-45 justify-content-around">
                                                <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                                                <li><Link to="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blog Sidebar */}
                        {/* <div className="col-lg-4 col-md-8 col-sm-10">
                            <Sidebar />
                        </div> */}
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;