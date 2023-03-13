import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/gallerytwo/Content';

class Gallerytwo extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Salon Hairapy | Gallery 2</title>
                    <meta
                        name="description"
                        content="View our gallery of completed styles."
                    />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: 'Gallery' }} />
                <Content />
                {/* <Instafeeds/> */}
                <Footer />
            </Fragment>
        );
    }
}

export default Gallerytwo;