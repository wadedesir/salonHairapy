import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumbs';
import Instafeeds from '../layouts/Instafeeds';
import Footer from '../layouts/Footerthree';
// import Content from '../sections/shopleft/Content';
import * as Content from '../sections/products_services'
import { useParams } from 'react-router-dom';
import kstar from '../../assets/img/kstar.JPG'


const Shopleft = () => {
    let params = useParams()

    function getContent() {
        switch (params.id) {
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
            case 'cuts-and-trims':
                return <Content.Cuts />
            case 'sets':
                return <Content.Sets />
            case 'twist-naturals':
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
            <Breadcrumb breadcrumb={{ pagename: titleCase(params.id) }} />
            {getContent()}
            {/* <Instafeeds /> */}
            {params.id == 'kstar' ? <Footer contactCard={kstar} /> : <Footer />}

        </Fragment>
    );

}

export default Shopleft;