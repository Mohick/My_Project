
import cssCar from '../Car.module.scss'

export function handleShowBodyCarSedans() {
    let sedans = document.querySelector(`.${cssCar.list_name_body_car_sedans}`)
    let suv = document.querySelector(`.${cssCar.list_name_body_car_suv}`)
    let coupe = document.querySelector(`.${cssCar.list_name_body_car_coupe}`)
    let allCar = document.querySelector(`.${cssCar.list_name_body_car_all}`)


    sedans.classList.add(cssCar.localBodyCar)
    suv.classList.remove(cssCar.localBodyCar)
    coupe.classList.remove(cssCar.localBodyCar)
    allCar.classList.remove(cssCar.localBodyCar)
    let theCarSedans = document.querySelector(`.${cssCar.form__box_menu_car_sedans}`)
    let theCarSUV = document.querySelector(`.${cssCar.form__box_menu_car_suv}`)
    let theCarCoupe = document.querySelector(`.${cssCar.form__box_menu_car_coupe}`)

    theCarSedans.style.display = 'block'
    theCarSUV.style.display = 'none'
    theCarCoupe.style.display = 'none'


}
export function handleShowBodyCarSUV() {
    let sedans = document.querySelector(`.${cssCar.list_name_body_car_sedans}`)
    let suv = document.querySelector(`.${cssCar.list_name_body_car_suv}`)
    let coupe = document.querySelector(`.${cssCar.list_name_body_car_coupe}`)
    let allCar = document.querySelector(`.${cssCar.list_name_body_car_all}`)

    allCar.classList.remove(cssCar.localBodyCar)

    sedans.classList.remove(cssCar.localBodyCar)
    suv.classList.add(cssCar.localBodyCar)
    coupe.classList.remove(cssCar.localBodyCar)

    let theCarSedans = document.querySelector(`.${cssCar.form__box_menu_car_sedans}`)
    let theCarSUV = document.querySelector(`.${cssCar.form__box_menu_car_suv}`)
    let theCarCoupe = document.querySelector(`.${cssCar.form__box_menu_car_coupe}`)

    theCarSedans.style.display = 'none'
    theCarSUV.style.display = 'block'
    theCarCoupe.style.display = 'none'
}
export function handleShowBodyCarCoupe() {
    let sedans = document.querySelector(`.${cssCar.list_name_body_car_sedans}`)
    let suv = document.querySelector(`.${cssCar.list_name_body_car_suv}`)
    let coupe = document.querySelector(`.${cssCar.list_name_body_car_coupe}`)
    let allCar = document.querySelector(`.${cssCar.list_name_body_car_all}`)

    allCar.classList.remove(cssCar.localBodyCar)

    sedans.classList.remove(cssCar.localBodyCar)
    suv.classList.remove(cssCar.localBodyCar)
    coupe.classList.add(cssCar.localBodyCar)

    let theCarSedans = document.querySelector(`.${cssCar.form__box_menu_car_sedans}`)
    let theCarSUV = document.querySelector(`.${cssCar.form__box_menu_car_suv}`)
    let theCarCoupe = document.querySelector(`.${cssCar.form__box_menu_car_coupe}`)

    theCarSedans.style.display = 'none'
    theCarSUV.style.display = 'none'
    theCarCoupe.style.display = 'block'
}
export function handleShowBodyCarAll() {
    let sedans = document.querySelector(`.${cssCar.list_name_body_car_sedans}`)
    let suv = document.querySelector(`.${cssCar.list_name_body_car_suv}`)
    let coupe = document.querySelector(`.${cssCar.list_name_body_car_coupe}`)
    let allCar = document.querySelector(`.${cssCar.list_name_body_car_all}`)

    let theCarSedans = document.querySelector(`.${cssCar.form__box_menu_car_sedans}`)
    let theCarSUV = document.querySelector(`.${cssCar.form__box_menu_car_suv}`)
    let theCarCoupe = document.querySelector(`.${cssCar.form__box_menu_car_coupe}`)

    sedans.classList.remove(cssCar.localBodyCar)
    suv.classList.remove(cssCar.localBodyCar)
    coupe.classList.remove(cssCar.localBodyCar)
    allCar.classList.add(cssCar.localBodyCar)
    theCarSedans.style.display = 'block'
    theCarSUV.style.display = 'block'
    theCarCoupe.style.display = 'block'

}