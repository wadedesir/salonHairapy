import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo.png';

const shopgridpost = [
    { img: logo, title: 'Cornrows', discount: '', price: 70 },
    { img: logo, title: 'Designer(Big)', discount: '', price: 85 },
    { img: logo, title: 'Singles (Big)', discount: '', price: 85 },

    { img: logo, title: 'Partial Singles(Small)', discount: '', price: 65 },
    { img: logo, title: 'Cornrow/Singles', discount: '', price: 100 },
    { img: logo, title: 'Beads', discount: '', price: 15 },

    { img: logo, title: 'Singles (Medium)', discount: '', price: 95 },
    { img: logo, title: 'Singles (Small)', discount: '', price: 115 },
    { img: logo, title: 'Designer(small)', discount: '', price: 100 },

    { img: logo, title: 'Partial Singles', discount: '', price: 65 },
    { img: logo, title: 'Braid Add-On', discount: '', price: 15 },
    { img: logo, title: 'Removal', discount: '', price: 20 },

    { img: logo, title: 'Designer(Medium)', discount: '', price: 90 },
];
class Content extends Component {
    render() {
        return (
            <section className="Shop-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
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