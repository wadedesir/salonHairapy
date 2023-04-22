import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../layouts/Pagination';
import Sidebar from '../../layouts/Shopsidebar';

import logo from '../../../assets/img/logo.png';

const shopgridpost = [
    { img: logo, title: 'Regular', discount: '', price: 85 },
    { img: logo, title: 'Bantu Knots', discount: '', price: 65 },
    { img: logo, title: 'Bantu Knots(small)', discount: '', price: 100 },
    { img: logo, title: 'Natural UpDo', discount: '', price: 80 },

    { img: logo, title: 'Flat Twists', discount: '', price: 50 },
    { img: logo, title: 'Flat Twists(small)', discount: '', price: 80 },
    { img: logo, title: 'Finger Twists', discount: '', price: 60 },
    { img: logo, title: 'Single Twist (small)', discount: '', price: 100 },


];
class Content extends Component {
    render() {
        return (
            <section className="Shop-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Shop Sidebar */}
                        {/* <div className="col-lg-4 col-md-10 col-sm-10"> */}
                        {/* <Sidebar /> */}
                        {/* </div> */}
                        <div className="col-lg-8 col-md-10">
                            <div className="shop-products-wrapper">
                                <div className="product-wrapper restaurant-tab-area">
                                    <div className="row">
                                        {shopgridpost.map((item, i) => (
                                            <div key={i} className="col-lg-4 col-md-6">
                                                <div className="food-box shop-box">
                                                    <div className="thumb">
                                                        <img src={item.img} alt="" />
                                                        <div className="badges">
                                                            {
                                                                item.discount > 0 || item.discount !== '' ? <span className="price">Sale</span> : ''
                                                            }
                                                            {
                                                                item.discount > 0 || item.discount !== '' ? <span className="price discounted">-{item.discount}%</span> : ''
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="desc">
                                                        <h4>
                                                            <Link to={`/book-appointment?service=${this.props.page + ' ' + item.title}`}>{item.title}</Link>
                                                        </h4>
                                                        <span className="price">${item.price}
                                                            {item.discount > 0 || item.discount !== '' ? <span> ${Math.ceil(item.price * (item.discount / 100))} </span> : ''}</span>
                                                        <Link to={`/book-appointment?service=${this.props.page + ' ' + item.title}`} className="link"><i className="fal fa-arrow-right" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;