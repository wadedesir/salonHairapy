import React, { Component, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import img1 from '../../../assets/img/room-suite/01.jpg'
import img2 from '../../../assets/img/room-suite/02.jpg'
import img3 from '../../../assets/img/room-suite/03.jpg'
// import Instafeeds from './Instafeeds';
import Productslider from './Productslider';
import Instafeeds from '../../layouts/Instafeeds';

// import img3 from '../../../assets/img/room-suite/03.jpg'

import braids from '../../../assets/img/prices/braid-extensions.jpg'
import locs from '../../../assets/img/prices/locs.jpg'
import naturals from '../../../assets/img/prices/natural-styles.jpg'
import sewIns from '../../../assets/img/prices/sew-ins.jpg'
import colorsRelaxers from '../../../assets/img/prices/colors&relaxers.jpg'
import setsPresses from '../../../assets/img/prices/sets&presses.jpg'
import washTreats from '../../../assets/img/prices/wash&treats.jpg'
import naturalBraids from '../../../assets/img/prices/natural-braids.jpg'

const trendingposts = [
    { img: img1, title: 'Locs', text: 'Machine Design , 24 Carat', price: '$345/10gm' },
    { img: img2, title: 'Cut and Trims', text: 'Machine Design , 24 Carat', price: '$345/10gm' },
    { img: img3, title: 'Braids', text: 'Machine Design , 24 Carat', price: '$345/10gm' },
    { img: img1, title: 'Press', text: 'Machine Design , 24 Carat', price: '$345/10gm' },
];

const Trending = () => {
    const priceRefUpper = useRef()
    const priceRefLower = useRef()
    const stylesRef = useRef()
    let [toggleStyles, setToggleStyles] = useState(true);

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() { //https://stackoverflow.com/questions/39435395/reactjs-how-to-determine-if-the-application-is-being-viewed-on-mobile-or-deskto
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <section className="pt-115 pb-115 bg-white" ref={stylesRef}>
            <div className="container" >
                <div className="section-title text-center mb-30" >
                    {/* <div className="section-title-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                                <path d="M369.853,250.251l-100-241C267.53,3.65,262.062,0,255.999,0s-11.531,3.65-13.854,9.251l-100,241    c-1.527,3.681-1.527,7.817,0,11.498l100,241c2.323,5.601,7.791,9.251,13.854,9.251s11.531-3.65,13.854-9.251l100-241    C371.381,258.068,371.381,253.932,369.853,250.251z M255.999,457.861L172.239,256l83.76-201.861L339.759,256L255.999,457.861z" fill="#ffffff" />
                                <path className="diamond-spark spark-1" d="M139.606,118.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C145.465,133.748,145.465,124.25,139.606,118.393z" fill="#ffffff" />
                                <path className="diamond-spark spark-2" d="M456.607,55.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394l63-63C462.465,70.748,462.465,61.25,456.607,55.393z" fill="#ffffff" />
                                <path className="diamond-spark spark-4" d="M456.607,435.393l-63-63c-5.858-5.857-15.356-5.857-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l63,63    c2.928,2.929,6.767,4.394,10.606,4.394s7.678-1.465,10.607-4.394C462.465,450.748,462.465,441.25,456.607,435.393z" fill="#ffffff" />
                                <path className="diamond-spark spark-3" d="M139.606,372.393c-5.858-5.857-15.356-5.857-21.213,0l-63,63c-5.858,5.858-5.858,15.356,0,21.213    C58.322,459.535,62.16,461,65.999,461s7.678-1.465,10.607-4.394l63-63C145.465,387.748,145.465,378.25,139.606,372.393z" fill="#ffffff" />
                            </svg>
                        </div> */}
                    <span className="title-tag"> Check Out </span>
                    <h2  >Our Styles</h2>
                </div>
                {/* <div className="text-center mb-20">
                    <Link to="#">View more
                        <i className="fal fa-arrow-right ml-2" />
                    </Link>
                </div> */}
                {/* <div className="row"> */}
                {/* {trendingposts.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className="apartment-box">
                                    <div className="image-box">
                                        <Link to="/shop-detail" className="d-block">
                                            <img src={item.img} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="content-box-2">
                                        <h3 className="title">
                                            <Link to="/shop-detail">{item.title}</Link>
                                        </h3>
                                        <p>{item.text}</p>
                                        <span className="price">{item.price} </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
            </div>
            <div id="allStyles" className='' >
                <div className='col-12 d-sm-flex flex-wrap' ref={priceRefUpper}>
                    <div className='col pt-3 col-sm-6 col-lg-3' >
                        <img src={braids} />
                    </div>
                    <div className='col pt-3 col-sm-6 col-lg-3'>
                        <img src={locs} />
                    </div>
                    <div className='col pt-3 col-sm-6 col-lg-3'>
                        <img src={sewIns} />
                    </div>
                    <div className='col pt-3 col-sm-6 col-lg-3'>
                        <img src={naturals} />
                    </div>
                </div>

                <div className='col-12 d-sm-flex flex-wrap d-none' ref={priceRefLower}>
                    <div className='col pt-3 col-sm-6 col-lg-3' >
                        <img src={colorsRelaxers} />
                    </div>
                    <div className='col pt-3 col-sm-6 col-lg-3'>
                        <img src={setsPresses} />
                    </div>
                    <div className='col pt-3 col-sm-6 col-lg-3'>
                        <img src={washTreats} />
                    </div>
                    <div className='col pt-3 col-sm-6 col-lg-3'>
                        <img src={naturalBraids} />
                    </div>
                </div>


            </div>
            <div className="text-center mt-20">
                <Link to="#" onClick={() => {
                    if (toggleStyles) {
                        priceRefLower.current.classList.remove('d-none')
                        priceRefUpper.current.classList.add('d-none')

                    } else {
                        priceRefLower.current.classList.add('d-none')
                        priceRefUpper.current.classList.remove('d-none')
                    }

                    if (isMobile) stylesRef.current.scrollIntoView()
                    setToggleStyles(!toggleStyles)
                }}>
                    {toggleStyles ? <span>View More <i className="fal fa-arrow-right ml-2" /></span> : <span><i className="fal fa-arrow-left mr-2" /> Back</span>}
                </Link>
            </div>
        </section >
    );

}

export default Trending;