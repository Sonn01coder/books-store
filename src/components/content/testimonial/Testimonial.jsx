import React, { useEffect, useState } from 'react';
import "./testimonial.css"
import sliderImg from '../../../asset/img/slider1.jpg'
import { Col, Row } from 'react-bootstrap';


function Testimonial(props) {
    const [count, setCount] = useState(0)
    const [sloganCurr, setSloganCurr] = useState(
    [
        "“Gặp được một quyển sách hay nên mua liền dù đọc được hay không đọc được, vì sớm muộn gì cũng cần đến nó.(W.Churchill)”",
        "“Cần phải yêu mến và tin vào sách . Cần rèn luyện cho mình thói quen thực hành và kỹ năng dùng sách để làm việc.(N. Rubakin)”",
        "“Bạn biết rằng bạn đã đọc một cuốn sách hay khi bạn giở đến trang cuối cùng và cảm thấy như mình vừa chia tay một người bạn.(Khuyết danh)”"
    ])

    useEffect(()=> {
        setInterval(()=> {
            setCount(count => count < 2 ? count + 1 : 0)
        }, 3000)
    }, [count])

    return (
        <section className='testimonial' style={{backgroundImage: `url(${sliderImg})`}}>
            <Row>
                <Col md={2}></Col>
                <Col md={8} className='testimonial_wrap'>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10} className="testimonial_text" >{sloganCurr[count]}</Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}

export default Testimonial;