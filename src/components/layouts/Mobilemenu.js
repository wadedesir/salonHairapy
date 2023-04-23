import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const navigationmenu = [
    {
        id: 1,
        linkText: 'Home',
        link: '/',
        // child: true,
        // submenu: [
        //     {
        //         id: 11,
        //         link: '/',
        //         linkText: 'Home 1'
        //     },
        //     {
        //         id: 12,
        //         link: '/home-two',
        //         linkText: 'Home 2'
        //     },
        //     {
        //         id: 13,
        //         link: '/home-three',
        //         linkText: 'Home 3'
        //     },
        //     {
        //         id: 14,
        //         link: '/home-four',
        //         linkText: 'Home 4'
        //     },
        // ]
    },
    {
        id: 2,
        linkText: 'Products & Services',
        child: true,
        submenu: [
            {
                id: 21,
                link: '/products-services&beauty',
                linkText: 'Beauty'
            },
            {
                id: 22,
                link: '/products-services&braid-extensions',
                linkText: 'Braid Extensions'
            },
            {
                id: 23,
                link: '/products-services&braid-naturals',
                linkText: 'Braid Naturals'
            },
            {
                id: 24,
                link: '/products-services&colors',
                linkText: 'Colors'
            },
            {
                id: 25,
                link: '/products-services&cuts-trims',
                linkText: 'Cuts/Trims'
            },
            {
                id: 251,
                link: '/products-services&locs',
                linkText: 'Locs'
            },
            {
                id: 26,
                link: '/products-services&presses',
                linkText: 'Presses'
            },
            {
                id: 27,
                link: '/products-services&relaxers',
                linkText: 'Relaxers'
            },
            {
                id: 28,
                link: '/products-services&sets',
                linkText: 'Sets'
            },
            {
                id: 29,
                link: '/products-services&twist-naturals',
                linkText: 'Twist/Naturals'
            },
            {
                id: 210,
                link: '/products-services&wash-treatments',
                linkText: 'Wash/Treatments'
            },
            {
                id: 211,
                link: '/products-services&weaves',
                linkText: 'Weaves'
            },
            {
                id: 212,
                link: '/products-services&kstar',
                linkText: 'KStar'
            },

        ]
    },
    // {
    //     id: 3,
    //     linkText: 'KStar Essentials',
    //     link: '/products/kstar',
    // child: true,
    // submenu: [
    //     {
    //         id: 31,
    //         link: '/blog-grid-sidebar',
    //         linkText: 'Blog Grid Sidebar'
    //     },
    //     {
    //         id: 32,
    //         link: '/blog-detail',
    //         linkText: 'Blog Details'
    //     },
    //     {
    //         id: 33,
    //         link: '/blog-grid',
    //         linkText: 'Blog Grid'
    //     },
    //     {
    //         id: 34,
    //         link: '/blog-list',
    //         linkText: 'Blog List'
    //     },
    // ]
    // },
    {
        id: 4,
        linkText: 'About Us',
        child: true,
        submenu: [
            {
                id: 42,
                link: '/team',
                linkText: 'Team'
            },
            {
                id: 41,
                link: '/salon',
                linkText: 'Salon'
            },
        ]
    },
    {
        id: 5,
        // linkText: 'Media',
        link: '/gallery1',
        linkText: 'Gallery',
        // child: False,
        submenu: [
            {
                id: 43,
                link: '/gallery1',
                linkText: 'Gallery'
            },
            // {
            //     id: 44,
            //     link: '/videos',
            //     linkText: 'Videos'
            // },
        ]
    },
    {
        id: 6,
        linkText: 'Shop Luxury Hair',
        link: '/luxury'
    },
    {
        id: 7,
        linkText: 'Book Appointment',
        link: '/book-appointment'
    },
    // {
    //     id: 8,
    //     linkText: 'Accessories',
    //     link: '/shop-left'
    // },

]
class Mobilemenu extends Component {
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }
    triggerChild = (e) => {
        let subMenu = '';
        subMenu = (this.getNextSibling(e.target, '.sub-menu') !== undefined) ? this.getNextSibling(e.target, '.sub-menu') : null;
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'sub-menu' : 'sub-menu d-block';
        }
    }
    render() {
        return (
            <ul className="sigma-main-menu">
                {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                    <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : item.link == '/book-appointment' ? <Link style={{ color: 'gold' }} to={item.link}> {item.linkText} </Link> : item.link == '/luxury' ? <a href="https://shairapy.mayvenn.com">{item.linkText}</a> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="sub-menu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="sub-menu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li className="menu-item" key={i}><Link
                                                        to={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
                )) : null}
            </ul >
        );
    }
}

export default Mobilemenu;