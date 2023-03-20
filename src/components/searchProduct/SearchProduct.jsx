import React, { useEffect } from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';
import './searchProduct.css'
import { useStore } from '../../store';
import data from '../../data'
import { ToastContainer } from 'react-toastify';
import { listCategory } from '../../data';

function SearchProduct(props) {
    const location = useLocation()
    const stringLocation = location.pathname
    const {handleAddToCart} = useStore();
    const handleStringLocation = () => {

    }

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    
    const filteredProducts = data.products.filter((product) => {
        if (
            product.name.toLowerCase().includes(stringLocation.slice(8).replace("%20", " ")) ||
            product.slug.toLowerCase().includes(stringLocation.slice(8).replace("%20", " ")) 
            // ||
            // product.author.map( 
            //     x => x.toLowerCase().includes(stringLocation.slice(8).replace("%20", " "))
            // ) ||
            // product.category.map(
            //     x => x.toLowerCase().includes(stringLocation.slice(8).replace("%20", " "))
            // )
          ) {
            return product;
          }              
    })

    return (
        <section className='searchProduct'>
            <ToastContainer />
            <Row>
                <Col md={2} className="searchProduct_list-category" >
                    <p className='searchProduct_title '>DANH MỤC BOOK</p>
                    <ListGroup className='searchProduct_list'>
                        {
                            listCategory.map((item, index) => (
                                <Link  to={`/category/${item}`} key={index}>
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
                            <span className='searchProduct_link'>Tìm kiếm</span> 
                        </div>
                    </Row>

                    <Row className='searchProduct_container'>
                        {
                            filteredProducts && filteredProducts.length > 0 ? 
                            (
                                <Col md={12} className='searchProduct_book-lists'>
                                    <Row>
                                        {
                                            filteredProducts.map(product => (
                                                <Col md={3} key={product._id}>
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
                            ) : (
                                <Col md={12} className="searchProduct_no-result">Không tìm thấy sản phù hợp với yêu cầu của bạn</Col>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </section>
    );
}

export default SearchProduct;
