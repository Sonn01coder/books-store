import React from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link,  useParams} from 'react-router-dom';
import './productCategory.css'
import { useStore } from '../../store';
import data from '../../data'
import { ToastContainer } from 'react-toastify';
import { listCategory } from '../../data';

function ProductCategory(props) {
    const {handleAddToCart} = useStore()
    const {slug} = useParams();

    const productCategory = []
    data.products.map(product => {
       if( product.category.includes(slug) ) {
            productCategory.push(product)
       }
    })

    return (
        <section className='productCategory'>
            <ToastContainer />
            <Row>
                <Col md={2} className="productCategory_list-category" >
                    <p className='productCategory_title '>DANH MỤC BOOK</p>
                    <ListGroup className='productCategory_list'>
                        {
                            listCategory.map((item, index) => (
                                <Link  to={`/category/${item}`} key={index}>
                                    <ListGroupItem className='slide_item' >
                                            {item}
                                    </ListGroupItem>
                                 </Link>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <Row>
                        <div className='productCategory_navigation'>
                            <Link to='/' className='productCategory_link'>Trang Chủ</Link> / 
                            <span className='productCategory_link'>{slug}</span> 
                        </div>
                    </Row>

                    <Row className='productCategory_container'>
                        {
                            <Col md={12} className='productCategory_book-lists'>
                                <Row>
                                    {
                                        productCategory.map(product => (
                                            <Col md={3} key={product._id}>
                                                <Link to={`/product/${product.slug}`}>
                                                    <div className='productCategory_book-item'>
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
                        }
                    </Row>
                </Col>
            </Row>

        </section>
    );
}

export default ProductCategory;
