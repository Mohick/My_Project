import cssNav from '../Nav.module.scss'

export function handleHoverNav() {
    let itemsTheCar = document.querySelector(`.${cssNav.form__container_items_theCar}`)
    let itemsBuyCar = document.querySelector(`.${cssNav.form__container_items_buyCar}`)
    let itemsGuideBuyCar = document.querySelector(`.${cssNav.form__container_items_guideBuyCar}`)
    let itemsService = document.querySelector(`.${cssNav.form__container_items_service}`)
    let itemsGlobalCar = document.querySelector(`.${cssNav.form__container_items_globalCar}`)

    let localUserTheCar = itemsTheCar.querySelector(`.${cssNav.localUser}`)
    let localUserBuyCar = itemsBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserGuideBuyCar = itemsGuideBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserService = itemsService.querySelector(`.${cssNav.localUser}`)
    let localUserGolbalCar = itemsGlobalCar.querySelector(`.${cssNav.localUser}`)

    localUserTheCar.onmouseover = () => {
        itemsTheCar.querySelector('svg').style.fill = '#fff'
        itemsTheCar.querySelector('h3').style.color = '#fff'
    }
    localUserBuyCar.onmouseover = () => {
        itemsBuyCar.querySelector('h3').style.color = '#fff'
    }
    localUserGuideBuyCar.onmouseover = () => {
        itemsGuideBuyCar.querySelector('h3').style.color = '#fff'
    }
    localUserService.onmouseover = () => {
        itemsService.querySelector('h3').style.color = '#fff'
    }
    localUserGolbalCar.onmouseover = () => {
        itemsGlobalCar.querySelector('h3').style.color = '#fff'
    }

    localUserTheCar.onmouseout = () => {
        itemsTheCar.querySelector('svg').style.fill = '#bbb'
        itemsTheCar.querySelector('h3').style.color = '#bbb'
    }
    localUserBuyCar.onmouseout = () => {
        itemsBuyCar.querySelector('h3').style.color = '#bbb'
    }
    localUserGuideBuyCar.onmouseout = () => {
        itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
    }
    localUserService.onmouseout = () => {
        itemsService.querySelector('h3').style.color = '#bbb'
    }
    localUserGolbalCar.onmouseout = () => {
        itemsGlobalCar.querySelector('h3').style.color = '#bbb'
    }

}