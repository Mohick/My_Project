import cssNavModalService from '../../NavModalService.module.scss'
import cssSubNavModalService from '../SubModal.module.scss'
export function handleShowModalAccessory(e) {
    let fixAndGuarantee = document.querySelector('.container--ModalFixAndGuarantee')
    let accessory = document.querySelector('.container--ModalAccessory')
    let styleLife = document.querySelector('.container--ModalStyleLife')
    let containerFixAndGuarantee = fixAndGuarantee.querySelector('a')
    let containerAccessory = accessory.querySelector('a')
    let containerStyleLife = styleLife.querySelector('a')

    containerFixAndGuarantee.style.color = `#333`
    containerAccessory.style.color = `#333`
    containerStyleLife.style.color = `#333`

    containerFixAndGuarantee.style.fontWeight = `normal`
    containerAccessory.style.fontWeight = `bold`
    containerStyleLife.style.fontWeight = `normal`


    let showSubModalFixAndGuarantee = document.querySelector(`.${cssNavModalService.ModalFixAndGuarantee}`)
    let showSubModalModalAccessory = document.querySelector(`.${cssNavModalService.ModalAccessory}`)
    let showSubModalStyleLife = document.querySelector(`.${cssNavModalService.ModalStyleLife}`)

    showSubModalFixAndGuarantee.classList.add(cssNavModalService.showSubModal)
    showSubModalModalAccessory.classList.remove(cssNavModalService.showSubModal)
    showSubModalStyleLife.classList.remove(cssNavModalService.showSubModal)
}
export function handleShowModalFixAndGuarantee(e) {
    let fixAndGuarantee = document.querySelector('.container--ModalFixAndGuarantee')
    let accessory = document.querySelector('.container--ModalAccessory')
    let styleLife = document.querySelector('.container--ModalStyleLife')
    let containerFixAndGuarantee = fixAndGuarantee.querySelector('a')
    let containerAccessory = accessory.querySelector('a')
    let containerStyleLife = styleLife.querySelector('a')

    containerFixAndGuarantee.style.color = `#333`
    containerAccessory.style.color = `#333`
    containerStyleLife.style.color = `#333`

    containerFixAndGuarantee.style.fontWeight = `bold`
    containerAccessory.style.fontWeight = `normal`
    containerStyleLife.style.fontWeight = `normal`

    let showSubModalFixAndGuarantee = document.querySelector(`.${cssNavModalService.ModalFixAndGuarantee}`)
    let showSubModalModalAccessory = document.querySelector(`.${cssNavModalService.ModalAccessory}`)
    let showSubModalStyleLife = document.querySelector(`.${cssNavModalService.ModalStyleLife}`)

    showSubModalFixAndGuarantee.classList.remove(cssNavModalService.showSubModal)
    showSubModalModalAccessory.classList.add(cssNavModalService.showSubModal)
    showSubModalStyleLife.classList.remove(cssNavModalService.showSubModal)
}
export function handleShowModalStyleLife(e) {
    let fixAndGuarantee = document.querySelector('.container--ModalFixAndGuarantee')
    let accessory = document.querySelector('.container--ModalAccessory')
    let styleLife = document.querySelector('.container--ModalStyleLife')
    let containerFixAndGuarantee = fixAndGuarantee.querySelector('a')
    let containerAccessory = accessory.querySelector('a')
    let containerStyleLife = styleLife.querySelector('a')

    containerFixAndGuarantee.style.color = `#333`
    containerAccessory.style.color = `#333`
    containerStyleLife.style.color = `#333`

    containerFixAndGuarantee.style.fontWeight = `normal`
    containerAccessory.style.fontWeight = `normal`
    containerStyleLife.style.fontWeight = `bold`


    let showSubModalFixAndGuarantee = document.querySelector(`.${cssNavModalService.ModalFixAndGuarantee}`)
    let showSubModalModalAccessory = document.querySelector(`.${cssNavModalService.ModalAccessory}`)
    let showSubModalStyleLife = document.querySelector(`.${cssNavModalService.ModalStyleLife}`)

    showSubModalFixAndGuarantee.classList.remove(cssNavModalService.showSubModal)
    showSubModalModalAccessory.classList.remove(cssNavModalService.showSubModal)
    showSubModalStyleLife.classList.add(cssNavModalService.showSubModal)
}

export function closeSubModal() {
    let fixAndGuarantee = document.querySelector('.container--ModalFixAndGuarantee')
    let accessory = document.querySelector('.container--ModalAccessory')
    let styleLife = document.querySelector('.container--ModalStyleLife')
    let containerFixAndGuarantee = fixAndGuarantee.querySelector('a')
    let containerAccessory = accessory.querySelector('a')
    let containerStyleLife = styleLife.querySelector('a')

    containerFixAndGuarantee.style.color = `#333`
    containerAccessory.style.color = `#333`
    containerStyleLife.style.color = `#333`

    containerFixAndGuarantee.style.fontWeight = `normal`
    containerAccessory.style.fontWeight = `normal`
    containerStyleLife.style.fontWeight = `normal`


    let showSubModalFixAndGuarantee = document.querySelector(`.${cssNavModalService.ModalFixAndGuarantee}`)
    let showSubModalModalAccessory = document.querySelector(`.${cssNavModalService.ModalAccessory}`)
    let showSubModalStyleLife = document.querySelector(`.${cssNavModalService.ModalStyleLife}`)

    showSubModalFixAndGuarantee.classList.remove(cssNavModalService.showSubModal)
    showSubModalModalAccessory.classList.remove(cssNavModalService.showSubModal)
    showSubModalStyleLife.classList.remove(cssNavModalService.showSubModal)
}

export function handleCloseSubModalService() {
    let fixAndGuarantee = document.querySelector('.container--ModalFixAndGuarantee')
    let accessory = document.querySelector('.container--ModalAccessory')
    let styleLife = document.querySelector('.container--ModalStyleLife')
    let containerFixAndGuarantee = fixAndGuarantee.querySelector('a')
    let containerAccessory = accessory.querySelector('a')
    let containerStyleLife = styleLife.querySelector('a')

    containerFixAndGuarantee.style.color = `#333`
    containerAccessory.style.color = `#333`
    containerStyleLife.style.color = `#333`

    containerFixAndGuarantee.style.fontWeight = `normal`
    containerAccessory.style.fontWeight = `normal`
    containerStyleLife.style.fontWeight = `normal`

    let form = document.querySelector(`.${cssSubNavModalService.form}`)

    let showSubModalFixAndGuarantee = document.querySelector(`.${cssNavModalService.ModalFixAndGuarantee}`)
    let showSubModalModalAccessory = document.querySelector(`.${cssNavModalService.ModalAccessory}`)
    let showSubModalStyleLife = document.querySelector(`.${cssNavModalService.ModalStyleLife}`)

    showSubModalFixAndGuarantee.classList.remove(cssNavModalService.showSubModal)
    showSubModalModalAccessory.classList.remove(cssNavModalService.showSubModal)
    showSubModalStyleLife.classList.remove(cssNavModalService.showSubModal)
}
