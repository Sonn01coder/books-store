import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import "./Navbar.css"
import data from '../../../data'
import { SmoothHorizontalScrolling } from '../../utils';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const sliderRef = useRef()
    const movieRef = useRef()

    const proposeItem =data.products.filter(product => {
        return product.propose === true
    })

    const handleScrollRight = () => {
        const maxScrollLeft =  sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        console.log(maxScrollLeft)
        if(sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(sliderRef.current,
                280,
                movieRef.current.clientWidth,
                sliderRef.current.scrollLeft)
        }
    }

    const handleScrollLeft = () => {
        const maxScrollLeft =  sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        console.log(maxScrollLeft)
        if(sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(sliderRef.current,
                280,
                -movieRef.current.clientWidth,
                sliderRef.current.scrollLeft)
        }
    }

    return (
        <section className='slider'>
            <Row>
                <Col md={12}>
                    <Row className='slide_info'>
                        <Col>
                            <div className="slide_info-wrap">
                               <div className="slide_info-title">
                                    <i class="fa-solid fa-gift"></i>
                                    <p>QUÀ TẶNG HẤP DẪN</p>
                               </div>
                               <div className="slide_info-content">
                                    <p>Với các mốc khi thanh toán, bạn sẽ nhận được voucher cho lần tiếp theo.</p>
                               </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="slide_info-wrap">
                               <div className="slide_info-title">
                                    <i class="fa-sharp fa-solid fa-book"></i>
                                    <p>ĐA NỀN TẢNG</p>
                               </div>
                               <div className="slide_info-content">
                                    <p>Hàng nghìn tựa sách hay với đầy đủ bản quyền.</p>
                               </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="slide_info-wrap">
                               <div className="slide_info-title">
                               <i class="fa-solid fa-credit-card"></i>
                                    <p>THANH TOÁN TRỰC TUYẾN</p>
                               </div>
                               <div className="slide_info-content">
                                    <p>Hỗ trợ thanh toán trực tuyến bao gồm thẻ quốc tế lẫn ATM nội địa...</p>
                               </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="slide_info-wrap">
                               <div className="slide_info-title">
                                    <i class="fa-solid fa-truck"></i>
                                    <p>GIAO HÀNG NHANH</p>
                               </div>
                               <div className="slide_info-content">
                                    <p>Khu vưc Hà Nội và các tỉnh miền bắc chỉ trong 1-2 ngày, các tỉnh miền Nam từ 3 đến 4 ngày</p>
                               </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="slide_info-wrap">
                               <div className="slide_info-title">
                                    <i class="fa-solid fa-phone"></i>
                                    <p>HỖ TRỢ</p>
                               </div>
                               <div className="slide_info-content">
                                    <p>ĐT: (028) 28 288 288 Email:monne2310@gmail.com</p>
                               </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="slide_suggest">
                        <Col md={12} className="slide_suggest-title" >ĐỀ XUẤT DÀNH CHO BẠN</Col>
                        <Col md={2}></Col>
                        <Col md={7} className="slide_suggest-slogan">Biết bao kẻ đọc sách và học hỏi, không phải để tìm ra chân lý mà là để gia tăng những gì mình đã biết.(Junline Green)</Col>
                    </Row>

                    <Row className='suggest_list'>
                        <Row className='suggest_item-container' ref={sliderRef}>
                            {
                                proposeItem.map(product => (
                                <div key={product._id}>
                                    <div className='suggest_item' ref={movieRef}>
                                        <Link to={`/product/${product.slug}`} >
                                            <img src={product.image} alt={product.slug}/>
                                            <p className='suggest_item-name'>{product.name}</p>
                                        </Link>
                                    </div>
                                </div>
                                ))
                            }
                        </Row>
                    </Row>
                    <div className='suggest_btn-left' onClick={handleScrollLeft}><i class="fa-solid fa-chevron-left"></i></div>
                    <div className='suggest_btn-right' onClick={handleScrollRight}><i class="fa-solid fa-chevron-right"></i></div>
                </Col>
            </Row>
        </section>
    );
}

export default Navbar;