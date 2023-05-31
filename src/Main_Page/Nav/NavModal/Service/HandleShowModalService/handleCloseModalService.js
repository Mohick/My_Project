import cssNavModalService from '../NavModalService.Module.scss'
import cssNav from '../../../Nav.Module.scss'
import { handleHoverNav } from '../../../handleHoverNav/handleHoverNav'
import { closeSubModal } from '../SubNavModal/handleSubModal/handleSubModal'

export function handleCloseModalService(e) {
    let formeService = document.querySelector(`.${cssNavModalService.form}`)
    let showModaleService = document.querySelector(`.${cssNavModalService.js__modal_service}`)
    let boxContenteService = document.querySelector(`.${cssNavModalService.form__box_content}`)
    let itemsService = document.querySelector(`.${cssNav.form__container_items_service}`)
    let itemsGlobalCar = document.querySelector(`.${cssNav.form__container_items_globalCar}`)

    let localUserService = itemsService.querySelector(`.${cssNav.localUser}`)
    if (showModaleService !== null || undefined || NaN) {
        setTimeout(() => {

            boxContenteService.style.animation = `${cssNavModalService.close} 0.2s linear`
            localUserService.classList.remove(cssNav.localtionUserService)
            localUserService.classList.add(cssNav.closeLocaltionUser)
            setTimeout(() => {
                localUserService.classList.remove(cssNav.closeLocaltionUser)
                formeService.classList.remove(cssNavModalService.js__modal_service)
                itemsService.querySelector('h3').style.color = '#bbb'
                document.body.style.overflowY = 'scroll'
                document.body.style.willChange = 'overflow'
                document.body.style.transition = 'all 0.2s'
                closeSubModal()
                handleHoverNav()
                
            }, 165);
        }, 0);
    }
}