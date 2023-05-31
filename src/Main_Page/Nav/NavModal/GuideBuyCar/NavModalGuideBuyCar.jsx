import clsx from 'clsx'
import cssNavModalGuideBuyCar from './NavModalGuideBuyCar.Module.scss'

import Close from '../../../../Close/Close'
import { Link } from 'react-router-dom'
import { handleCloseModalGuideBuyCar } from './HandleShowModalGuideBuyCar/handleCloseModalGuideBuyCar'
export default function NavModalGuideBuyCar() {

    return (
        <div className={clsx(cssNavModalGuideBuyCar.form)} onClick={(e) => { handleCloseModalGuideBuyCar(e) }}>
            <div className={clsx(cssNavModalGuideBuyCar.form__container)} id='grid__PC-height'>
                <div className={clsx(cssNavModalGuideBuyCar.form__box_content)}>
                    <div className={clsx(cssNavModalGuideBuyCar.form__box_title)}>
                        <h3> Tư Vấn Mua Xe </h3>
                    </div>
                    <div className={clsx(cssNavModalGuideBuyCar.form__box_close)} >
                        <Close />
                    </div>
                    <div className={clsx(cssNavModalGuideBuyCar.form__box_list)}>
                        <ul>
                            <li>
                                <Link> Tất Cả Các Dòng Xe</Link>
                            </li>
                            <li>
                                <Link>Chọn Cấu Hình Xe</Link>
                            </li>
                            <li>
                                <Link>Đăng Ký Lái Thử</Link>
                            </li>
                            <li>
                                <Link>Danh Sách Phân Phối</Link>
                            </li>
                            <li>
                                <Link>Bảng giá & brochure</Link>
                            </li>
                            <li>
                                <Link>Khối doanh nghiệp & khách hàng ưu tiên</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}