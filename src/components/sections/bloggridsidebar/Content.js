import React, { Component } from 'react';
import Pagination from '../../layouts/Pagination';

import video from '../../../assets/videos/egg.mp4'

import img1 from '../../../assets/img/latest-post/01.jpg';
import img2 from '../../../assets/img/latest-post/02.jpg';
import img3 from '../../../assets/img/latest-post/03.jpg';
import img4 from '../../../assets/img/latest-post/04.jpg';
import img5 from '../../../assets/img/latest-post/05.jpg';
import img6 from '../../../assets/img/latest-post/06.jpg';

const bloggridposts = [
    { img: img1, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img2, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img3, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img4, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img5, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img6, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img1, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img2, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img3, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img4, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img5, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img6, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img1, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
    { img: img2, title: 'We provide you with top notch Jewelry Products', postdate: '28th Aug 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', author: 'Admin' },
];
class Content extends Component {
    render() {
        return (
            <section className="blog-section latest-news pt-120 pb-120">
                <div className="section-fw">
                    <div className="row column-reverse">
                        <div className="col-lg-12">
                            <div className="row">
                                {bloggridposts.map((item, i) => (
                                    <div key={i} className="col-md-6">
                                        <div className="latest-post-box mb-30">
                                            <video width='400' height='700' controls muted>
                                                <source
                                                    src='../../../assets/videos/tes.3gpp'
                                                    type='video/3gpp'>
                                                </source>
                                            </video>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="pagination-wrap mt-50">
                        <Pagination />
                    </div>
                </div>
            </section >

        );
    }
}

export default Content;