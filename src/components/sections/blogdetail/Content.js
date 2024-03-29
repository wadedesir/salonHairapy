import React, { Component } from 'react';

import authorimg from "../../../assets/img/blog-details/author.jpg";

import img1 from '../../../assets/img/blog-details/03.jpg';
import img2 from '../../../assets/img/blog-details/04.jpg';

import kathy from '../../../assets/img/custom/kathy.jpg'
import menna from '../../../assets/img/menna.jpg'
import icon2 from '../../../assets/img/icon2.jpeg'

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
                                            <img src={kathy} alt="" />
                                        </div>
                                        <div className="info-text">
                                            <span>Master Stylist</span>
                                            <h3>Kathy</h3>
                                            <p>
                                                With a passion for hair and beauty mixed with a Bachelor's degree in Psychology, I have spent the last ten years working in various salons in Boston and New York to create a brand that believes in the therapy of the hair, body and soul - Hairapy!

                                                I have always had an interest in the visual arts, so it took no time to learn and develop make-up skills that allowed me to consistently venture into the exciting worlds of entertainment, weddings and even my signature “ambush make-overs”!

                                                I invite you to take a peek into “Salon Hairapy,” my first full service multicultural salon located at 902 Salem St. in Malden, MA. Through these photos, videos, special promotions, I want to share the knowledge I’ve collected over the years and showcase the craft that I love so much!!!

                                                "Get Your Dose" of everything Hairapy- therapy for your hair, body and soul!!
                                            </p>
                                            <ul className="social-icon d-flex mt-45 justify-content-around">
                                                <li><a className='contact-icons' href="https://twitter.com/kstarhair?t=Ho6JdHjQmncIThcHvmoAqQ&s=09"> <i className="fab fa-twitter" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.facebook.com/kstar.hair?mibextid=ZbWKwL"> <i className="fab fa-facebook" /> </a></li>
                                                <li><a className='contact-icons' href="https://instagram.com/melaninaire360?igshid=YmMyMTA2M2Y="> <i className="fab fa-instagram" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.linkedin.com/in/kathy-montrevil-ba32ab22"> <i className="fab fa-linkedin" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.snapchat.com/add/kstarhair2022?share_id=Xb6DrShcO6A&locale=en-US"> <i className="fab fa-snapchat" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.tiktok.com/@kstarbeauty?_t=8aZ5zhCx7aE&_r=1"> <i className="fab fa-tiktok" /> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author-info-box mb-45">
                                        <div className="author-img">
                                            <img src={icon2} alt="" />
                                        </div>
                                        <div className="info-text">
                                            <span>Lead Stylist</span>
                                            <h3>Cassandra</h3>
                                            <p>
                                                Coming soon...
                                            </p>
                                            <ul className="social-icon d-flex mt-45 justify-content-around">
                                                <li><a className='contact-icons' href="https://twitter.com/kstarhair?t=Ho6JdHjQmncIThcHvmoAqQ&s=09"> <i className="fab fa-twitter" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.facebook.com/kstar.hair?mibextid=ZbWKwL"> <i className="fab fa-facebook" /> </a></li>
                                                <li><a className='contact-icons' href="https://instagram.com/melaninaire360?igshid=YmMyMTA2M2Y="> <i className="fab fa-instagram" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.linkedin.com/in/kathy-montrevil-ba32ab22"> <i className="fab fa-linkedin" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.snapchat.com/add/kstarhair2022?share_id=Xb6DrShcO6A&locale=en-US"> <i className="fab fa-snapchat" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.tiktok.com/@kstarbeauty?_t=8aZ5zhCx7aE&_r=1"> <i className="fab fa-tiktok" /> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author-info-box mb-45">
                                        <div className="author-img">
                                            <img src={menna} alt="" />
                                        </div>
                                        <div className="info-text">
                                            <span>Receptionist</span>
                                            <h3>Menna</h3>
                                            <p>
                                                Coming soon...
                                            </p>
                                            <ul className="social-icon d-flex mt-45 justify-content-around">
                                                <li><a className='contact-icons' href="https://twitter.com/kstarhair?t=Ho6JdHjQmncIThcHvmoAqQ&s=09"> <i className="fab fa-twitter" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.facebook.com/kstar.hair?mibextid=ZbWKwL"> <i className="fab fa-facebook" /> </a></li>
                                                <li><a className='contact-icons' href="https://instagram.com/melaninaire360?igshid=YmMyMTA2M2Y="> <i className="fab fa-instagram" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.linkedin.com/in/kathy-montrevil-ba32ab22"> <i className="fab fa-linkedin" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.snapchat.com/add/kstarhair2022?share_id=Xb6DrShcO6A&locale=en-US"> <i className="fab fa-snapchat" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.tiktok.com/@kstarbeauty?_t=8aZ5zhCx7aE&_r=1"> <i className="fab fa-tiktok" /> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author-info-box mb-45">
                                        <div className="author-img">
                                            <img src={icon2} alt="" />
                                        </div>
                                        <div className="info-text">
                                            <span>Stylist</span>
                                            <h3>Christy</h3>
                                            <p>
                                                Coming soon...
                                            </p>
                                            <ul className="social-icon d-flex mt-45 justify-content-around">
                                                <li><a className='contact-icons' href="https://twitter.com/kstarhair?t=Ho6JdHjQmncIThcHvmoAqQ&s=09"> <i className="fab fa-twitter" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.facebook.com/kstar.hair?mibextid=ZbWKwL"> <i className="fab fa-facebook" /> </a></li>
                                                <li><a className='contact-icons' href="https://instagram.com/melaninaire360?igshid=YmMyMTA2M2Y="> <i className="fab fa-instagram" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.linkedin.com/in/kathy-montrevil-ba32ab22"> <i className="fab fa-linkedin" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.snapchat.com/add/kstarhair2022?share_id=Xb6DrShcO6A&locale=en-US"> <i className="fab fa-snapchat" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.tiktok.com/@kstarbeauty?_t=8aZ5zhCx7aE&_r=1"> <i className="fab fa-tiktok" /> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author-info-box mb-45">
                                        <div className="author-img">
                                            <img src={icon2} alt="" />
                                        </div>
                                        <div className="info-text">
                                            <span>Assistant Manager</span>
                                            <h3>Lauren</h3>
                                            <p>
                                                Coming soon...
                                            </p>
                                            <ul className="social-icon d-flex mt-45 justify-content-around">
                                                <li><a className='contact-icons' href="https://twitter.com/kstarhair?t=Ho6JdHjQmncIThcHvmoAqQ&s=09"> <i className="fab fa-twitter" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.facebook.com/kstar.hair?mibextid=ZbWKwL"> <i className="fab fa-facebook" /> </a></li>
                                                <li><a className='contact-icons' href="https://instagram.com/melaninaire360?igshid=YmMyMTA2M2Y="> <i className="fab fa-instagram" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.linkedin.com/in/kathy-montrevil-ba32ab22"> <i className="fab fa-linkedin" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.snapchat.com/add/kstarhair2022?share_id=Xb6DrShcO6A&locale=en-US"> <i className="fab fa-snapchat" /> </a></li>
                                                <li><a className='contact-icons' href="https://www.tiktok.com/@kstarbeauty?_t=8aZ5zhCx7aE&_r=1"> <i className="fab fa-tiktok" /> </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Content;