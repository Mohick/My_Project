import clsx from "clsx"
import { Link } from "react-router-dom"
import cssModalMenuMobi from './ModalNavMenuMobi.module.scss'
export default function ModalNavMenuTheCar() {
    return (
        <div className={clsx(cssModalMenuMobi.form__box__body)}>
            <ul className={clsx(cssModalMenuMobi.form__box__list_items)}>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Tất Cả Các Dòng Xe </div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Sedan</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>SUV Xe địa Hình</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Coupé</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Mercedes-EQ</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Mercedes-AMG</div>
                    </Link>
                </li>
                <li className={clsx(cssModalMenuMobi.form__box_items)}>
                    <Link to={'#'}>
                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Các Dòng Xe Mới</div>
                    </Link>
                </li>
            </ul>
        </div>

    )
}