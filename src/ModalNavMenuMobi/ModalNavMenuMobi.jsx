import clsx from "clsx";
import cssModalMenuMobi from './ModalNavMenuMobi.module.scss'
import Close from "../Close/Close";
import ArrowLeft from "../ArrowLeft/ArrowLeft";
import ArrowRight from "../ArrowRight/ArrowRight";
import { turnOffModal } from "./offModalNav/offModalNav";
import ModalNavMenuTheCar from "./ModalNavMenuTheCar";
import ModalNavMenuBuyCar from "./ModalNavMenuBuyCar";
import ModalNavMenuGuideBuyCar from "./ModalNavMenuGuideBuyCar";
import ModalNavMenuServeci from "./ModalNavMenuServeci";
import ModalNavMenuGlobalMer from "./ModalNavMenuGlobalMer";
import Find from "../Find/Find";
export default function ModalNavMenuMobi() {

    return (
        <div className={clsx(cssModalMenuMobi.form)} onClick={turnOffModal}>
            <div className={clsx(cssModalMenuMobi.form__container)} id="grid__System">
                <div className={clsx(cssModalMenuMobi.form__container__content)} >
                    <div className={clsx(cssModalMenuMobi.form__box__header)}>
                        <div className={clsx(cssModalMenuMobi.form__box__back)}>
                            <ArrowLeft />
                        </div>
                        <div className={clsx(cssModalMenuMobi.form__box__title)}>
                            <h2></h2>
                        </div>
                        <div className={clsx(cssModalMenuMobi.form__box__close)}>
                            <Close />
                        </div>
                    </div>
                    <div className={clsx(cssModalMenuMobi.form__box__search)}>
                        <form action="#">
                            <div className={clsx(cssModalMenuMobi.form__box__input)}>
                                <input placeholder="Từ khóa tìm kiếm / OnlineCode từ công cụ chọn cấu hình xe" type="search" name="" id="" />
                            </div>
                            <div className={clsx(cssModalMenuMobi.form__box__button)}>
                                <button type="submit"> <Find /></button>
                            </div>
                        </form>
                    </div>
                    <div className={clsx(cssModalMenuMobi.form__container__body__Content)}>
                        <div className={clsx(cssModalMenuMobi.form__container__body, cssModalMenuMobi.content__default, cssModalMenuMobi.form__container__body__default)}>
                            <div className={clsx(cssModalMenuMobi.form__box__body)}>
                                <ul className={clsx(cssModalMenuMobi.form__box__list_items)}>
                                    <li className={clsx(cssModalMenuMobi.form__box_items, cssModalMenuMobi.form__box__theCar)}>
                                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Các Dòng Xe </div>
                                        <div className={clsx(cssModalMenuMobi.form__box_iconArrowRight)}><ArrowRight /></div>
                                    </li>
                                    <li className={clsx(cssModalMenuMobi.form__box_items, cssModalMenuMobi.form__box__buyCar)}>
                                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Mua Xe Trực Tuyến  </div>
                                        <div className={clsx(cssModalMenuMobi.form__box_iconArrowRight)}><ArrowRight /></div>
                                    </li>
                                    <li className={clsx(cssModalMenuMobi.form__box_items, cssModalMenuMobi.form__box__guideBuyCar)}>
                                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Tư Vấn Mua Xe </div>
                                        <div className={clsx(cssModalMenuMobi.form__box_iconArrowRight)}><ArrowRight /></div>
                                    </li>
                                    <li className={clsx(cssModalMenuMobi.form__box_items, cssModalMenuMobi.form__box__serveci)} >
                                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Dịch Vụ </div>
                                        <div className={clsx(cssModalMenuMobi.form__box_iconArrowRight)}><ArrowRight /></div>
                                    </li>
                                    <li className={clsx(cssModalMenuMobi.form__box_items, cssModalMenuMobi.form__box__globalMer)} >
                                        <div className={clsx(cssModalMenuMobi.form__box_title)}>Thế GIới Mercedes-Benz</div>
                                        <div className={clsx(cssModalMenuMobi.form__box_iconArrowRight)}><ArrowRight /></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={clsx(cssModalMenuMobi.form__container__body, cssModalMenuMobi.form__container__body__therCar)}>
                            <ModalNavMenuTheCar />
                        </div>
                        <div className={clsx(cssModalMenuMobi.form__container__body, cssModalMenuMobi.form__container__body__buyCar)}>
                            <ModalNavMenuBuyCar />
                        </div>
                        <div className={clsx(cssModalMenuMobi.form__container__body, cssModalMenuMobi.form__container__body__guideBuyCar)}>
                            <ModalNavMenuGuideBuyCar />
                        </div>
                        <div className={clsx(cssModalMenuMobi.form__container__body, cssModalMenuMobi.form__container__body__serveci)}>
                            <ModalNavMenuServeci />
                        </div>
                        <div className={clsx(cssModalMenuMobi.form__container__body, cssModalMenuMobi.form__container__body__globalMer)}>
                            <ModalNavMenuGlobalMer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}