import React, { Component, Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footerthree';
import Content from '../sections/contact/Content';
import contactCard from '../../assets/img/contact-card.png'
import coverImg from '../../assets/img/hairapy/apptFront.jpeg'

const Contact = () => {

    // can use both full and shortened form url
    return (
        <Fragment>
            <MetaTags>
                <title>Salon Hairapy | Book Appointment</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Appointment', coverImg: coverImg }} />
            <Content />
            <Footer contactCard={contactCard} />
        </Fragment>
    );
}

export default Contact;