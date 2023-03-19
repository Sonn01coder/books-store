import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './booksHot.css'
import data from '../../../data'
import Rating from '../../rating/Rating';
import { Link } from 'react-router-dom';
import { useStore } from '../../../store';
import { ToastContainer } from 'react-toastify';

function BooksHot(props) {
    const listBooksHot = data.products.filter(product => {
        return product.booksHot === true
    })

    const {handleAddToCart} = useStore()

    return (
        <div className='booksHot' id="booksHot">
            <ToastContainer />
            <Container>
                <Row>
                    <Col className='booksHot_title'>MỌI NGƯỜI ĐỀU ĐỌC</Col>
                </Row>
                <Row className='booksHot_wrap'>
                        {
                            listBooksHot.map(product => (
                                <Col md={3} sm={6} xs={12} key={product._id}>
                                    <div className='booksHot_container'>
                                        <div className='booksHot_item'>
                                            <div className='booksHot_wrap'>
                                                <Link to={`/product/${product.slug}`} className='booksHot_img'>
                                                    <img src={product.image} alt="books" />
                                                </Link>
                                                <div className='booksHot_intro'>
                                                    <Link to={`/product/${product.slug}`}>{product.name}</Link>
                                                    <Rating rating={product.rating} numReview={product.numberReviews} />
                                                    <span className='booksHot_price'>Giá: {product.price}VND</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className='booksHot_btn-add' onClick={() => handleAddToCart(product)}>
                                            <i class="fa-solid fa-bag-shopping"></i>
                                            <p>Thêm vào giỏ</p>
                                        </button>
                                    </div>
                                </Col>
                            ))
                        }
                </Row>
            </Container>
        </div>
    );
}

export default BooksHot;