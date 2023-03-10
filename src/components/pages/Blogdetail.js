import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/blogdetail/Content';

class Blogdetail extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Salon Hairapy | Team</title>
                    <meta
                        name="description"
                        content="Come learn more about the Salon Hairapy Team"
                    />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: 'Team' }} />
                <Content />
                {/* <Instafeeds /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default Blogdetail;