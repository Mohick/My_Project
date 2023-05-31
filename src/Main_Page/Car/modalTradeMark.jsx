import cssModalTradeMark from './modalTradeMarkMer.module.scss'
import clsx from 'clsx'
import { findTradeMarkAll, findTradeMarkEQ, findTradeMarkAMG, findTradeMarkMayBach } from './showBodyCar/findTradeCarMobi'
export default function ModalTradeMarkMer() {
    return (
        <div className={clsx(cssModalTradeMark.form)}>
            <div className={clsx(cssModalTradeMark.form__container_modal)}>
                <ul className={clsx(cssModalTradeMark.form__box_modal)}>
                    <li onClick={e => findTradeMarkAll(e)} className={clsx(cssModalTradeMark.allCar, cssModalTradeMark.localUser)}>Tất Cả Các Dòng Xe </li>
                    <li onClick={e => findTradeMarkEQ(e)} className={clsx(cssModalTradeMark.merEQ)}>Mercedes-EQ</li>
                    <li onClick={e => findTradeMarkAMG(e)} className={clsx(cssModalTradeMark.merAMG)}>Mercedes-AMG</li>
                    <li onClick={e => findTradeMarkMayBach(e)} className={clsx(cssModalTradeMark.merMB)}>Mercedes-MayBach</li>
                </ul>
            </div>
        </div>
    )
}