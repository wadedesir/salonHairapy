import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
// import Content from '../sections/shopleft/Content';
import * as Content from '../sections/products_services'
import kstar from '../../assets/img/kstar.JPG'
import { useLocation } from 'react-router-dom'

const Shopleft = () => {
    const location = useLocation()

    let page = location.pathname.split('&')
    page = page[1]

    console.log(page)

    function getContent() {
        switch (page) {
            case 'beauty':
                return <Content.Beauty />
            case 'braid-extensions':
                return <Content.Braids />
            case 'braid-naturals':
                return <Content.BraidN />
            case 'kstar':
                return <Content.KStar />
            case 'locs':
                return <Content.Locs />
            case 'colors':
                return <Content.Colors />
            case 'cuts-trims':
                return <Content.Cuts />
            case 'sets':
                return <Content.Sets />
            case 'twists-naturals':
                return <Content.Twists />
            case 'presses':
                return <Content.Presses />
            case 'weaves':
                return <Content.Weaves />
            case 'wash-treatments':
                return <Content.Wash />
            case 'relaxers':
                return <Content.Relaxers />
            // case 'kids-corner':
            //     return <Content.KidsCorner />


        }

    }

    function titleCase(string) {
        // https://stackoverflow.com/questions/63511237/how-to-capitalize-first-letter-and-lowercase-the-rest-of-the-string
        string = string.replace(/-/g, ' ')
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
        <Fragment>
            <MetaTags>
                <title>Salon Hairapy | Shop</title>
                <meta
                    name="description"
                    content="#"
                />
            </MetaTags>
            <Header />
            <Breadcrumb breadcrumb={{ pagename: titleCase(page) }} />
            {getContent()}
            {/* <Instafeeds /> */}
            {page == 'kstar' ? <Footer contactCard={kstar} /> : <Footer />}

        </Fragment>
    );

}

export default Shopleft;