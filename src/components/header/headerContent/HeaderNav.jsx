import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './headerNavi.css'
import { Link, useNavigate } from 'react-router-dom';
import HeaderFooter from '../headerFooter/HeaderFooter';
import './headerNavi.css'
import { useScrollY } from '../../hooks/useScrollY';

function HeaderNav(props) {
    const [searchProduct, setSearchProduct] = useState('')
   const [scrollY] =useScrollY()
   const navigate = useNavigate()
   
   const handleOnclickLogo = () => {
    setSearchProduct('')
   }

   const handleSearchProducts = (e) => {
    let search = e.target.value.toLowerCase()
    setSearchProduct(search)
    if(search.length > 0) {
        navigate(`/search/${search}`)
    } else {
        navigate('/')
    }
}

    return (
        <section id='headerNav' style={scrollY > 36 ? {position: 'fixed', top: 0} : {position: "relative"}}>
            <div className='headerNav'>
                <Row className='headerNav_container' >
                    <Col lg={6} md={5} sm={4} className="logo" onClick={handleOnclickLogo}>
                        <Link to="/">
                            <img src="https://bizweb.dktcdn.net/100/047/782/themes/877502/assets/logo.png?1676015839422" alt="logo"/>
                        </Link>
                    </Col>

                    <Col lg={5} md={5} sm={6}className="headerNav_search">
                        <input 
                            type="text" 
                            placeholder="Tìm kiếm tại đây..." 
                            className='headerNav_search-input'
                            onChange={handleSearchProducts}
                            value={searchProduct}
                        />
                        <button>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </Col>
                    <Col lg={1} md={2} sm={2}>
                        <Row className='d-flex justify-content-end align-items-center header-height-max'>
                            <Col lg={12} className='header_cart '>
                                <Link to="/cart" className='header_cart-wrap'>
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <HeaderFooter />
        </section>
    );
}

export default HeaderNav;
