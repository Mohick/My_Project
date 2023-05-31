import { Link } from "react-router-dom"
import { handleOnblur, handleOnfocus, handleOnchange } from "./HandleHeader/HandleInput"
import Close from "../../Close/Close"
import Logo from '../../Logo/Logo'
import BandName from "../../BandName/BandName"
import clsx from "clsx"
import { handleOnClick } from "./HandleClose/HandleClose"
import Find from "../../Find/Find"
import cssHeader from './Header.module.scss'
import IconMenu from "../../IconMenu/IconMenu"
import IconCar from "../../IconCar/IconCar"
import { showBarFindSearch } from "./showBarFindSearch"
import ModalNavMenuMobi from "../../ModalNavMenuMobi/ModalNavMenuMobi"
import { showNavModal } from "./NavModal/showNavModal"
import { handleOnClickCar } from "./NavModal/handleOnClickCar"
function Header() {


    return (<header className={clsx(cssHeader.form)}>
        <div id="grid__System" className={clsx(cssHeader.form__container)}>
            <div className={clsx(cssHeader.form__container_logo)}>
                <div className={clsx(cssHeader.logo)}>
                    <Link to={"/"} >
                        <Logo />
                    </Link>

                </div>

                <div className={clsx(cssHeader.bandName)}>
                    <Link to={"/"}>
                        <BandName />
                    </Link>
                </div>
            </div>
            <div className={clsx(cssHeader.form__container_publish)}>
                <div className={clsx(cssHeader.menu)} onClick={showNavModal}>
                    <IconMenu />
                </div>
                <ModalNavMenuMobi />
                <div className={clsx(cssHeader.car)} onClick={handleOnClickCar}>
                    <IconCar />
                </div>
                <div className={clsx(cssHeader.publish)}>
                    <p>© 2022. Mercedes-Benz AG. Bảo lưu mọi quyền (Thông tin xuất bản)</p>
                </div>
                <div className={clsx(cssHeader.form__container_language)}>
                    <div className={clsx(cssHeader.language)}>
                        <p>EN</p>
                    </div>
                    <div className={clsx(cssHeader.language)}>
                        <p>vi</p>
                    </div>
                </div>
            </div>
            <div className={clsx(cssHeader.form__container_search)}>
                <div className={clsx(cssHeader.form__box_search, 'show__box--search')}>
                    <div className={clsx(cssHeader.box_search, 'box--search')}>
                        <input onBlur={handleOnblur} onFocus={handleOnfocus} onChange={handleOnchange} className="js__search" type="search" placeholder="Từ khóa tìm kiếm / OnlineCode từ công cụ chọn cấu hình xe" />
                        <div onClick={handleOnClick} className={clsx(cssHeader.box_close, 'js-close')}>
                            <Close />
                        </div>
                        <div className={clsx(cssHeader.box_find)}>
                            <Find />
                        </div>
                    </div>
                </div>
                <div className={clsx(cssHeader.openInput)} onClick={showBarFindSearch}>
                    <Find />
                </div>
            </div>
        </div>
    </header>)
}

export default Header