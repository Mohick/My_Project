import clsx from 'clsx'
import cssNavModal from './NavModalTheCar.Module.scss'

import Close from '../../../../Close/Close'
import { Link } from 'react-router-dom'
import { handleCloseModalTheCar } from './HandleShowModalTheCar/handleCloseModalTheCar'
export default function NavModalTheCar() {

    return (
        <div className={clsx(cssNavModal.form)} onClick={(e) => { handleCloseModalTheCar(e) }}>
            <div className={clsx(cssNavModal.form__container)} id='grid__PC-height'>
                <div className={clsx(cssNavModal.form__box_content)}>
                    <div className={clsx(cssNavModal.form__box_title)}>
                        <h3> Các dòng xe </h3>
                    </div>
                    <div className={clsx(cssNavModal.form__box_close)} >
                        <Close />
                    </div>
                    <div className={clsx(cssNavModal.form__box_list)}>
                        <ul>
                            <li>
                                <Link> Tất Cả Các Dòng Xe</Link>
                            </li>
                            <li>
                                <Link>Sedan</Link>
                            </li>
                            <li>
                                <Link>SUV / Xe Địa Hình</Link>
                            </li>
                            <li>
                                <Link>Coupé</Link>
                            </li>
                            <li>
                                <Link>Xe Đa Dạng</Link>
                            </li>
                            <li>
                                <Link>Mercedes-EQ</Link>
                            </li>
                            <li>
                                <Link>Mercedes-AMG</Link>
                            </li>
                            <li>
                                <Link>Mercedes-Maybach</Link>
                            </li>
                            <li>
                                <Link>Các Dòng Xe Mới</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}