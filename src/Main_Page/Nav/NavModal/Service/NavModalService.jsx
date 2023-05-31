import clsx from 'clsx'
import cssNavModalService from './NavModalService.Module.scss'
import ArrowRight from '../../../../ArrowRight/ArrowRight'
import Close from '../../../../Close/Close'
import { Link } from 'react-router-dom'
import { handleCloseModalService } from './HandleShowModalService/handleCloseModalService'
import ModalAccessory from './SubNavModal/modalAccessory'
import ModalFixAndGuarantee from './SubNavModal/modalFixAndGuarantee'
import ModalStyleLife from './SubNavModal/modalStyleLife'

import { handleShowModalAccessory, handleShowModalFixAndGuarantee, handleShowModalStyleLife } from './SubNavModal/handleSubModal/handleSubModal'
export default function NavModalService() {

    return (
        <div className={clsx(cssNavModalService.form)} onClick={(e) => { handleCloseModalService(e) }}>
            <div className={clsx(cssNavModalService.form__container)} id='grid__PC-height'>
                <div className={clsx(cssNavModalService.form__box_content)}>
                    <div className={clsx(cssNavModalService.form__box_title)}>
                        <h3>Dịch vụ </h3>
                    </div>
                    <div className={clsx(cssNavModalService.form__box_close)} >
                        <Close />
                    </div>
                    <div className={clsx(cssNavModalService.form__box_list)}>
                        <ul>
                            <li>
                                <Link>Đặt hẹn dịch vụ trực tuyến</Link>
                            </li>
                            <li >
                                <Link>Dịch vụ & bảo dưỡng</Link>
                            </li>
                            <li className='container--ModalFixAndGuarantee' onMouseDown={e => handleShowModalFixAndGuarantee(e)}>
                                <a hrefLang='#' >Bảo dưỡng, Sửa chữa và Bảo hành</a>
                                <ArrowRight />
                            </li>
                            <li>
                                <Link>Bảo hiểm</Link>
                            </li>
                            <li className='container--ModalAccessory' onMouseDown={e => handleShowModalAccessory(e)}>
                                <a hrefLang='#' >Phụ tùng & dầu chính hãng</a>
                                <ArrowRight />
                            </li>
                            <li className='container--ModalStyleLife' onMouseDown={e => handleShowModalStyleLife(e)}>
                                <a hrefLang='#' >Phong cách sống Mercedes</a>
                                <ArrowRight />
                            </li>
                            <li>
                                <Link>Bản tin kỹ thuật</Link>
                            </li>
                            <li>
                                <Link>Thông cáo triệu hồi</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={clsx(cssNavModalService.subNav, cssNavModalService.ModalFixAndGuarantee)}>
                        <ModalFixAndGuarantee />
                    </div>
                    <div className={clsx(cssNavModalService.subNav, cssNavModalService.ModalAccessory)}>
                        <ModalAccessory />
                    </div>
                    <div className={clsx(cssNavModalService.subNav, cssNavModalService.ModalStyleLife)}>
                        <ModalStyleLife />
                    </div>
                </div>
            </div>
        </div>
    )
}