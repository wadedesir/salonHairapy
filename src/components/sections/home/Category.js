import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const categoryposts = [
    { icon: 'flaticon-presentation', title: 'Demo', numberofproduct: 'Book' },
    { icon: 'flaticon-dance', title: 'Private Event', numberofproduct: 'Book' },
    { icon: 'flaticon-ceremony', title: 'Wedding', numberofproduct: 'Book' },
    { icon: 'flaticon-beauty', title: 'Fashion Shows', numberofproduct: 'Book' },
];

class Category extends Component {
    render() {
        return (
            <div className="categories-box-layout">
                <div className="container">
                    <div className="categories-box-layout-inner">
                        <div className="row">
                            {categoryposts.map((item, i) => (
                                <div key={i} className="col-lg-3 col-sm-6">
                                    <Link to="/shop-left" className="categories-box">
                                        <span className="icon">
                                            <i className={item.icon} />
                                        </span>
                                        <h5 className="title">{item.title}</h5>
                                        <p>{item.numberofproduct} Prices</p>
                                        <span className="overlay-icon">
                                            <i className={item.icon} />
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Category;