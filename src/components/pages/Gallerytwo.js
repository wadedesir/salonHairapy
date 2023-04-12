import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footerthree';
import Content from '../sections/gallerytwo/Content';
import coverImg from '../../assets/img/hairapy/gallery22.jpg'

class Gallerytwo extends Component {
    render() {
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
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Gallerytwo;