import React, { Component } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'

const Pagination = () => {
    const pages = React.useRef()
    const history = useHistory()
    const location = useLocation()

    let page = location.pathname.split('')
    page = page[page.length - 1]

    React.useEffect(() => {
        pages.current.childNodes[page].className = "active"
    })

    function navigate(direction) {
        if (direction == 'right' && page < 4) {
            history.push(`/gallery${parseInt(page) + 1}`)
        } else if (direction == 'left' && page > 1) {
            history.push(`/gallery${parseInt(page) - 1}`)
        }
    }

    return (
        <ul ref={pages}>
            <li onClick={() => navigate('left')}><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
            <li><Link to="/gallery1">1</Link></li>
            <li><Link to="/gallery2">2</Link></li>
            <li><Link to="/gallery3">3</Link></li>
            <li><Link to="/gallery4">4</Link></li>
            <li onClick={() => navigate('right')}><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
        </ul>
    );

}

export default Pagination;