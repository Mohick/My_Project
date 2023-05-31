import clsx from "clsx"
import { Link } from "react-router-dom"
import cssModalMenuMobi from './ModalNavMenuMobi.module.scss'
export default function ModalNavMenuBuyCar() {
    return (
        <div className={clsx(cssModalMenuMobi.form__box__body)}>
            <ul className={clsx(cssModalMenuMobi.form__box__list_items)}>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Xe Mới</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Xe Đã Qua Sử Dụng </div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Phụ Kiện Chính Hãng</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Bộ Sưu Tập Mercedes-Benz</div>
                    </Link>
                </li>
            </ul>
        </div>

    )
}