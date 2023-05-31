import cssSedansCar from '../../sedansMobi.module.scss'

export function showMenuCar(e) {
    let plus = e.target
    let tabCar = plus.parentElement.parentElement
    let MenuCar = tabCar.querySelector(`.${cssSedansCar.plus}`)
    let showMenuCar = tabCar.querySelector(`.${cssSedansCar.showMenuCar}`)
    let offMenuCar = tabCar.querySelector(`.${cssSedansCar.offMenuCar}`)
    let listMenucar = tabCar.querySelector(`.${cssSedansCar.form__box_list_find_more}`)
    if (offMenuCar !== false || null || undefined || NaN) {
        MenuCar.classList.toggle(cssSedansCar.showMenuCar)
        MenuCar.classList.toggle(cssSedansCar.offMenuCar)
        listMenucar.classList.toggle(cssSedansCar.showFindMore)
    } 
}