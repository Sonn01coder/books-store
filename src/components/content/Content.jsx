import BooksHot from './booksHot/BooksHot';
import Navbar from './navbar/Navbar';
import News from './news/News';
import Testimonial from './testimonial/Testimonial';
import './content.css'
import Slider from './slider/Slider';
import Contact from './contact/Contact';
import { Col, Row } from 'react-bootstrap';
import BooksCategory from './booksCategory/BooksCategory';
import { useEffect } from 'react';

function Content(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

    return (
        <div className='.modal-fullscreen content'>
            <Row>
                <Col md={2} className="content_categoryBooks-padding0">
                    <div className="content_categoryBooks">
                        <BooksCategory />
                    </div>
                </Col>
                <Col md={10} className="content_container">
                    <Slider />
                    <Navbar />
                    <Testimonial />
                    <BooksHot />
                    <News />
                    <Contact />
                </Col>
            </Row>
            {/* <Footer /> */}
        </div>
    );
}

export default Content;