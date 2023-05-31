import clsx from 'clsx'
import cssNavModalBuyCar from './NavModalBuyCar.Module.scss'
import Close from '../../../../Close/Close'
import { Link } from 'react-router-dom'
import { handleCloseModalBuyCar } from './HandleShowModalBuyCar/handleCloseModalBuyCar'
export default function NavModalBuyCar() {

    return (
        <div className={clsx(cssNavModalBuyCar.form)} onClick={(e) => { handleCloseModalBuyCar(e) }}>
            <div className={clsx(cssNavModalBuyCar.form__container)} id='grid__PC-height'>
                <div className={clsx(cssNavModalBuyCar.form__box_content)}>
                    <div className={clsx(cssNavModalBuyCar.form__box_title)}>
                        <h3>Mua Trực Tuyến  </h3>
                    </div>
                    <div className={clsx(cssNavModalBuyCar.form__box_close, 'js__navModal')} >
                        <Close />
                    </div>
                    <div className={clsx(cssNavModalBuyCar.form__box_list)}>
                        <ul>
                            <li>
                                <Link> Xe Mới </Link>
                            </li>
                            <li>
                                <Link>Xe Đã Qua Sử Dụng</Link>
                            </li>
                            <li>
                                <Link>Phụ Kiện Chính Hãng </Link>
                            </li>
                            <li>
                                <Link>Bộ Sưu Tập Mercedes-Benz </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}