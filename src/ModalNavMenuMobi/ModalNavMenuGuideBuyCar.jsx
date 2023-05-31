import clsx from "clsx"
import { Link } from "react-router-dom"
import cssModalMenuMobi from './ModalNavMenuMobi.module.scss'
export default function ModalNavMenuGuideBuyCar() {
    return (
        <div className={clsx(cssModalMenuMobi.form__box__body)}>
            <ul className={clsx(cssModalMenuMobi.form__box__list_items)}>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Chọn Cấu Hình Xe</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Đăng Ký Lái Thử </div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Danh Sách Nhà Phân Phối </div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Bảng Giá & Brochure</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Khối Doanh Nghiệp Và Khách Hàng Ưu Tiên</div>
                    </Link>
                </li>
            </ul>
        </div>

    )
}