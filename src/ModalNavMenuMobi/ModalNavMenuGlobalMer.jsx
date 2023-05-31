import clsx from "clsx"
import { Link } from "react-router-dom"
import cssModalMenuMobi from './ModalNavMenuMobi.module.scss'
export default function ModalNavMenuGlobalMer() {
    return (
        <div className={clsx(cssModalMenuMobi.form__box__body)}>
            <ul className={clsx(cssModalMenuMobi.form__box__list_items)}>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Hệ Thống Đa Phương Tiện MBUX</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Sáng Tạo Và Công Nghệ</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Bảo Dưỡng Sửa Chữa Và bảo  Hành</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Thiết Kế & Xe ý Tưởng</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Phát triễn Bền Vững</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Về Mercedes-Benz Việt Nam</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Mercedes-AMG</div>
                    </Link>
                </li>

            </ul>
        </div>

    )
}