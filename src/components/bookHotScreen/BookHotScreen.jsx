import React, { useEffect } from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { listCategory }from '../../data';
import data from '../../data';
import { useStore } from '../../store';
import { ToastContainer } from 'react-toastify';

function BookHotScreen(props) {
    const {handleAddToCart} = useStore();
    const booksHot =  data.products.filter(product => product.booksHot === true)

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

    return (
        <section className='bookHotScreen'>
            <ToastContainer />
            <Row>
                <Col md={2} className="searchProduct_list-category" >
                    <p className='searchProduct_title '>DANH MỤC BOOK</p>
                    <ListGroup className='searchProduct_list'>
                        {
                            listCategory.map((item, index) => (
                                <Link  to={`/category/${item}`}>
                                    <ListGroupItem className='slide_item' key={index}>
                                            {item}
                                    </ListGroupItem>
                                 </Link>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <Row>
                        <div className='searchProduct_navigation'>
                            <Link to='/' className='searchProduct_link'>Trang Chủ</Link> / 
                            <span className='searchProduct_link'>Sách hot</span> 
                        </div>
                    </Row>

                    <Row className='searchProduct_container'>
                        <Col md={12} className='searchProduct_book-lists'>
                            <Row>
                                {
                                    booksHot.map(product => (
                                        <Col md={3}>
                                            <Link to={`/product/${product.slug}`}>
                                                <div className='searchProduct_book-item'>
                                                    <img src={product.image} alt="searchBook"/>
                                                    <p>{product.name}</p>
                                                    <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
                                                </div>
                                            </Link>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}

export default BookHotScreen;
