import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth, logOut } from '../../../firebase';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './headerTop.css'

function HeaderTop(props) {
    const location = useLocation()
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
        navigate('/BookStore')
    }

    return (
        <section 
            className='headerTop'
            style={location.pathname === '/login' || location.pathname ==='/register' ? {display: 'none'} : {}}
        >
            <Container className='headerTop_container'>
                <Row className='headerTop_container-row'>
                    <Col lg={7} md={4} sm={5} className="headerTop_mail">
                        <i class="fa-solid fa-envelope"></i>
                        <span>monne2310@gmail.com</span>
                    </Col>
                    <Col lg={5} md={8} sm={7}>
                        <Row className='headerTop_wrap'>
                            {    
                                user ? (
                                    <Col className='headerTop_user'>
                                        <div className='color-White-headerTop' onClick={handleLogOut}>
                                            <span>{user.displayName}</span>
                                            <i class="fa-solid fa-right-from-bracket"></i>
                                        </div>
                                    </Col>
                                ) : (
                                    <Col lg={7} md={10} sm={9}>
                                        <Row className='headerTop_wrap-login'>
                                            <Col md={2}/>
                                            <Col lg={5} md={4} sm={6} className="headerTop_login">
                                                <Link to='/login' className='color-White-headerTop'>
                                                    <i class="fa-solid fa-lock"></i>
                                                    <span>ĐĂNG NHẬP</span>
                                                </Link>
                                            </Col>
                                            <Col lg={5} md={4} sm={6} className="headerTop_register">
                                                <Link to='/register' className='color-White-headerTop'>
                                                    <i class="fa-solid fa-right-to-bracket"></i>
                                                    <span>ĐĂNG KÍ</span>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                             }

                            <Col lg={3} md={2} sm={3} className="headerTop_support">
                                <a href='https://www.facebook.com/n.t.son01' className='color-White-headerTop'>
                                    <i class="fa-solid fa-headset"></i>
                                    <span>HỖ TRỢ</span>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeaderTop;