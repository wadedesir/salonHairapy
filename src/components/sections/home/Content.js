import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Category from './Category';
import Hairfinity from '../../layouts/Hairfinity';
import Styles from './Styles';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Category />
                <Hairfinity />
                <Styles />
            </Fragment>
        );
    }
}

export default Content;