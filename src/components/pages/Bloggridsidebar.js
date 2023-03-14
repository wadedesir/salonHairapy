import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/bloggridsidebar/Content';

class Bloggridsidebar extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title> Salon Hairapy | Videos</title>
                    <meta
                        name="description"
                        content="Come watch our hair videos"
                    />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: 'Videos' }} />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Bloggridsidebar;