import clsx from "clsx"
import { Link } from "react-router-dom"
import cssModalMenuMobi from './ModalNavMenuMobi.module.scss'
export default function ModalNavMenuServeci() {
    return (
        <div className={clsx(cssModalMenuMobi.form__box__body)}>
            <ul className={clsx(cssModalMenuMobi.form__box__list_items)}>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Đặt Hẹn Dịch Vụ Trực Tuyến</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Dịch VỤ  Hỗ Trợ Tra Cứu</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Bảo Dưỡng Sửa Chữa Và bảo  Hành</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Bảo Hiểm</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Phụ Tùng Và dầu Chính Hãng</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Phong Cách Mercedes-Benz</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Bản Tin Kỹ THuật</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>chương Trình Triệu Hôi túi khí ataka</div>
                    </Link>
                </li>
            </ul>
        </div>

    )
}