import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './success.css'

function Success(props) {
    return (
        <Container>
            <Row>
                <Col md={12} className="success">
                    <p>Bạn đã đặt hàng thành công</p>
                    <Link to='/'>
                        <button>Tiếp tục mua hàng</button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Success;
