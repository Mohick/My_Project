import { Link } from "react-router-dom"
import cssDiscover from './Discover.module.scss'
import clsx from "clsx"
export default function Discorver() {
    return (
        <div className={clsx(cssDiscover.form)}>
            <div className={clsx(cssDiscover.form__container)}>
                <h3 className={clsx(cssDiscover.form__containe_text)}>Khám phá những <Link to="/ưu đãi tốt nhất">ưu đãi tốt nhất</Link> tại cửa hàng trực tuyến  </h3>
            </div>
        </div>
    )
}