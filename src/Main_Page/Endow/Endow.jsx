import { Link } from "react-router-dom"
import clsx from 'clsx'
import cssEndow from './Endow.module.scss'
export default function Endow() {
    return (
        <>
            <div className={clsx(cssEndow.form)}>
                <div className={clsx(cssEndow.form__container)} id='grid__System'>
                    <div className={clsx(cssEndow.form__container_content)}>

                        <div className={clsx(cssEndow.form__container_title)}>
                            <h1 className={clsx(cssEndow.title)}>GLC của bạn đã sẵn sàng</h1>
                        </div>

                        <div className={clsx(cssEndow.form__container_description)}>
                            <p className={clsx(cssEndow.description)}>Chỉ trong tháng 5 & 6/2023, nhận ưu đãi 100% lệ phí trước bạ từ Nhà Phân Phối khi mua GLC [1].</p>
                        </div>

                        <div className={clsx(cssEndow.form__container_discover_discount)}>
                            <div className={clsx(cssEndow.form__container_discount)}>
                                <Link to={"/Chọn xe có sẵn cùng ưu đãi"}> <button className={clsx(cssEndow.discount)}> Chọn xe có sẵn cùng ưu đãi </button></Link>
                            </div>
                            <div className={clsx(cssEndow.form__container_discover)}>
                                <Link to={"/Khám phá ưu đãi"}> <button className={clsx(cssEndow.discover)}> Khám phá ưu đãi </button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={clsx(cssEndow.footer)}>
                    <div className={clsx(cssEndow.footer__container)} id='grid__System'>
                        <p className={clsx(cssEndow.footer__container_text)}>
                            [1] Chương trình áp dụng cho khách hàng thanh toán 100% từ ngày 1/5 đến 30/6/2023 hoặc đến
                            khi hết xe có sẵn tại Nhà Phân Phối chính hãng.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}