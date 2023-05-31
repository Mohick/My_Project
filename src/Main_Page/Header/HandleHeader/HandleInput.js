import cssNavModalTheCar from '../../Nav/NavModal/TheCar/NavModalTheCar.module.scss'
import cssNavModalBuyCar from '../../Nav/NavModal/BuyCar/NavModalBuyCar.Module.scss'
import cssNavModalGuideBuyCar from '../../Nav/NavModal/GuideBuyCar/NavModalGuideBuyCar.module.scss'
import cssNavModalService from '../../Nav/NavModal/service/NavModalService.Module.scss'
import cssNavModalGlobalMer from '../../Nav/NavModal/GlobalMer/NavModalGlobalMer.Module.scss'
import cssNav from '../../Nav/Nav.Module.scss'
import cssHeader from '../Header.module.scss'
import { closeSubModal } from '../../Nav/NavModal/Service/SubNavModal/handleSubModal/handleSubModal'
import cssModalNavMenuMobi from '../../../ModalNavMenuMobi/ModalNavMenuMobi.module.scss'
export function handleOnfocus() {
    let box_search = document.querySelector('.box--search')
    let close = document.querySelector('.js-close')
    let input = document.querySelector('.js__search')
    close.style.right = '8%'
    box_search.style.width = "250%"
    input.style.paddingRight = '12rem'

    let formTheCar = document.querySelector(`.${cssNavModalTheCar.form}`)
    let boxContentTheCar = document.querySelector(`.${cssNavModalTheCar.form__box_content}`)
    let showModalTheCar = document.querySelector(`.${cssNavModalTheCar.js__modal_theCar}`)

    let formBuyCar = document.querySelector(`.${cssNavModalBuyCar.form}`)
    let showModalBuyCar = document.querySelector(`.${cssNavModalBuyCar.js__modal_buyCar}`)
    let boxContentBuyCar = document.querySelector(`.${cssNavModalBuyCar.form__box_content}`)

    let formGuideBuyCar = document.querySelector(`.${cssNavModalGuideBuyCar.form}`)
    let showModalGuideBuyCar = document.querySelector(`.${cssNavModalGuideBuyCar.js__modal_guideBuyCar}`)
    let boxContentGuideBuyCar = document.querySelector(`.${cssNavModalGuideBuyCar.form__box_content}`)


    let formService = document.querySelector(`.${cssNavModalService.form}`)
    let showModalService = document.querySelector(`.${cssNavModalService.js__modal_service}`)
    let boxContentService = document.querySelector(`.${cssNavModalService.form__box_content}`)


    let formGlobalMer = document.querySelector(`.${cssNavModalGlobalMer.form}`)
    let showModalGlobalMer = document.querySelector(`.${cssNavModalGlobalMer.js__modal_globalMer}`)
    let boxContentGlobalMer = document.querySelector(`.${cssNavModalGlobalMer.form__box_content}`)
    let iconClose = document.querySelector(`.${cssNavModalBuyCar.form__box_close}`)


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
    if (showModalBuyCar || showModalGuideBuyCar || showModalService || showModalTheCar || showModalGlobalMer !== null || undefined || NaN) {
        setTimeout(() => {
            showModalBuyCar !== null || undefined || NaN ? boxContentBuyCar.style.animation = `${cssNavModalBuyCar.close} 0.2s linear` : undefined
            showModalGuideBuyCar !== null || undefined || NaN ? boxContentGuideBuyCar.style.animation = `${cssNavModalGuideBuyCar.close} 0.2s linear` : undefined
            showModalService !== null || undefined || NaN ? boxContentService.style.animation = `${cssNavModalService.close} 0.2s linear` : undefined
            showModalTheCar !== null || undefined || NaN ? boxContentTheCar.style.animation = `${cssNavModalTheCar.close} 0.2s linear` : undefined
            showModalGlobalMer !== null || undefined || NaN ? boxContentGlobalMer.style.animation = `${cssNavModalGlobalMer.close} 0.2s linear` : undefined
            itemsBuyCar.querySelector(`.${cssNav.localtionUserBuyCar}`) !== null || undefined || NaN ?
                localUserBuyCar.classList.add(cssNav.closeLocaltionUser) :
                undefined
            itemsTheCar.querySelector(`.${cssNav.localtionUserTheCar}`) !== null || undefined || NaN ?
                localUserTheCar.classList.add(cssNav.closeLocaltionUser) :
                undefined
            itemsGuideBuyCar.querySelector(`.${cssNav.localtionUserGuideBuyCar}`) !== null || undefined || NaN ?
                localUserGuideBuyCar.classList.add(cssNav.closeLocaltionUser) :
                undefined
            itemsService.querySelector(`.${cssNav.localtionUserService}`) !== null || undefined || NaN ?
                localUserService.classList.add(cssNav.closeLocaltionUser) :
                undefined
            itemsGlobalCar.querySelector(`.${cssNav.localtionUserGolbalMer}`) !== null || undefined || NaN ?
                localUserGolbalCar.classList.add(cssNav.closeLocaltionUser) :
                undefined
            itemsBuyCar.querySelector(`.${cssNav.localtionUserBuyCar}`) !== null || undefined || NaN ?
                localUserBuyCar.classList.remove(cssNav.localtionUserBuyCar) :
                undefined
            itemsGuideBuyCar.querySelector(`.${cssNav.localtionUserGuideBuyCar}`) !== null || undefined || NaN ?
                localUserGuideBuyCar.classList.remove(cssNav.localtionUserGuideBuyCar) :
                undefined
            itemsService.querySelector(`.${cssNav.localtionUserService}`) !== null || undefined || NaN ?
                localUserService.classList.remove(cssNav.localtionUserService) :
                undefined
            itemsGlobalCar.querySelector(`.${cssNav.localtionUserGolbalMer}`) !== null || undefined || NaN ?
                localUserGolbalCar.classList.remove(cssNav.localtionUserGolbalMer) :
                undefined
            itemsTheCar.querySelector(`.${cssNav.localtionUserTheCar}`) !== null || undefined || NaN ?
                localUserTheCar.classList.remove(cssNav.localtionUserTheCar) :
                undefined
            setTimeout(() => {
                showModalBuyCar !== null || undefined || NaN ? formBuyCar.classList.remove(cssNavModalBuyCar.js__modal_buyCar) : undefined
                showModalGuideBuyCar !== null || undefined || NaN ? formGuideBuyCar.classList.remove(cssNavModalGuideBuyCar.js__modal_guideBuyCar) : undefined
                showModalService !== null || undefined || NaN ? formService.classList.remove(cssNavModalService.js__modal_service) : undefined
                showModalTheCar !== null || undefined || NaN ? formTheCar.classList.remove(cssNavModalTheCar.js__modal_theCar) : undefined
                showModalGlobalMer !== null || undefined || NaN ? formGlobalMer.classList.remove(cssNavModalGlobalMer.js__modal_globalMer) : undefined
                itemsBuyCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                    localUserBuyCar.classList.remove(cssNav.closeLocaltionUser) :
                    undefined
                itemsGuideBuyCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                    localUserGuideBuyCar.classList.remove(cssNav.closeLocaltionUser) :
                    undefined
                itemsService.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                    localUserService.classList.remove(cssNav.closeLocaltionUser) :
                    undefined
                itemsGlobalCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                    localUserGolbalCar.classList.remove(cssNav.closeLocaltionUser) :
                    undefined
                itemsTheCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                    localUserTheCar.classList.remove(cssNav.closeLocaltionUser) :
                    undefined
                itemsTheCar.querySelector('svg').style.fill = '#bbb'
                itemsTheCar.querySelector('h3').style.color = '#bbb'
                itemsBuyCar.querySelector('h3').style.color = '#bbb'
                itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
                itemsService.querySelector('h3').style.color = '#bbb'
                itemsGlobalCar.querySelector('h3').style.color = '#bbb'
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

                closeSubModal()
            }, 165);
        }, 0);
    }
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

export function handleOnblur() {
    let box_search = document.querySelector('.box--search')
    let box_find = document.querySelector(`.${cssHeader.box_find}`)
    let close = document.querySelector('.js-close')
    box_search.style.width = "100%"
    close.style.right = `${box_find.clientWidth}px`
    let formHeader = document.querySelector(`.${cssHeader.form}`)

    if (formHeader.clientWidth <= 1199) {
        let inputSearch = document.querySelector(`.${cssHeader.form__box_search}`)
        inputSearch.style.display = 'none'
    }
}
export function handleOnchange() {
    let box_find = document.querySelector(`.${cssHeader.box_find}`)
    let input = document.querySelector('.js__search').value
    let close = document.querySelector('.js-close')
    if (input.length > 2) {
        close.style.display = 'block'
        close.style.right = `${box_find.clientWidth}px`
    } else {
        close.style.display = 'none'
    }
}