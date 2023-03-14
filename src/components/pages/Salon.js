import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footerthree';
import Content from '../sections/gallery/Content';

import coverImg from '../../assets/img/salon/cover.jpg'

class Gallery extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Salon Hairapy | Salon</title>
                    <meta
                        name="description"
                        content="Take a look at how it feels like to be in our salon"
                    />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: 'Salon', coverImg: coverImg }} />
                <Content />
                {/* <Instafeeds/> */}
                <Footer />
            </Fragment>
        );
    }
}

export default Gallery;