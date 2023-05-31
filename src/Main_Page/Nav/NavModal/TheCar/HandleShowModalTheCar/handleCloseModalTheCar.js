import cssNavModalTheCar from '../NavModalTheCar.Module.scss'
import cssNav from '../../../Nav.Module.scss'


export function handleCloseModalTheCar(e) {
    let formTheCar = document.querySelector(`.${cssNavModalTheCar.form}`)
    let showModalTheCar = document.querySelector(`.${cssNavModalTheCar.js__modal_theCar}`)

    let boxContentTheCar = document.querySelector(`.${cssNavModalTheCar.form__box_content}`)
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

    itemsTheCar.querySelector('svg').style.fill = '#bbb'
    itemsTheCar.querySelector('h3').style.color = '#bbb'

    if (showModalTheCar !== null || undefined || NaN) {
        setTimeout(() => {
            localUserTheCar.classList.add(cssNav.closeLocaltionUser)
            boxContentTheCar.style.animation = `${cssNavModalTheCar.close} 0.2s linear`
            setTimeout(() => {
                localUserTheCar.classList.remove(cssNav.closeLocaltionUser)
                localUserTheCar.classList.remove(cssNav.localtionUserTheCar)
                formTheCar.classList.remove(cssNavModalTheCar.js__modal_theCar)
                document.body.style.overflowY = 'scroll'
                document.body.style.willChange = 'overflow'
                document.body.style.transition = 'all 0.2s'
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
            }, 165);
        }, 0);
    }
}