
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../layouts/Pagination';
import Sidebar from '../../layouts/Shopsidebar';

import img1 from '../../../assets/img/shop/01.jpg';
import img2 from '../../../assets/img/shop/02.jpg';
import img3 from '../../../assets/img/shop/03.jpg';

const shopgridpost = [
    { img: img1, title: 'Regular', discount: '', price: 20 },
    { img: img2, title: 'Partials', discount: '', price: 35 },
    { img: img3, title: 'Style', discount: '', price: 20 },

    { img: img1, title: 'Spiral Add-On', discount: '', price: 25 },
    { img: img2, title: 'Starter (Partials)', discount: '', price: 40 },
    { img: img3, title: 'Microlocs', discount: '', price: 20 },

    { img: img1, title: 'InstaLocs', discount: '', price: 40 },
    { img: img2, title: 'Microlocs Tighten', discount: '', price: 10 },
    { img: img3, title: 'Retwist(Long/small)', discount: '', price: 15 },

    { img: img1, title: '2ST Add-On', discount: '', price: 25 },
    { img: img2, title: 'Starter', discount: '', price: 290 },
    { img: img3, title: ' Repair (Per Locs)', discount: '', price: 450 },

    { img: img1, title: 'Interlock', discount: '', price: 25 },
    { img: img2, title: 'Style (4 Hours)', discount: '', price: 290 },
    { img: img3, title: 'InstaLocs (Custom)', discount: '', price: 450 },

    { img: img1, title: 'Starter', discount: '', price: 25 },
    { img: img2, title: 'Style (4 Hours)', discount: '', price: 290 },
    { img: img3, title: 'InstaLocs (Custom)', discount: '', price: 450 },
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
                                <div className="shop-product-top">
                                    <p>Showing 1 To 9 Of 60 results</p>
                                    <div className="sorting-box">
                                        <select name="guests" id="guests" className="nice-select">
                                            <option value={0}>Default Sorting</option>
                                            <option value={1}>Sort By Popularity</option>
                                            <option value={2}>Sort By Latest</option>
                                            <option value={4}>Sort By Rating</option>
                                            <option value={8}>Sort By Price:Low to High</option>
                                            <option value={8}>Sort By Price:High to Low</option>
                                        </select>
                                    </div>
                                </div>
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
                                                        <div className="button-group">
                                                            <Link to="#"><i className="far fa-heart" /></Link>
                                                            <Link to="#"><i className="far fa-sync-alt" /></Link>
                                                            <Link to="#"><i className="far fa-eye" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="desc">
                                                        <h4>
                                                            <Link to="/shop-detail">{item.title}</Link>
                                                        </h4>
                                                        <span className="price">${item.price}
                                                            {item.discount > 0 || item.discount !== '' ? <span> ${Math.ceil(item.price * (item.discount / 100))} </span> : ''}</span>
                                                        <Link to="/shop-detail" className="link"><i className="fal fa-arrow-right" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrap">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;