import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Newsletter from "../layouts/Newsletter";
import Content from "../sections/home/Content";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Salon Hairapy | Homepage</title>
                    <meta
                        name="description"
                        content="Welcome to Salon Hairapy where we provide services that not only boost your confidence but it's therapy for the mind body and soul."
                    />
                </MetaTags>
                {/* <Newsletter /> */}
                <Header />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;
