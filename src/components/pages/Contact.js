import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
import Content from '../sections/contact/Content';
import contactCard from '../../assets/img/contact-card.png'

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Laramiss | Contact Us</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumb breadcrumb={{ pagename: 'Contact Us' }} />
                <Content />
                {/* <Instafeeds/> */}
                <Footer contactCard={contactCard} />
            </Fragment>
        );
    }
}

export default Contact;