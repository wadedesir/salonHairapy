import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo.png';

const shopgridpost = [
    { img: logo, title: 'Regular Braids with Extensions', discount: '', price: 200 },
    { img: logo, title: 'Knotless', discount: '', price: 250 },
    { img: logo, title: 'Single Twist/Braids (4Hrs)', discount: '', price: 150 },

    { img: logo, title: 'Additional Hour', discount: '', price: 25 },
    { img: logo, title: 'Simple Ghana', discount: '', price: 85 },
    { img: logo, title: 'Simple Ghana (Small)', discount: '', price: 120 },

    { img: logo, title: 'DeSign Ghana', discount: '', price: 100 },
    { img: logo, title: 'DeSign Ghana (Small)', discount: '', price: 150 },
    { img: logo, title: 'Lemonade\n(Cornrow/Singles)', discount: '', price: 185 },

    { img: logo, title: 'Crotchet', discount: '', price: 185 },
    { img: logo, title: 'Perimeter Fix', discount: '', price: 55 },
    { img: logo, title: 'Single Removal', discount: '', price: 65 },

    { img: logo, title: 'Custom Rate', discount: '', price: 'ASK' },
    { img: logo, title: 'Passion Twist', discount: '', price: 300 },
    { img: logo, title: 'Invisible Locs', discount: '', price: 275 },
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