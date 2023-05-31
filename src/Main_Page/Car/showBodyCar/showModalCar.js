import cssModal from '../modalTradeMarkMer.module.scss'
import cssCar from '../car.module.scss'

export function showModalCar() {
    let formModal = document.querySelector(`.${cssModal.form}`)
    formModal.style.display = `block`
}