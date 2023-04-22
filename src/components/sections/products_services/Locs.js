
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo.png';

const shopgridpost = [
    { img: logo, title: 'Regular', discount: '', price: 75 },
    { img: logo, title: 'Partial', discount: '', price: 60 },
    { img: logo, title: 'Style', discount: '', price: 30 },

    { img: logo, title: 'Spiral Add-On', discount: '', price: 65 },
    { img: logo, title: 'Starter (Partials)', discount: '', price: 75 },
    { img: logo, title: 'Microlocs', discount: '', price: 400 },

    { img: logo, title: 'InstaLocs', discount: '', price: 300 },
    { img: logo, title: 'Microlocs Tighten', discount: '', price: 200 },
    { img: logo, title: 'Retwist(Long/small)', discount: '', price: 100 },

    { img: logo, title: '2ST Add-On', discount: '', price: 15 },
    { img: logo, title: 'Starter', discount: '', price: 150 },
    { img: logo, title: 'Repair (per Locs) ', discount: '', price: 15 },

    { img: logo, title: 'InterLocs', discount: '', price: 160 },
    { img: logo, title: 'Style', discount: '', price: 'ASK' },
    { img: logo, title: 'InstaLocs (Custom)', discount: '', price: 1200 },

    { img: logo, title: 'Starter Loc Small', discount: '', price: 200 },
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