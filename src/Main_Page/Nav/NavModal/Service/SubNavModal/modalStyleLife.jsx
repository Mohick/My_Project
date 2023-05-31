import clsx from 'clsx'
import cssModalStyleLife from './SubModal.module.scss'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../../../../ArrowLeft/ArrowLeft'
import Close from '../../../../../Close/Close'
import { closeSubModal } from './handleSubModal/handleSubModal'
import { handleCloseSubModalService } from './handleSubModal/handleSubModal'
export default function ModalStyleLife() {
    return (
        <div className={clsx(cssModalStyleLife.form)}>
            <div className={clsx(cssModalStyleLife.form__box_content)}>
                <div className={clsx(cssModalStyleLife.form__box_header)}>
                    <div className={clsx(cssModalStyleLife.form__box_offModal)} onMouseDown={handleCloseSubModalService}>
                        <ArrowLeft />
                    </div>
                    <div className={clsx(cssModalStyleLife.form__box_title)}>
                        <h2>Phong cách sống Mercedes</h2>
                    </div>
                    <div className={clsx(cssModalStyleLife.form__box_close)} onMouseDown={closeSubModal}>
                        <Close />
                    </div>
                </div>
                <div className={clsx(cssModalStyleLife.form__box_body)}>
                    <ul>
                        <li>
                            <Link>Phụ kiện cho xe</Link>
                        </li>
                        <li>
                            <Link>Bộ sưu tập Mercedes-Benz</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}