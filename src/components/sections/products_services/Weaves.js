import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo.png';

const shopgridpost = [
    { img: logo, title: 'Full Sew In', discount: '', price: 250 },
    { img: logo, title: 'Removal', discount: '', price: 40 },
    { img: logo, title: 'Tighten (per Track)', discount: '', price: 15 },

    { img: logo, title: 'Full with Lace Front', discount: '', price: 350 },
    { img: logo, title: 'Wig Fitting', discount: '', price: 110 },
    { img: logo, title: 'Sew (per Track)', discount: '', price: 30 },

    { img: logo, title: 'Advanced Lace Closure', discount: '', price: 'ASK' },
    { img: logo, title: 'Vixen Sew-in', discount: '', price: 250 },
    { img: logo, title: 'Partial Sew-In', discount: '', price: 200 },

    { img: logo, title: 'Custom (Knots/Bleach)', discount: '', price: 65 },
    { img: logo, title: 'Lace Front Refresh', discount: '', price: 80 },
    { img: logo, title: 'Quick Weave', discount: '', price: 250 },

    { img: logo, title: 'Regular Lace Closure', discount: '', price: 40 },
    { img: logo, title: 'Partial Clip-Ins', discount: '', price: 100 },
    { img: logo, title: 'Microlink(Full)', discount: '', price: 250 },
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
                                                            <Link to={`/book-appointment?service=${this.props.page + ' ' + item.title}`} >{item.title}</Link>
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