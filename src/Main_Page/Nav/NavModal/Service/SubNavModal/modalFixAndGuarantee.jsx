import clsx from 'clsx'
import cssModalFixAndGuarantee from './SubModal.module.scss'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../../../../ArrowLeft/ArrowLeft'
import Close from '../../../../../Close/Close'
import { closeSubModal } from './handleSubModal/handleSubModal'
import { handleCloseSubModalService } from './handleSubModal/handleSubModal'
export default function ModalFixAndGuarantee() {
    return (
        <div className={clsx(cssModalFixAndGuarantee.form)}>
            <div className={clsx(cssModalFixAndGuarantee.form__box_content)}>
                <div className={clsx(cssModalFixAndGuarantee.form__box_header)}>
                    <div className={clsx(cssModalFixAndGuarantee.form__box_offModal)} onMouseDown={handleCloseSubModalService} >
                        <ArrowLeft />
                    </div>
                    <div className={clsx(cssModalFixAndGuarantee.form__box_title)}>
                        <h2>Bảo dưỡng, Sửa chữa và Bảo hành</h2>
                    </div>
                    <div className={clsx(cssModalFixAndGuarantee.form__box_close)}  onMouseDown={closeSubModal}>
                        <Close />
                    </div>
                </div>
                <div className={clsx(cssModalFixAndGuarantee.form__box_body)}>
                    <ul>
                        <li>
                            <Link>Dịch vụ & bảo dưỡng</Link>
                        </li>
                        <li>
                            <Link>Gói bảo dưỡng 2 năm</Link>
                        </li>
                        <li>
                            <Link>Dịch vụ khác biệt</Link>
                        </li>
                        <li>
                            <Link>Dịch vụ hỗ trợ 24h</Link>
                        </li>
                        <li>
                            <Link>Bảo hành</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}