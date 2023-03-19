import React, {useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useStore } from './hook';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import './store.css'
import { Link } from 'react-router-dom';

function Store() {
    const { listCart, setListCart} = useStore();
    const [totalPay, setTotalPay] = useState(0);
    const [user] = useAuthState(auth)

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    
    const handlePrice = () => {
        let sum =0;
        listCart.map((product) => {sum += product.price * product.countCart})
        setTotalPay(sum)
    }

    const handleCount = (product, d) => {
       const ind = listCart.indexOf(product)
       const arr = listCart;
       arr[ind].countCart += d
       if(arr[ind].countCart === 0) arr[ind].countCart = 1
       if(arr[ind].countCart > arr[ind].countInStock) arr[ind].countCart = arr[ind].countInStock;
       setListCart([...arr])
    }
    
    const handleRemove = (product) => {
        const newCart = listCart.filter(item => item._id !==  product._id)
        setListCart(newCart)
    }

    useEffect(()=>{
        handlePrice()
    }, [listCart]);


    return (
        <Container className='cart'>
            <Row className='cart_container'>
                <Col md={12} >
                    <p className='cart_title'>GIỎ HÀNG CỦA TÔI</p>
                </Col>
                <Col md={8} className='cart_wrap'>
                    <Row className='cart_wrap-header'>
                        <Col md={7} className="d-flex justify-content-center">Sản phẩm</Col>
                        <Col md={2} className="d-flex justify-content-center">Số lượng</Col>
                        <Col md={2} className="d-flex justify-content-center">Giá thành</Col>
                    </Row>
                    <Row  className='cart_list'>
                        {
                            listCart.length > 0 ?
                                (listCart.map(product => (
                                    <Col md={12} className='cart_item' key={product._id}>
                                        <Row>
                                            <Col md={7}>
                                                <Row className='cart_item-product'>
                                                    <Col md={3}><img src={product.image} /></Col>
                                                    <Col>{product.name}</Col>
                                                </Row>
                                            </Col>
                                            <Col md={2} className='d-flex justify-content-around align-items-center cart_item-countCart'>
                                                <i class="fa-solid fa-circle-minus cart_count-product" onClick={() => handleCount(product , -1)}></i>
                                                <span>{product.countCart}</span>
                                                <i class="fa-solid fa-circle-plus cart_count-product" onClick={() => handleCount(product , +1)}></i>
                                            </Col>
                                            <Col md={2} className="d-flex justify-content-center cart_item-price">{product.price * product.countCart} VND</Col>
                                            <Col className='cart_remove'><i class="fa-solid fa-trash" onClick={() => handleRemove(product)}></i></Col>    
                                        </Row>
                                    </Col>)
                                )) : (
                                    <p className='cart_no-product'>Hiện tại không có sản phẩm nào trong giỏ</p>
                                )
                        }
                    </Row>
                    
                </Col>
                <Col>
                    <Row className='cart_voucher'>
                        <Col md={12} className="cart_voucher-title">
                            Áp dụng mã giảm giá của riêng bạn
                        </Col>
                        <Col md={12} className="cart_voucher-input text-line-through">
                            <input type="radio" name="checkVoucher" value=""/>
                            <label>{"Giảm ngay 5% cho toàn bộ đơn hàng"}</label>
                        </Col>
                        <Col md={12} className="cart_voucher-input text-line-through">
                            <input type="radio" name="checkVoucher" value="" />
                            <label>{"Giảm ngay 25k cho toàn bộ đơn hàng"}</label>
                        </Col>
                        <Col md={12} className="cart_voucher-input">
                            <input type="radio" name="checkVoucher" value="" checked/>
                            <label>{"Freeship cho đơn hàng của bạn"}</label>
                        </Col>

                        <Col md={12} className="cart_payment-wrap">
                            <Row className='cart_payment'>
                                <Col md={6}>Tổng đơn hàng:</Col>
                                <Col md={6} className="cart_payment-money">{totalPay} VND</Col>
                            </Row>
                            <Row className='cart_payment'>
                                <Col md={6}>Phí ship:</Col>
                                <Col md={6} className="cart_payment-money">0 VND</Col>
                            </Row>
                            <Row className='cart_payment cart_payment-init'>
                                <Col md={6}>TThành tiền:</Col>
                                <Col md={6} className="cart_payment-money ">{totalPay} VND</Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row >
                        <Link to={user ? "/payment" : "/login"} className='cart_payment-btn'>
                            <button >Thanh toán ngay</button>
                        </Link>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Store;