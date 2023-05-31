
import cssModalNavMenuMobi from '../ModalNavMenuMobi.module.scss'
export function turnOffModal() {
    let form = document.querySelector(`.${cssModalNavMenuMobi.form}`)
    let showForm = document.querySelector(`.${cssModalNavMenuMobi.showModal}`)
    let formMpdal = document.querySelector(`.${cssModalNavMenuMobi.form__container__content}`)
    formMpdal.onclick = function (e) {
        e.stopPropagation()
    }
    setTimeout(() => {
        formMpdal.style.animation = `${cssModalNavMenuMobi.close} 0.2s linear`
        setTimeout(() => {
            form.classList.remove(cssModalNavMenuMobi.showModal)
            document.body.style.overflowY = 'scroll'
        }, 165);
    }, 0);
}   