import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../layouts/Pagination';
import Sidebar from '../../layouts/Shopsidebar';

import img1 from '../../../assets/img/shop/01.jpg';
import img2 from '../../../assets/img/shop/02.jpg';
import img3 from '../../../assets/img/shop/03.jpg';

const shopgridpost = [
    { img: img1, title: 'Regular Braids with Extensions', discount: '', price: 200 },
    { img: img2, title: 'Knotless', discount: '', price: 250 },
    { img: img3, title: 'Single Twist/Braids (4Hrs)', discount: '', price: 150 },

    { img: img1, title: 'Additional Hour', discount: '', price: 25 },
    { img: img2, title: 'Simple Ghana', discount: '', price: 85 },
    { img: img3, title: 'Simple Ghana (Small)', discount: '', price: 120 },

    { img: img1, title: 'DeSign Ghana', discount: '', price: 100 },
    { img: img2, title: 'DeSign Ghana (Small)', discount: '', price: 150 },
    { img: img3, title: 'Lemonade(Cornrow/Singles)', discount: '', price: 185 },

    { img: img1, title: 'Crotchet', discount: '', price: 185 },
    { img: img2, title: 'Perimeter Fix', discount: '', price: 55 },
    { img: img3, title: 'Single Removal', discount: '', price: 65 },

    { img: img1, title: 'Custom Rate', discount: '', price: 10 },
    { img: img2, title: 'Passion Twist', discount: '', price: 300 },
    { img: img3, title: 'Invisible Locs', discount: '', price: 275 },
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