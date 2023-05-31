import IconCar from "../../IconCar/IconCar";
import { Link } from "react-router-dom";
import cssNav from './Nav.Module.scss'
import clsx from "clsx";
import NavModalTheCar from "./NavModal/TheCar/NavModalTheCar";
import { handleShowModalTheCar } from "./NavModal/TheCar/HandleShowModalTheCar/handleShowModalTheCar";
import NavModalBuyCar from "./NavModal/BuyCar/NavModalBuyCar";
import { handleShowModalBuyCar } from "./NavModal/BuyCar/HandleShowModalBuyCar/handleShowModalBuyCar";
import NavModalGuideBuyCar from "./NavModal/GuideBuyCar/NavModalGuideBuyCar";
import { handleShowModalGuideBuyCar } from "./NavModal/GuideBuyCar/HandleShowModalGuideBuyCar/handleShowModalGuideBuyCar";
import NavModalService from "./NavModal/Service/NavModalService";
import { handleShowModalService } from "./NavModal/Service/HandleShowModalService/handleShowModalService";
import NavModalGlobalMer from "./NavModal/GlobalMer/NavModalGlobalMer";
import { handleshowModalGlobalMer } from "./NavModal/GlobalMer/HandleShowModalGlobalMer/handleShowModalGlobalMer";
export default function Navigation() {
    return (
        <div className={clsx(cssNav.form)}>
            <div className={clsx(cssNav.form__container)} id="grid__System">
                <ul className={clsx(cssNav.form__container_list)}>
                    <li className={clsx(cssNav.form__container_items, cssNav.form__container_items_theCar)} onClick={(e) => handleShowModalTheCar(e)}>
                        <Link className={clsx(cssNav.form__container_item)} to="/">
                            <div className={clsx(cssNav.form__icon_car)}><IconCar /></div>
                            <div><h3> Các Dòng Xe</h3></div>
                            <div className={clsx(cssNav.localUser)}></div>
                        </Link>
                    </li>
                    <div><NavModalTheCar /></div>
                    <li className={clsx(cssNav.form__container_items, cssNav.form__container_items_buyCar)} onClick={(e) => handleShowModalBuyCar(e)}>
                        <Link className={clsx(cssNav.form__container_item)} to="/">
                            <h3>Mua xe trực Tuyến</h3>
                            <div className={clsx(cssNav.localUser)}></div>
                        </Link>
                    </li>
                    <div><NavModalBuyCar /></div>
                    <li className={clsx(cssNav.form__container_items, cssNav.form__container_items_guideBuyCar)} onClick={(e) => handleShowModalGuideBuyCar(e)}>
                        <Link className={clsx(cssNav.form__container_item)} to="/">
                            <h3> Tư vấn mua xe </h3>
                            <div className={clsx(cssNav.localUser)}></div>

                        </Link>
                        <NavModalGuideBuyCar />
                    </li>
                    <li className={clsx(cssNav.form__container_items, cssNav.form__container_items_service)} onClick={(e) => handleShowModalService(e)}>
                        <Link className={clsx(cssNav.form__container_item)} to="/">
                            <h3> Dịch vụ </h3>
                            <div className={clsx(cssNav.localUser)}></div>
                        </Link>
                    </li>
                    <NavModalService />
                    <li className={clsx(cssNav.form__container_items, cssNav.form__container_items_globalCar)} onClick={e => handleshowModalGlobalMer(e)}>
                        <Link className={clsx(cssNav.form__container_item)} to="/">
                            <h3> Thế giới Mercedes-Benz </h3>
                            <div className={clsx(cssNav.localUser)}></div>
                        </Link>
                    </li>
                    <NavModalGlobalMer />
                </ul>
            </div>
        </div>
    )
}