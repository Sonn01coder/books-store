import React, { useEffect } from 'react';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../rating/Rating';
import './productScreen.css'
import { useStore } from '../../store';
import data, { listCategory } from '../../data'
import { ToastContainer } from 'react-toastify';

function ProductScreen(props) {
    const {handleAddToCart} = useStore()
    const {slug} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

    const product = data.products.find((x)=> x.slug === slug)
    const productCategory = []
    data.products.map(x => {
        for(let i in product.category) {
            if( x.category.includes(product.category[i]) && !productCategory.includes(x)) {
                productCategory.push(x)
            }
        }
     })

    return (
        <section className='productScreen'>
            <ToastContainer />
            <Row>
                <Col md={2} className="productScreen_list-category" >
                    <p className='productScreen_title '>DANH MỤC BOOK</p>
                    <ListGroup className='productScreen_list'>
                        {
                            listCategory.map((item, index) => (
                                <Link  to={`/category/${item}`} key={product._id}>
                                    <ListGroupItem className='slide_item' key={index}>
                                            {item}
                                    </ListGroupItem>
                                 </Link>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col md={7}>
                    <Row>
                        <div className='productScreen_navigation'>
                            <Link to='/BookStore' className='productScreen_link'>Trang Chủ</Link> / 
                            <Link  to={`/category/${product.category[0]}`} className='productScreen_link'>{product.category[0]}</Link> /
                            <span className='productScreen_link'> {product.name}</span> 
                        </div>
                    </Row>

                    <Row className='product_wrap-intro'>
                        <Col md={4} className="productScreen_img" >
                            <img src={product.image} alt="img"></img>
                        </Col>
                        <Col md={7} className="productScreen_intro">
                            <Row className="productScreen_name">{product.name}</Row>
                            <Row className='productScreen_introduce'>{product.introduce}</Row>
                            <Row className='productScreen_intro-container'>
                                <Col md={12} className="productScreen_author">
                                    Tác giả: 
                                    <p>{product.author}</p>
                                </Col>
                                <Col md={12} className='productScreen_price'>{product.price} VND</Col>
                                <Col md={12} className='productScreen_tags'>Tags: {product.category[0]}, {product.category[1]}</Col>
                                <Col md={12} className='productScreen_status'>
                                    Tình trạng:
                                    <span>còn hàng</span>
                                </Col>
                                <Col className='productScreen_button-cart' onClick={() => handleAddToCart(product)}> 
                                    <button >Thêm vào giỏ hàng</button>
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>

                    <Row>
                        <Col md={12} className="productScreen_details">Thông tin chi tiết</Col>
                        <Col>
                            <ListGroup className='productScreen_intro-list'>
                                <ListGroupItem className='productScreen_intro-item'>Nhà xuất bản:  <a>Sonncode01</a></ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Ngày sản xuất: 16/02/2023</ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Nhà phát hành: <a>Sonncode01</a> </ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Kích thước: 17.0 x 24.0 1.0 </ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Số trang: 128 </ListGroupItem>
                                <ListGroupItem className='productScreen_intro-item'>Trọng lượng: 350gram</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} className="productScreen_type">Sản phẩm cùng loại</Col>
                        <Col md={12}>
                            <Row>
                                {
                                    productCategory.map((product, index) => (
                                         index < 4 ? (
                                             <Col md={2} className="productScreen_list-type" key={index}>
                                                 <Link to={`/product/${product.slug}`}>
                                                    <img src={product.image} alt="img"/>
                                                </Link>
                                            </Col>
                                        ) : null
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>

                    <Row className='product_review'>
                        <Col md={12} className="productScreen_review-title">NHẬN XÉT CỦA KHÁCH HÀNG</Col>
                        <Col md={12} className="productScreen_review-rating">
                            <span>Đánh giá: </span>
                            <Rating rating={product.rating} numReview={product.numberReviews}/> 
                        </Col>
                        <Row>
                            <Col md={12} className="productScreen_review-comment">Bình luận</Col>
                            <Col className="productScreen_review-input">
                                <input type="text" placeholder='Viết bình luận của bạn ...' />
                            </Col>
                            <Col md={12} className="productScreen_review-footer">
                                <Row>
                                    <Col md={12} className="productScreen_review-item">
                                        <Col md={12} className="productScreen_review-wrapper">
                                            <div className='productScreen_review-img'>
                                                <img src="https://i.pinimg.com/236x/08/44/c5/0844c5eb33e92d674e6ad124bac4903a.jpg" alt="a" />
                                            </div>
                                            <div className='productScreen_review-name'>Nguyen</div>
                                        </Col>
                                        <Col md={12} className="productScreen_review-data">16:42 09-12-2022</Col>
                                        <Col md={12} className="productScreen_review-comment">
                                            <p>Giao hàng nhanh, sách hay okela, khen</p>
                                        </Col>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12} className="productScreen_review-item">
                                        <Col md={12} className="productScreen_review-wrapper">
                                            <div className='productScreen_review-img'>
                                                <img src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/04/Anh-avatar-dep-anh-dai-dien-FB-Tiktok-Zalo.jpg?ssl=1" alt="a" />
                                            </div>
                                            <div className='productScreen_review-name'>Trường</div>
                                        </Col>
                                        <Col md={12} className="productScreen_review-data">18:02 11-09-2022</Col>
                                        <Col md={12} className="productScreen_review-comment">
                                            <p>Sách hay dễ đọc và khuyến khích nên mua</p>
                                        </Col>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12} className="productScreen_review-item">
                                        <Col md={12} className="productScreen_review-wrapper">
                                            <div className='productScreen_review-img'>
                                                <img src="https://i.pinimg.com/474x/3d/b7/9e/3db79e59b9052890ea1ffbef0f3970cc.jpg" alt="a" />
                                            </div>
                                            <div className='productScreen_review-name'>Sơn</div>
                                        </Col>
                                        <Col md={12} className="productScreen_review-data">09:31 09-12-2021</Col>
                                        <Col md={12} className="productScreen_review-comment">
                                            <p>Giao hàng nhanh</p>
                                        </Col>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Col>

                <Col>
                    <Row>
                    <Col className='productScreen_contact'>
                            <h5>Thông tin & khuyến mãi</h5>
                            <p>- Đổi trả hàng trong vòng 7 ngày</p>
                            <p>- Được kiểm tra hàng trước khi thanh toán(COD)</p>
                            <p>- Đối với khách hành thanh toán bằng hình thức chuyển khoản vui lòng ghi nội dung chuyển khoản là sdt của bạn. Chúng tôi sẽ liên hệ ngay với bạn để xác nhận lại</p>
                            <p>- Mọi thắc mắc xin liên hệ qua: (+84) 123456789</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </section>
    );
}

export default ProductScreen;