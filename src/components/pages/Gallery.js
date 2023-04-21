import React, { Component, Fragment } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footerthree';
import Content from '../sections/gallerytwo/Content';
import coverImg from '../../assets/img/hairapy/gallery22.jpg'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import img1 from '../../assets/img/hairapy/IMG_15472.jpg';
import img2 from '../../assets/img/hairapy/blondesewin.jpg';
import img3 from '../../assets/img/hairapy/SH_kid.twists2.jpeg';
import img4 from '../../assets/img/hairapy/IMG_2718.jpg';
import img5 from '../../assets/img/hairapy/IMG_2944.jpg';
import img6 from '../../assets/img/hairapy/IMG_5193.jpg';
import img7 from '../../assets/img/hairapy/IMG_12142.jpg';
import img8 from '../../assets/img/hairapy/SH_bridalsilly2.jpg';
import img9 from '../../assets/img/hairapy/IMG_54302.jpg';

import img10 from '../../assets/img/gallery/14.JPG';
import img11 from '../../assets/img/gallery/15.JPG';
import img12 from '../../assets/img/gallery/16.JPG';
import img13 from '../../assets/img/gallery/17.JPG';
import img14 from '../../assets/img/gallery/18.JPG';
import img15 from '../../assets/img/gallery/19.JPG';
import img16 from '../../assets/img/gallery/20.JPG';
import img17 from '../../assets/img/gallery/21.JPG';
import img18 from '../../assets/img/gallery/22.JPG';

import img19 from '../../assets/img/gallery/34.JPG';
import img20 from '../../assets/img/gallery/23.JPG';
import img21 from '../../assets/img/gallery/24.JPG';
import img22 from '../../assets/img/gallery/25.JPG';
import img23 from '../../assets/img/gallery/26.JPG';
import img24 from '../../assets/img/gallery/27.JPG';
import img25 from '../../assets/img/gallery/28.JPG';
import img26 from '../../assets/img/gallery/29.JPG';
import img27 from '../../assets/img/gallery/30.JPG';

import img28 from '../../assets/img/gallery/32.JPG';
import img29 from '../../assets/img/gallery/33.JPG';
import img30 from '../../assets/img/gallery/31.JPG';

const page1 = [
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

const page2 = [
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
    { img: img15 },
    { img: img16 },
    { img: img17 },
    { img: img18 },
];

const page3 = [
    { img: img19 },
    { img: img20 },
    { img: img21 },
    { img: img22 },
    { img: img23 },
    { img: img24 },
    { img: img25 },
    { img: img26 },
    { img: img27 },
];

const page4 = [
    { img: img28 },
    { img: img29 },
    { img: img30 },
];

const Gallerytwo = () => {
    const location = useLocation()
    let page = location.pathname.split('')
    page = page[page.length - 1]

    function getContent() {
        switch (page) {
            case '1':
                return <Content galleryposts={page1} />
            case '2':
                return <Content galleryposts={page2} />
            case '3':
                return <Content galleryposts={page3} />
            case '4':
                return <Content galleryposts={page4} />
            default:
                return <Content galleryposts={page1} />
        }

    }


    return (
        <Fragment>
            <MetaTags>
                <title>Salon Hairapy | Gallery</title>
                <meta
                    name="description"
                    content="View our gallery of completed styles."
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Gallery', coverImg: coverImg }} />
            {getContent()}
            <Footer />
        </Fragment>
    );

}

export default Gallerytwo;