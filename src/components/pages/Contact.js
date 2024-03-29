import React, { Component, Fragment, useEffect } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footerthree';
import Content from '../sections/contact/Content';
import contactCard from '../../assets/img/contact-card.png'
import coverImg from '../../assets/img/hairapy/apptFront.jpeg'
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Contact = () => {
    const location = useLocation()
    console.log(location)
    let service = location.search.split('=')
    if (service.length > 1) {
        service = service[1]
        service = service.replace(/[^a-zA-Z]/g, ' ')
        service = service.replace(/\s+/g, ' ').trim();
    } else {
        service = ''
    }

    // can use both full and shortened form url
    return (
        <Fragment>
            <MetaTags>
                <title>Salon Hairapy | Book Appointment</title>
                <meta
                    name="description"
                    content="Message us with your desired service, date, and time of your appointment, and we will get back to you"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: 'Appointment', coverImg: coverImg }} />
            <Content service={service} />
            <Footer contactCard={contactCard} />
        </Fragment>
    );
}

export default Contact;