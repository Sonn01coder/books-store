import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './payment.css'
import { useStore } from '../../store';
import {validationPayment} from './validationPayment'
import { Link } from 'react-router-dom';

function Payment(props) {
    const {listCart, initPrice} = useStore()
    const [value, setValue] = useState('')
    const [name , setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("") 
    const [address, setAddress] = useState("")
    const [error, setError] = useState({})
    
    const handleConfirmPayment = (e) => {
        setError(validationPayment({name, email, phone, address}))
        localStorage.clear()
    }

    return (
        <Container className='payment'>
            <Row>
                <Col md={4}>
                    <Row className='payment_info'>
                        <Col md={12}>
                            <p>Thông tin nhận hàng</p>
                        </Col>
                        <Col md={12} >
                            <Row className="payment_info-input">
                                <div>
                                    <input 
                                        type="text" 
                                        placeholder='Email' 
                                        name="email"
                                        value={email} 
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    { error.email && <p id="errorPayment">{error.email}</p> }
                                </div>

                                <div>
                                    <input 
                                        type="text" 
                                        placeholder='Họ và tên'
                                        name="name"
                                        value={name} 
                                        onChange={e => setName(e.target.value)}
                                     />
                                    { error.name && <p id="errorPayment">{error.name}</p> }
                                </div>

                                <div>
                                    <input 
                                        type="text" 
                                        placeholder='Số điện thoai' 
                                        name="phone"
                                        value={phone} 
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                    { error.phone && <p id="errorPayment">{error.phone}</p> }
                                </div>

                                <div>
                                    <input 
                                        type="text" 
                                        placeholder='Địa chỉ ' 
                                        name="address"
                                        value={address} 
                                        onChange={e => setAddress(e.target.value)}
                                    />
                                    { error.address && <p id="errorPayment">{error.address}</p> }
                                </div>
                                <input type="text" placeholder='Ghi chú ' className='payment_info-input-note'/>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col md={4}>
                    <Row className='payment_payments'>
                        <Col md={12}>
                            <p>Thanh toán</p>
                        </Col>
                        <Col md={12}>
                            <Row className='payment_payments-wrap'> 
                                <Col md={12} >
                                    <div className="payment_payments-item">
                                        <input type="radio" id="payment_money" name="payment" />
                                        <label htmlFor="payment_money" className='payment_payments-content'>
                                            <span>Thanh toán khi nhận hàng (COD)</span>
                                            <i class="fa-regular fa-money-bill-1"></i>
                                        </label>
                                    </div>
                                </Col>

                                <Col md={12} className="payment_atm" >
                                    <div className="payment_payments-item ">
                                        <input type="radio" id="payment_atm" name="payment" />
                                        <label htmlFor="payment_money" className='payment_payments-content'>
                                            <span>Thanh toán bằng chuyển khoản (ATM)</span>
                                            <i class="fa-regular fa-credit-card"></i>
                                        </label>
                                    </div>
                                    <div className='payment_payments-atm-note'>
                                        Quý khách vui lòng chuyển tiền vào stk:
                                        <a>0000000000</a>
                                        <p>Nguyễn Trường Sơn - ngân hàng Vietcombank</p>
                                        <span>Với nội dung là số điện thoại của bạn, chúng tôi sẽ liên lạc lại với bạn để xác nhận rằng đã thanh toán đơn hàng</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col md={4} className='payment_wrap-product'>
                    <Row >
                        <Col md={12} className="payment_wrap-product-title">Đơn hàng ({listCart.length} sản phẩm)</Col>
                        <Col md={12}>
                            <Row className='payment_product-height'>
                                {
                                    listCart.map( product => (
                                        <Col md={12} key={product._id} className="payment_product">
                                            <div>
                                                <img src={product.image} alt="img"/>
                                                <p>{product.name}</p>
                                            </div>
                                            <span>{product.price} VND</span>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                        <Col md={12} className="payment_voucher">
                            <input 
                                type="text" 
                                placeholder='Nhập mã giảm giá' 
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                            <button 
                                style={value ? {opacity:1} : {opacity:0.7}}
                                onClick={()=>setValue('')}
                             >Áp dụng</button>
                        </Col>
                        <Col md={12} className="payment_initPrice">
                            <div>
                                <span>Tạm tính</span>
                                <p>{initPrice} VND</p>
                            </div>
                            <div>
                                <span>Phí vận chuyển</span>
                                <p>0</p>
                            </div>
                            <div className='payment_sumPrice'>
                                <span>Tổng cộng</span>
                                <p>{initPrice} VND</p>
                            </div>
                        </Col>

                        <Col md={12} className="payment_footer">
                            <Link to='/cart'  className='payment_back'>
                                <i class="fa-solid fa-chevron-left"></i>
                                <span>Quay về giỏ hàng</span>
                            </Link>
                            <Link to={(error.name && error.email && error.phone && error.address) ? '/success' : ''  }>
                                <button onClick={handleConfirmPayment}>Đặt hàng</button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Payment;