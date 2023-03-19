import React, { useRef } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useScrollY } from '../../hooks/useScrollY';
import './bookscategory.css'
import { listCategory } from '../../../data';
import { Link } from 'react-router-dom';


function BooksCategory(props) {
    const [scrollY] = useScrollY()
    const ref = useRef()

    return (
        <section
            className='booksCategory'
            style={(scrollY >=36 && scrollY < 3250)  ? {position: 'fixed', top: 'calc(var(--height-header) + var(--height-headerFooter))'} : {position: ""}}
             ref={ref}
             >
            <div 
                className="slide_nav-wrap"
                style={scrollY >= 3250 ? {position: 'absolute', bottom: "0px", top: "auto"} : {position: ""}}
            >
                    <p className='slide_title'>DANH MỤC</p>
                    <ListGroup 
                        className='slide_list'
                        style={scrollY >= 3250 ? {marginBottom: '0px'} : {marginBottom: '75px'}}
                    >
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
                </div>
        </section>
    );
}

export default BooksCategory;