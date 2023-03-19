import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './contact.css'
import contactMap from "../../../asset/img/contactMap.png";
import {validationContact} from './validationContact.jsx'

function Contact(props) {
    const [error, setError] = useState({})
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [content, setContent] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setError(validationContact({name, email, content}))
        if(!validationContact({name, email, content}).name && 
           !validationContact({name, email, content}).email && 
           !validationContact({name, email, content}).content) {
            setEmail("")
            setContent("")
            setName("")
            alert("Chúng tôi sẽ liên lạc lại với thông qua email bạn đã gửi!")
        }
    }


    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='padding-right-left-20px'>
                    <Col md={12} className="contact_title">LIÊN HỆ VỚI CHÚNG TÔI</Col>
                    <Col md={12} className="contact_wrap">
                        <Row>
                            <Col md={6}>
                                <img src={contactMap} alt="map"/>
                            </Col>
                            <Col md={6}>
                                <Row className='contact_wrap-item'>
                                    <Col md={12} className="contact_item">
                                        Tên
                                        <span>*</span>
                                    </Col>
                                    <Col md={12} className="contact_input">
                                        <input 
                                            type="text" 
                                            placeholder='Họ và tên...' 
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </Col>
                                    {error.name && <p id='errorContact'>{error.name}</p>}
                                </Row>

                                <Row  className='contact_wrap-item'>
                                    <Col md={12} className="contact_item">
                                        Email
                                        <span>*</span>
                                    </Col>
                                    <Col md={12} className="contact_input">
                                        <input 
                                            type="text" 
                                            placeholder='Email...'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Col>
                                    {error.email && <p id='errorContact'>{error.email}</p>}
                                </Row>

                                <Row  className='contact_wrap-item'>
                                    <Col md={12} className="contact_item">
                                        Nội dung
                                        <span>*</span>
                                    </Col>
                                    <Col md={12} className="contact_input-content">
                                        < input 
                                            type="text" 
                                            placeholder='Nội dung...'
                                            value={content}
                                            onChange={e => setContent(e.target.value)}
                                        />
                                    </Col>
                                    {error.content && <p id='errorContact'>{error.content}</p>}
                                </Row>

                                <Row>
                                    <button className="contact_button" onClick={handleFormSubmit}>Gửi liên hệ</button>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;