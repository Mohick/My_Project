import AMG from '../../Trademark/AMG'
import MayBach from '../../Trademark/MayBach'
import Mercedes_EQ from '../../Trademark/Mercedes-eq'
import cssCar from './Car.module.scss'
import clsx from 'clsx'
import FilterCarSenDan from './ItemsCar/sendans/filterCarSedans'
import NavBarCar from './NavBarCar/NavBarCar'
import Sendans from './ItemsCar/sendans/Sedans'
import FilterCarTopogaphic from './ItemsCar/topogarphic/filterCarTopogaphic'
import Topogaphic from './ItemsCar/topogarphic/topogaphic'
import Coupe from './ItemsCar/coupe/Coupe'
import FilterCoupe from './ItemsCar/coupe/filterCarcoupe'
import ChoseTradeCarShowMerSedans from './ChoseTrademarkCar/ChoseTradeCarShowMerSedans'
import { useState } from 'react'
import { findCarMer } from './ChoseTrademarkCar/CheckCarMer/CheckCarMer'
import { findCarMB } from './ChoseTrademarkCar/CheckCarMer/CheckCarMB'
import ChoseTradeCarShowMerSUV from './ChoseTrademarkCar/ChoseTradeCarShowMerSUV'
import ChoseTradeCarShowMerCoupe from './ChoseTrademarkCar/ChoseTradeCarShowMerCoupe'
import { findCarAMG } from './ChoseTrademarkCar/CheckCarMer/CheckCarAMG'
import ChoseTradeCarShowAMGSendans from './ChoseTrademarkCar/ChoseTradeCarShowAMGSendans'
import { findCarAll } from './ChoseTrademarkCar/CheckCarMer/CheckCarAll'
import ChoseTradeCarShowAMGSUV from './ChoseTrademarkCar/ChoseTradeCarShowAMGSUV'
import ChoseTradeCarShowAMGCoupe from './ChoseTrademarkCar/ChoseTradeCarShowAMGCoupe'
import ChoseTradeCarShowMBSedans from './ChoseTrademarkCar/ChoseTradeCarShowMBSedans'
import ChoseTradeCarShowMBSUV from './ChoseTrademarkCar/ChoseTradeCarShowMBSUV'
import ChoseTradeCarShowMBCoupe from './ChoseTrademarkCar/ChoseTradeCarShowMBCoupe'
import IconArrowBottom from '../../IconArrowBottom/IconArrowBottom'
import SendansMobi from './ItemsCar/sendans/SedansMobi'
import CoupeMobi from './ItemsCar/coupe/CoupeMobi'
import TopogaphicMobi from './ItemsCar/topogarphic/TopogaphicMobi'
import { handleShowBodyCarSedans, handleShowBodyCarSUV, handleShowBodyCarCoupe, handleShowBodyCarAll } from './showBodyCar/ShowBodyCar'
import { showModalCar } from './showBodyCar/showModalCar'
import ModalTradeMarkMer from './modalTradeMark'
import ChoseTradeCarShowMerSedansMobi from './ChoseTradeMarkMobi/ChoseTradeCarShowMerSedansMobi'
import ChoseTradeCarShowMBSedansMobi from './ChoseTradeMarkMobi/ChoseTradeCarShowMBSedansMobi'
import ChoseTradeCarShowAMGSendansMobi from './ChoseTradeMarkMobi/ChoseTradeCarShowAMGSendansMobi'
import ChoseTradeCarShowAMGSUVMobi from './ChoseTradeMarkMobi/ChoseTradeCarShowAMGSUVMobi'
import ChoseTradeCarShowMBSUVMobi from './ChoseTradeMarkMobi/ChoseTradeCarShowMBSUVMobi'
import ChoseTradeCarShowMerSUVMobi from './ChoseTradeMarkMobi/ChoseTradeCarShowMerSUVMobi'
import ChoseTradeCarShowAMGCoupeMobi from './ChoseTradeMarkMobi/ChoseTradeCarShowAMGCoupeMobi'
import ChoseTradeCarShowMBCoupeMobi from './ChoseTradeMarkMobi/ChoseTradeCarShowMBCoupeMobi'
import ChoseTradeCarShowMerCoupeMobi from './ChoseTradeMarkMobi/ChoseTradeCarShowMerCoupeMobi'
export default function Car() {
    let [filterCar, setFilterCar] = useState(false)
    let [NameTradeMarkSendans, setNameTradeMarkSendans] = useState(<Sendans />)
    let [NameTradeMarkSUV, setNameTradeMarkSUV] = useState(<Topogaphic />)
    let [NameTradeMarkCoupe, setNameTradeMarkCoupe] = useState(<Coupe />)



    function filterCarEletric(e) {
        let input = e.target
        let checked = input.checked
        return setFilterCar(checked)
    }
    function renderALL() {
        setNameTradeMarkSendans(<Sendans />)
        setNameTradeMarkSUV(<Topogaphic />)
        setNameTradeMarkCoupe(<Coupe />)
    }
    function renderMer() {
        setNameTradeMarkSendans(<ChoseTradeCarShowMerSedans />)
        setNameTradeMarkSUV(<ChoseTradeCarShowMerSUV />)
        setNameTradeMarkCoupe(<ChoseTradeCarShowMerCoupe />)
    }
    function renderAMG() {
        setNameTradeMarkSendans(<ChoseTradeCarShowAMGSendans />)
        setNameTradeMarkSUV(<ChoseTradeCarShowAMGSUV />)
        setNameTradeMarkCoupe(<ChoseTradeCarShowAMGCoupe />)
    }
    function renderMB() {
        setNameTradeMarkSendans(<ChoseTradeCarShowMBSedans />)
        setNameTradeMarkSUV(<ChoseTradeCarShowMBSUV />)
        setNameTradeMarkCoupe(<ChoseTradeCarShowMBCoupe />)
    }

    return (
        <div className={clsx(cssCar.form)}>
            <div className={clsx(cssCar.form__container_content, 'js__form-nav-title')} id='grid__System'>
                <div className={clsx(cssCar.form__container_title, 'js__form-title')} >
                    <div className={clsx(cssCar.form__box_title)}><h2 className={clsx(cssCar.title)}>Các dòng xe Mercedes-Benz</h2></div>
                </div>
                <div className={clsx(cssCar.form__container_trademark, 'js__form-nav')}>
                    <ul className={clsx(cssCar.form__box_trademark)}>
                        <li className={clsx(cssCar.box_trademark, 'js-showAll')} onClick={() => { findCarAll(); renderALL(); }}>
                            <div className={clsx(cssCar.trademark)}>
                                <h2>Tất cả các dòng xe</h2>
                            </div></li>
                        <li className={clsx(cssCar.box_trademark, 'js-showMer')} onClick={() => { findCarMer(); renderMer(); }}>
                            <div className={clsx(cssCar.trademark)}>
                                <Mercedes_EQ />
                            </div></li>
                        <li className={clsx(cssCar.box_trademark, 'js-showAMG')} onClick={() => { findCarAMG(); renderAMG(); setFilterCar(false) }}>
                            <div className={clsx(cssCar.trademark)}>
                                <AMG />
                            </div></li>
                        <li className={clsx(cssCar.box_trademark, 'js-showMB')} onClick={() => { findCarMB(); renderMB(); setFilterCar(false) }}>
                            <div className={clsx(cssCar.trademark)}>
                                <MayBach />
                            </div></li>
                    </ul>
                </div>
                <div className={clsx(cssCar.form__container_Name_TradeMark_dropdown)}>
                    <div className={clsx(cssCar.form__box_title_TradeMark)} onClick={showModalCar}>
                        <div className={clsx(cssCar.box_title_TradeMark)}>Tất Cả Các Dòng Xe</div>
                        <div className={clsx(cssCar.box_icon__dropdown)}><IconArrowBottom /></div>
                    </div>
                    <div className={clsx(cssCar.form__box_name_body_car)}>
                        <ul className={clsx(cssCar.form__list_name_body_car)}>
                            <li className={clsx(cssCar.list_name_body_car, cssCar.localBodyCar, cssCar.list_name_body_car_all)} onClick={handleShowBodyCarAll}>
                                Tất Cả Các Loại Xe
                            </li>
                            <li className={clsx(cssCar.list_name_body_car, cssCar.list_name_body_car_sedans)} onClick={handleShowBodyCarSedans}>
                                Sedans
                            </li>
                            <li className={clsx(cssCar.list_name_body_car, cssCar.list_name_body_car_suv)} onClick={handleShowBodyCarSUV}>
                                Xe địa hình / SUV
                            </li>
                            <li className={clsx(cssCar.list_name_body_car, cssCar.list_name_body_car_coupe)} onClick={handleShowBodyCarCoupe}>
                                Coupé
                            </li>
                        </ul>
                        <div className={clsx(cssCar.modal__tradeMark_car)}>
                            <ModalTradeMarkMer />
                        </div>
                    </div>
                </div>
                <div className={clsx(cssCar.form__container_NavBar)}>
                    <div className={clsx(cssCar.form__box_NavBar)}>
                        <NavBarCar filterCarEletric={filterCarEletric} />
                    </div>
                    <div className={clsx(cssCar.form__box_items_car)}>
                        <div className={clsx(cssCar.items_car, "js__display-Sendans")}>
                            {filterCar ? <FilterCarSenDan /> : NameTradeMarkSendans}
                        </div>
                        <div className={clsx(cssCar.items_car, "js__display-SUV")}>
                            {filterCar ? <FilterCarTopogaphic /> : NameTradeMarkSUV}
                        </div>
                        <div className={clsx(cssCar.items_car, "js__display-Coupe")}>
                            {filterCar ? <FilterCoupe /> : NameTradeMarkCoupe}
                        </div>
                    </div>
                </div>
                <div className={clsx(cssCar.form__container_menu_car_mobi)}>
                    <div className={clsx(cssCar.form__box_menu_car_sedans)}>
                        <div className={clsx(cssCar.sedansMobi)}><SendansMobi /></div>
                        <div className={clsx(cssCar.MerSedansMobi)}><ChoseTradeCarShowMerSedansMobi /></div>
                        <div className={clsx(cssCar.AMGSendansMobi)}><ChoseTradeCarShowAMGSendansMobi /></div>
                        <div className={clsx(cssCar.MBSedansMobi)}><ChoseTradeCarShowMBSedansMobi /></div>
                    </div>
                    <div className={clsx(cssCar.form__box_menu_car_suv)}>
                        <div className={clsx(cssCar.SUVMobi)}><TopogaphicMobi /></div>
                        <div className={clsx(cssCar.MerSUVMobi)}><ChoseTradeCarShowMerSUVMobi /></div>
                        <div className={clsx(cssCar.AMGSUVMobi)}><ChoseTradeCarShowAMGSUVMobi /></div>
                        <div className={clsx(cssCar.MBSUVMobi)}><ChoseTradeCarShowMBSUVMobi /></div>
                    </div>
                    <div className={clsx(cssCar.form__box_menu_car_coupe)}>
                        <div className={clsx(cssCar.CoupeMobi)}><CoupeMobi /></div>
                        <div className={clsx(cssCar.MerCoupeMobi)}><ChoseTradeCarShowMerCoupeMobi /></div>
                        <div className={clsx(cssCar.AMGCoupeMobi)}><ChoseTradeCarShowAMGCoupeMobi /></div>
                        <div className={clsx(cssCar.MBCoupeMobi)}><ChoseTradeCarShowMBCoupeMobi /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}