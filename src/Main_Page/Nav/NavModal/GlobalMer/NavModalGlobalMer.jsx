import clsx from 'clsx'
import cssNavModalGlobalMer from './NavModalGlobalMer.module.scss'
import Close from '../../../../Close/Close'
import { Link } from 'react-router-dom'
import { handleCloseModalGlobalMer } from './HandleShowModalGlobalMer/handleCloseModalGlobalMer'
export default function NavModalGlobalMer() {

    return (
        <div className={clsx(cssNavModalGlobalMer.form)} onClick={(e) => { handleCloseModalGlobalMer(e) }}>
            <div className={clsx(cssNavModalGlobalMer.form__container)} id='grid__System'>
                <div className={clsx(cssNavModalGlobalMer.form__box_content)}>
                    <div className={clsx(cssNavModalGlobalMer.form__box_title)}>
                        <h3>Thế giới Mercedes-Benz</h3>
                    </div>
                    <div className={clsx(cssNavModalGlobalMer.form__box_close)} >
                        <Close />
                    </div>
                    <div className={clsx(cssNavModalGlobalMer.form__box_list)}>
                        <ul>
                            <li>
                                <Link> Hệ thống đa phương tiện MBUX</Link>
                            </li>
                            <li>
                                <Link>Sáng tạo & công nghệ</Link>
                            </li>
                            <li>
                                <Link>Thiết kế & xe ý tưởng</Link>
                            </li>
                            <li>
                                <Link>Phát triển bền vững</Link>
                            </li>
                            <li>
                                <Link>Về Mercedes-Benz Việt Nam</Link>
                            </li>
                            <li>
                                <Link>Xe Mercedes-AMG</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}