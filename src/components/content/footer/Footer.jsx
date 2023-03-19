import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import './footer.css'
import { validationFooter } from './validationFooter';

function Footer(props) {
    const [email, setEmail] = useState('')

    const handleSendEmail = () => {
        
        validationFooter({email}).email ? 
            (
                toast.error(validationFooter({email}).email)
            ) : 
            (
                toast.success("Đăng ký nhận tin thành công")
            )

        if(!validationFooter({email}).email) {
            setEmail("")
        }
        }

    return (
        <div className='footer'>
            <ToastContainer />
            <Container>
                <Row>
                    <Col md={12} className="footer_title">
                        <span>ĐĂNG KÝ NHẬN TIN QUA EMAIL</span>
                        <p>Hãy đăng ký ngay hôm nay để nhận được những tin tức cập nhật mới nhất về sản phẩm và các chương trình giảm giá, khuyến mại của chúng tôi.</p>
                    </Col>
                    <Col md={12} className="footer_input">
                        <input 
                            type="text" 
                            placeholder='Nhập email của bạn...' 
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <i class="fa-solid fa-paper-plane" onClick={handleSendEmail}></i>
                    </Col>
                    <Col md={12}  className="footer_img">
                        <img src="https://bizweb.dktcdn.net/100/047/782/themes/877502/assets/bg-newsletter.png?1662432382439" alt='aaa' />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className='footer_wrap'>
                            <p> Build by <a href='https://github.com/Sonn01coder'>Sonncoder01</a> base on Reactjs</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;