import clsx from 'clsx'
import cssModalAccessory from './SubModal.module.scss'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../../../../ArrowLeft/ArrowLeft'
import Close from '../../../../../Close/Close'
import { handleCloseModalService } from '../HandleShowModalService/handleCloseModalService'
import { closeSubModal } from './handleSubModal/handleSubModal'
import { handleCloseSubModalService } from './handleSubModal/handleSubModal'
export default function ModalAccessory() {
    return (
        <div className={clsx(cssModalAccessory.form)}>
            <div className={clsx(cssModalAccessory.form__box_content)}>
                <div className={clsx(cssModalAccessory.form__box_header)}>
                    <div className={clsx(cssModalAccessory.form__box_offModal)} onMouseDown={handleCloseSubModalService}>
                        <ArrowLeft />
                    </div>
                    <div className={clsx(cssModalAccessory.form__box_title)}>
                        <h2>Phụ tùng & dầu chính hãng</h2>
                    </div>
                    <div className={clsx(cssModalAccessory.form__box_close)} onMouseDown={closeSubModal}>
                        <Close />
                    </div>
                </div>
                <div className={clsx(cssModalAccessory.form__box_body)}>
                    <ul>
                        <li>
                            <Link>Phụ tùng</Link>
                        </li>
                        <li>
                            <Link>Lốp xe</Link>
                        </li>
                        <li>
                            <Link>Dầu động cơ</Link>
                        </li>
                        <li>
                            <Link>Sản phẩm chăm sóc xe</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}