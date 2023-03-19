import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './news.css'
import new1 from '../../../asset/img/news1.jpg';
import new2 from '../../../asset/img/news2.jpg';
import new3 from '../../../asset/img/news3.jpg';
import new4 from '../../../asset/img/news4.jpg';
import { Link } from 'react-router-dom';

function News(props) {
    return (
        <Container id='news'>
            <Row>
                <Col className='news_title'>TIN TỨC & SỰ KIỆN</Col>
            </Row>
            <Row >
                <Col md={6} className="padding-right-left-20px">
                    <div className='news_wrap'>
                        <div className='news_img'>
                            <img src={new1} alt="aa"/>
                            <div className='news_date'>
                                <p>1</p>
                                <span>Tháng 3</span>
                            </div>
                        </div>

                        <div className='news_content'>
                            <p className='news_blog-title'>THƯ GỞI BẠN XA XÔI (1.3.2019)</p>
                            <p className='news_blog-text'>Đúng là lúc đầu, tập “tản văn” này mình lấy Tựa là “Một ngày kia đến bờ” và post lên dohongngoc.com một vài đoạn… để bạn bè mình xem thử. Không ngờ dù đã “rao trước” chỉ dành cho ” người cao tuổi”, trên dưới 70 mới nên đọc mà các bạn trẻ cũng đọc, rồi kêu bác đổi tựa đi, tựa này nghe đầy “hù dọa”, bác nghĩ coi, con để cuốn sách này trong túi xách, đặt trên bàn, hay cầm trên tay vào quán càphê thì người ta dòm con… ra sao?</p>
                            <Link to='/maintenance' className='news_more'>
                                XEM THÊM
                                <i class="fa-solid fa-angles-right"></i>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="padding-right-left-20px">
                    <div className='news_wrap'>
                        <div className='news_img'>
                            <img src={new2} alt="aa"/>
                            <div className='news_date'>
                                <p>22</p>
                                <span>Tháng 11 </span>
                            </div>
                        </div>

                        <div className='news_content'>
                            <p className='news_blog-title'>DUYÊN VỢ CHỒNG VÀ VĂN CHƯƠNG VIỆT - Ý</p>
                            <p className='news_blog-text'>Tình yêu giúp họ nên đôi sau bao chướng ngại trùng trùng. Tình yêu nâng cánh họ trên bước đường văn chương, thăng hoa và lắng đọng cùng những trang viết</p>
                            <Link to='/maintenance' className='news_more'>
                                XEM THÊM
                                <i class="fa-solid fa-angles-right"></i>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="padding-right-left-20px">
                    <div className='news_wrap'>
                        <div className='news_img'>
                            <img src={new3} alt="aa"/>
                            <div className='news_date'>
                                <p>19</p>
                                <span>Tháng 11 </span>
                            </div>
                        </div>

                        <div className='news_content'>
                            <p className='news_blog-title'> BS NGUYỄN CHẤN HÙNG VÀ NHỮNG DÒNG SÔNG LÃNG DU</p>
                            <p className='news_blog-text'>(PL)- Đọc Nhẹ bước lãng du, người đọc sẽ tìm thấy hình ảnh một trí thức lãng tử, khoan thai đi giữa cuộc đời. Ở đó, ông thấy đời thú vị như cụm lục bình dặt dìu trô</p>
                            <Link to='/maintenance' className='news_more'>
                                XEM THÊM
                                <i class="fa-solid fa-angles-right"></i>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="padding-right-left-20px">
                    <div className='news_wrap'>
                        <div className='news_img'>
                            <img src={new4} alt="aa"/>
                            <div className='news_date'>
                                <p>15</p>
                                <span>Tháng 10</span>
                            </div>
                        </div>

                        <div className='news_content'>
                            <p className='news_blog-title'>THÔNG TIN BÁO CHÍ - TUẦN LỄ SÁCH HAY 2018</p>
                            <p className='news_blog-text'>Từ lần tổ chức đầu tiên vào năm 2009, đến nay, Tuần lễ Sách hay của Nhà xuất bản Tổng hợp Thành phố Hồ Chí Minh bước sang lần tổ chức thứ 12. Sự kiện được tổ chức tại ba địa điểm: Nhà sách Tổng hợp 1 (62 Nguyễn Thị Minh Khai, Quận 1), Nhà sách Tổng hợp 2 (86 - 88 Nguyễn Tất Thành, Quận 4) và Gian hàng M01 (Đường sách Thành phố Hồ Chí Minh - Nguyễn Văn Bình, Quận 1) từ ngày 20/10 đến ngày 27/10/2018 (8 giờ đến 21 giờ mỗi ngày).</p>
                            <Link to='/maintenance' className='news_more'>
                                XEM THÊM
                                <i class="fa-solid fa-angles-right"></i>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default News;