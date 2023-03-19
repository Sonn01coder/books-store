import React, { useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { useScrollY } from '../../hooks/useScrollY';
import './headerFooter.css'

function HeaderFooter(props) {
    const [scrollY] = useScrollY()

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -150; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <section className='headerFooter' style={scrollY > 106 ? {position:"fixed", top: 70} : {position: "relative"}}>
            <Container className='headerFooter_container'>
                <Row>
                    <Col md={6} className="headerFooter_wrap">
                        <Row>
                            <Col md={3} className="headerFooter_wrap-link headerFooter_active">
                                <HashLink
                                    smooth to="/" 
                                     scroll={el => scrollWidthOffset(el)}
                                    activeClassName="selected"
                                    className=" headerFooter_link"
                                    >
                                    TRANG CHỦ
                                </HashLink>
                            </Col>

                            <Col md={3} className="headerFooter_wrap-link">
                                <HashLink 
                                    smooth to='/#booksHot' 
                                    scroll={el => scrollWidthOffset(el)}
                                    activeClassName="selected"
                                    className=" headerFooter_link" 
                                >
                                    SÁCH HOT
                                </HashLink>
                            </Col>

                            <Col md={3} className="headerFooter_wrap-link">
                                <HashLink 
                                    smooth to='/#news' 
                                    scroll={el => scrollWidthOffset(el)}
                                    activeClassName="selected"
                                    className=" headerFooter_link" 
                                >
                                    TIN TỨC
                                </HashLink>
                            </Col>

                            <Col md={3} className="headerFooter_wrap-link">
                                <HashLink 
                                    smooth to='/#contact' 
                                    scroll={el => scrollWidthOffset(el)}
                                    activeClassName="selected"
                                    className=" headerFooter_link" 
                                >
                                    LIÊN HỆ
                                </HashLink>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeaderFooter;