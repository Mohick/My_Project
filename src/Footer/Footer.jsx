
import clsx from 'clsx'
import IconArrowTop from '../ArrowTop/ArrowTop'
import cssFooter from './Footer.module.scss'
import { Link } from 'react-router-dom'
import IconYouTobe from '../IconYouTobe/IconYouTobe'
import IconIn from '../IconIn/IconIn'
import IconFaceBook from '../IconFB/IconFaceBook'
import IconIntargram from '../IconIntargram/IconIntargram'
export default function Footer() {
    return (
        <div className={clsx(cssFooter.form)}>
            <div className={clsx(cssFooter.form__container)} id='grid__System'>
                <div className={clsx(cssFooter.form__box_back_top)}>
                    <div className={clsx(cssFooter.form__arrowTop__icon)} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <IconArrowTop />
                    </div>
                    <div className={clsx(cssFooter.form__arrowTop__title)}>
                        <h4>Lên trên</h4>
                    </div>
                </div>
                <div className={clsx(cssFooter.form__box_send_contact)}>
                    <div className={clsx(cssFooter.form___send_contact)}>
                        <div className={clsx(cssFooter.form___send_contact_title)}>
                            <h3> Giữ liên lạc với chúng tôi. </h3>
                        </div>
                        <div className={clsx(cssFooter.form___send_contact_description)}>
                            <p> Các thông tin hiện tại được điều chỉnh theo sở thích của bạn. </p>
                        </div>
                    </div>
                    <div className={clsx(cssFooter.form___signUp)}>
                        <Link to={'Đăng ký nhận bản tin'}>
                            <h3> Đăng ký nhận bản tin </h3>
                        </Link>
                    </div>
                </div>
                <div className={clsx(cssFooter.form__container_listItems)}>
                    <div className={clsx(cssFooter.form__box_listItems)}>
                        <div className={clsx(cssFooter.form__name_listItems)}>
                            <h3> Mua xe </h3>
                        </div>
                        <div className={clsx(cssFooter.form__listItems)}>
                            <ul>
                                <li><Link>Xe đã qua sử dụng</Link></li>
                                <li><Link>Xe mới</Link></li>
                                <li><Link>Chọn cấu hình xe</Link></li>
                                <li><Link>Bảng giá & brochure</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={clsx(cssFooter.form__box_listItems)}>
                        <div className={clsx(cssFooter.form__name_listItems)}>
                            <h3>  Tư vấn mua xe  </h3>
                        </div>
                        <div className={clsx(cssFooter.form__listItems)}>
                            <ul>
                                <li><Link>Yêu cầu tư vấn</Link></li>
                                <li><Link>Đăng ký lái thử</Link></li>
                                <li><Link>Tìm Nhà Phân Phối gần nhất</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={clsx(cssFooter.form__box_listItems)}>
                        <div className={clsx(cssFooter.form__name_listItems)}>
                            <h3> Dịch Vụ </h3>
                        </div>
                        <div className={clsx(cssFooter.form__listItems)}>
                            <ul>
                                <li><Link>Đặt hẹn dịch vụ</Link></li>
                                <li><Link>Ưu đãi đặc biệt</Link></li>
                                <li><Link>Chọn cấu hình xe</Link></li>
                                <li><Link>Triệu hồi xe</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={clsx(cssFooter.form__box_listItems)}>
                        <div className={clsx(cssFooter.form__name_listItems)}>
                            <h3> Các Dòng Xe </h3>
                        </div>
                        <div className={clsx(cssFooter.form__listItems)}>
                            <ul>
                                <li><Link>SUV</Link></li>
                                <li><Link>Sedan</Link></li>
                                <li><Link>Mercedes-AMG</Link></li>
                                <li><Link>Mercedes-Maybach</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={clsx(cssFooter.form__box_listItems)}>
                        <div className={clsx(cssFooter.form__name_listItems)}>
                            <h3> Giới Thiệu </h3>
                        </div>
                        <div className={clsx(cssFooter.form__listItems)}>
                            <ul>
                                <li><Link>Liên hệ</Link></li>
                                <li><Link>Câu chuyện của chúng tôi</Link></li>
                                <li><Link>Phát triển bền vững & tương lai</Link></li>
                                <li><Link>Tin tức & sự kiện</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={clsx(cssFooter.form__container_security)}>
                    <div className={clsx(cssFooter.form__box_security)}>
                        <ul className={clsx(cssFooter.form__box_permission_content)}>
                            <li>
                                <Link><h3>Bản  Quyền Nội Dung</h3></Link>
                            </li>
                            <li>
                                <Link><h3>Cài Đặt</h3></Link>
                            </li>
                            <li>
                                <Link> <h3>Quyền Riêng Tư Và Bảo Vệ Dữ Liệu</h3></Link>
                            </li>
                            <li>
                                <Link> <h3>Thông Tin Pháp Lý</h3></Link>
                            </li>

                        </ul>
                    </div>
                    <div className={clsx(cssFooter.form__box_icon_contact)}>
                        <ul>
                            <li>
                                <Link><IconFaceBook /></Link>
                            </li>
                            <li>
                                <Link><IconIntargram /></Link>
                            </li>
                            <li>
                                <Link><IconYouTobe /></Link>
                            </li>
                            <li>
                                <Link><IconIn /></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}