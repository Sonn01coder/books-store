import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './slider.css'

function Slider(props) {
    return (
        <section className='slider'>
            <Row>
                <Col md={8} className="slider_left">
                    <img src="https://bizweb.dktcdn.net/100/047/782/themes/877502/assets/slider_1.jpg?1676015839422" alt="text" />
                </Col>
                <Col md={4} className="slider_right">
                    <img src="https://bizweb.dktcdn.net/100/047/782/themes/877502/assets/slider_banner_top.jpg?1676015839422" alt="text" />
                </Col>
            </Row>
        </section>
    );
}

export default Slider;