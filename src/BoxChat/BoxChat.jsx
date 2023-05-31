
import clsx from "clsx"
import IconChat from "../IconChat/IconChat"
import cssBoxChat from './boxChat.module.scss'
import { Link } from "react-router-dom"
export default function BoxChat() {

    return (
        <div className={clsx(cssBoxChat.form)}>
            <div className={clsx(cssBoxChat.form__container_content)}>
                <Link className={clsx(cssBoxChat.form__box_content)}>
                    <div className={clsx(cssBoxChat.form__box_support)}>
                        <IconChat />
                    </div>
                </Link>
            </div>
        </div>
    )
}