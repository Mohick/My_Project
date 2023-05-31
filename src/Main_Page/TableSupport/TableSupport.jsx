import { Link } from "react-router-dom"
import clsx from "clsx"
import cssTable from './TableSupport.module.scss'
import Steering from "../../iconSteering/iconSteering"
import ArrowRight from "../../ArrowRight/ArrowRight"
import IconTable from "../../IconTab/iconTab"
import IconShoping from "../../iconShoping/IconShoping"
import IconCarSetting from "../../IconCarSetting/IconCarSetting"
import IconTools from "../../iconTools/IconTools"
import IconContactEmail from "../../IconEmail/IconEmail"
export default function TableSupport() {

    return (
        <div className={clsx(cssTable.form)}>
            <div className={clsx(cssTable.form__container)} id="grid__System">
                <div className={clsx(cssTable.form__container_content)}>
                    <div className={clsx(cssTable.form__box_content)}>
                        <Link to={"Đăng ký lái thử"}>
                            <div className={clsx(cssTable.form__container_box)}>
                                <div className={clsx(cssTable.form__box_Steering)}><Steering /></div>
                                <div className={clsx(cssTable.form__box_header)}>
                                    <div className={clsx(cssTable.form__box_title)}><h3>Đăng ký lái thử</h3></div>
                                    <div className={clsx(cssTable.form__box_description)}>
                                        <p >Đặt lịch hẹn lái thử tại Nhà Phân Phối</p>
                                    </div>
                                </div>
                                <div className={clsx(cssTable.form__box_arrowRight)}><ArrowRight /></div>
                            </div>
                        </Link>
                    </div>
                    <div className={clsx(cssTable.form__box_content)}>
                        <Link to={"Đăng ký lái thử"}>
                            <div className={clsx(cssTable.form__container_box)}>
                                <div className={clsx(cssTable.form__box_Steering)}><IconTable /></div>
                                <div className={clsx(cssTable.form__box_header)}>
                                    <div className={clsx(cssTable.form__box_title)}><h3>Bảng giá & brochure</h3></div>
                                    <div className={clsx(cssTable.form__box_description)}>
                                        <p >Tải về bảng giá & brochure</p>
                                    </div>
                                </div>
                                <div className={clsx(cssTable.form__box_arrowRight)}><ArrowRight /></div>
                            </div>
                        </Link>
                    </div>
                    <div className={clsx(cssTable.form__box_content)}>
                        <Link to={"Đăng ký lái thử"}>
                            <div className={clsx(cssTable.form__container_box)}>
                                <div className={clsx(cssTable.form__box_Steering)}><IconShoping /></div>
                                <div className={clsx(cssTable.form__box_header)}>
                                    <div className={clsx(cssTable.form__box_title)}><h3>Tìm xe có sẵn</h3></div>
                                    <div className={clsx(cssTable.form__box_description)}>
                                        <p >Tìm xe có sẵn và nhận báo giá</p>
                                    </div>
                                </div>
                                <div className={clsx(cssTable.form__box_arrowRight)}><ArrowRight /></div>
                            </div>
                        </Link>
                    </div>
                    <div className={clsx(cssTable.form__box_content)}>
                        <Link to={"Đăng ký lái thử"}>
                            <div className={clsx(cssTable.form__container_box)}>
                                <div className={clsx(cssTable.form__box_Steering)}><IconCarSetting /></div>
                                <div className={clsx(cssTable.form__box_header)}>
                                    <div className={clsx(cssTable.form__box_title)}><h3>Công cụ cấu hình xe</h3></div>
                                    <div className={clsx(cssTable.form__box_description)}>
                                        <p >Chọn cấu hình xe bạn mong muốn</p>
                                    </div>
                                </div>
                                <div className={clsx(cssTable.form__box_arrowRight)}><ArrowRight /></div>
                            </div>
                        </Link>
                    </div>
                    <div className={clsx(cssTable.form__box_content)}>
                        <Link to={"Đăng ký lái thử"}>
                            <div className={clsx(cssTable.form__container_box)}>
                                <div className={clsx(cssTable.form__box_Steering)}><IconTools /></div>
                                <div className={clsx(cssTable.form__box_header)}>
                                    <div className={clsx(cssTable.form__box_title)}><h3>Đặt lịch hẹn dịch vụ</h3></div>
                                    <div className={clsx(cssTable.form__box_description)}>
                                        <p >Đặt lịch hẹn dịch vụ tại đại lý</p>
                                    </div>
                                </div>
                                <div className={clsx(cssTable.form__box_arrowRight)}><ArrowRight /></div>
                            </div>
                        </Link>
                    </div>
                    <div className={clsx(cssTable.form__box_content)}>
                        <Link to={"Đăng ký lái thử"}>
                            <div className={clsx(cssTable.form__container_box)}>
                                <div className={clsx(cssTable.form__box_Steering)}><IconContactEmail /></div>
                                <div className={clsx(cssTable.form__box_header)}>
                                    <div className={clsx(cssTable.form__box_title)}><h3>Liên hệ</h3></div>
                                    <div className={clsx(cssTable.form__box_description)}>
                                        <p >Yêu cầu tư vấn</p>
                                    </div>
                                </div>
                                <div className={clsx(cssTable.form__box_arrowRight)}><ArrowRight /></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    )
}