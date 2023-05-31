
import clsx from 'clsx'
import cssNavBarCar from './NavBarCar.module.scss'
import SedansIcon from '../../../SedansIcon/SedansIcon'
import Topographic from '../../../topographic/topographic'
import Coupe from '../../../Iconcoupe/coupe'
import { showSendans } from './displayBodyCar/BodyCarSedans'
import { showSUV } from './displayBodyCar/BodyCarSUV'
import { showCoupe } from './displayBodyCar/BodyCarCoupe'
import { showAll } from './displayBodyCar/BodyCarALl'
export default function NavBarCar({ filterCarEletric }) {

    return (
        <div className={clsx(cssNavBarCar.form, 'form__aside')}>
            <div className={clsx(cssNavBarCar.form__container_title_check)}>
                <div className={clsx(cssNavBarCar.form__box_title)}>
                    <h3 className={clsx(cssNavBarCar.title)}>Loại nhiên liệu</h3>
                </div>
                <div className={clsx(cssNavBarCar.form__box_check, 'js__checkbox')}>
                    <input type="checkbox" name="" id="" onChange={(e) => { filterCarEletric(e) }} />
                    <span >xe Điện</span>
                    <p title={`Hiện Tại Thương Hiệu Vẫn Chưa Có Sản Phẩm Này`} className={clsx(cssNavBarCar.rmCheckBox, 'rmCheckBox')}></p>
                </div>
            </div>
            <div className={clsx(cssNavBarCar.form__container_title_body_Car)}>
                <div className={clsx(cssNavBarCar.form__box_title)}>
                    <h3 className={clsx(cssNavBarCar.title)}>Loại thân xe</h3>
                </div>
                <div className={clsx(cssNavBarCar.form__box_body_Car)}>
                    <ul className={clsx(cssNavBarCar.form_body_Car)}>
                        <li className={clsx(cssNavBarCar.body_Car, 'js__body-car-sedans')} onClick={showSendans}>
                            <div className={clsx(cssNavBarCar.icon_car)}>
                                <SedansIcon />
                            </div>
                            <div className={clsx(cssNavBarCar.name_body_car)}><h3>Sedans</h3></div>
                        </li>
                        <li className={clsx(cssNavBarCar.body_Car, 'js__body-car-suv')} onClick={showSUV}>
                            <div className={clsx(cssNavBarCar.icon_car)}>
                                <Topographic />
                            </div>
                            <div className={clsx(cssNavBarCar.name_body_car)}><h3>Xe Địa HÌnh / SUV</h3></div>
                        </li>
                        <li className={clsx(cssNavBarCar.body_Car, 'js__body-car-coupe')} onClick={showCoupe}>
                            <div className={clsx(cssNavBarCar.icon_car)}>
                                <Coupe />
                            </div>
                            <div className={clsx(cssNavBarCar.name_body_car)}><h3>Xe Coupé</h3></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={clsx(cssNavBarCar.form__container_title_view_all, 'js__body-car-all')} onClick={showAll}>
                <h3 className={clsx(cssNavBarCar.view_all)}>Xem Tất cả</h3>
            </div>
        </div>
    )
}