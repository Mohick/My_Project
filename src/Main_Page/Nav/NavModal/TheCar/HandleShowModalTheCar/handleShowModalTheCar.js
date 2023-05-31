import cssNavModalTheCar from '../NavModalTheCar.Module.scss'
import cssNavModalBuyCar from '../../BuyCar/NavModalBuyCar.Module.scss'
import cssNavModalGuideBuyCar from '../../GuideBuyCar/NavModalGuideBuyCar.Module.scss'
import cssNavModalService from '../../service/NavModalService.Module.scss'
import cssNavModalGlobalMer from '../../GlobalMer/NavModalGlobalMer.Module.scss'
import cssNav from '../../../Nav.Module.scss'
import cssHeader from '../../../../Header/Header.Module.scss'

import { handleHoverNav } from '../../../handleHoverNav/handleHoverNav'
import { closeSubModal } from '../../Service/SubNavModal/handleSubModal/handleSubModal'
export function handleShowModalTheCar(e) {
    let nav = document.querySelector(`.${cssNav.form}`)
    let header = document.querySelector(`.${cssHeader.form}`)
    let clientHeightHeader = header.clientHeight
    let clientHeightNav = nav.clientHeight

    let itemsTheCar = document.querySelector(`.${cssNav.form__container_items_theCar}`)
    let itemsBuyCar = document.querySelector(`.${cssNav.form__container_items_buyCar}`)
    let itemsGuideBuyCar = document.querySelector(`.${cssNav.form__container_items_guideBuyCar}`)
    let itemsService = document.querySelector(`.${cssNav.form__container_items_service}`)
    let itemsGlobalCar = document.querySelector(`.${cssNav.form__container_items_globalCar}`)

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



    // show localtion  user

    let localUserTheCar = itemsTheCar.querySelector(`.${cssNav.localUser}`)
    let localUserBuyCar = itemsBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserGuideBuyCar = itemsGuideBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserService = itemsService.querySelector(`.${cssNav.localUser}`)
    let localUserGolbalCar = itemsGlobalCar.querySelector(`.${cssNav.localUser}`)


    let iconClose = document.querySelector(`.${cssNavModalTheCar.form__box_close}`)

    if (showModalTheCar !== null || undefined || NaN) {
        setTimeout(() => {
            boxContentTheCar.style.animation = `${cssNavModalTheCar.close} 0.2s linear`
            localUserTheCar.classList.remove(cssNav.localtionUserTheCar)
            localUserTheCar.classList.add(cssNav.closeLocaltionUser)
            handleHoverNav()

            setTimeout(() => {
                formTheCar.classList.remove(cssNavModalTheCar.js__modal_theCar)
                localUserTheCar.classList.remove(cssNav.closeLocaltionUser)
                itemsTheCar.querySelector('svg').style.fill = '#bbb'
                itemsTheCar.querySelector('h3').style.color = '#bbb'
                document.body.style.overflowY = 'scroll'
                document.body.style.willChange = 'overflow'
                document.body.style.transition = 'all 0.2s'
            }, 165);
        }, 0);
    } else {

        (showModalBuyCar || showModalGuideBuyCar || showModalService || showModalGlobalMer !== null || undefined || NaN) ?
            setTimeout(() => {
                showModalBuyCar !== null || undefined || NaN ? boxContentBuyCar.style.animation = `${cssNavModalBuyCar.close} 0.2s linear` : undefined
                showModalGuideBuyCar !== null || undefined || NaN ? boxContentGuideBuyCar.style.animation = `${cssNavModalGuideBuyCar.close} 0.2s linear` : undefined
                showModalService !== null || undefined || NaN ? boxContentService.style.animation = `${cssNavModalService.close} 0.2s linear` : undefined
                showModalGlobalMer !== null || undefined || NaN ? boxContentGlobalMer.style.animation = `${cssNavModalGlobalMer.close} 0.2s linear` : undefined
                itemsBuyCar.querySelector(`.${cssNav.localtionUserBuyCar}`) !== null || undefined || NaN ?
                    localUserBuyCar.classList.add(cssNav.closeLocaltionUser) :
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

                setTimeout(() => {
                    showModalBuyCar !== null || undefined || NaN ? formBuyCar.classList.remove(cssNavModalBuyCar.js__modal_buyCar) : undefined
                    showModalGuideBuyCar !== null || undefined || NaN ? formGuideBuyCar.classList.remove(cssNavModalGuideBuyCar.js__modal_guideBuyCar) : undefined
                    showModalService !== null || undefined || NaN ? formService.classList.remove(cssNavModalService.js__modal_service) : undefined
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



                    setTimeout(() => {
                        boxContentTheCar.addEventListener('click', (e) => {
                            e.stopPropagation()
                        })
                        iconClose.addEventListener('click', (e) => {
                            setTimeout(() => {
                                boxContentTheCar.style.animation = `${cssNavModalTheCar.close} 0.2s linear`
                                localUserTheCar.classList.add(cssNav.closeLocaltionUser)
                                localUserTheCar.classList.remove(cssNav.localtionUserTheCar)

                                setTimeout(() => {
                                    itemsTheCar.querySelector('svg').style.fill = '#bbb'
                                    itemsTheCar.querySelector('h3').style.color = '#bbb'
                                    handleHoverNav()
                                    formTheCar.classList.remove(cssNavModalTheCar.js__modal_theCar)
                                    localUserTheCar.classList.remove(cssNav.closeLocaltionUser)
                                    document.body.style.overflowY = 'scroll'
                                    document.body.style.willChange = 'overflow'
                                    document.body.style.transition = 'all 0.2s'

                                }, 165);
                            }, 0);
                        })
                        closeSubModal()
                        formTheCar.style.top = `${clientHeightHeader + clientHeightNav}px`
                        itemsBuyCar.querySelector('h3').style.color = '#bbb'
                        itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
                        itemsService.querySelector('h3').style.color = '#bbb'
                        itemsGlobalCar.querySelector('h3').style.color = '#bbb'
                        formTheCar.classList.add(cssNavModalTheCar.js__modal_theCar)
                        document.querySelector(`.${cssNav.localtionUserTheCar}`) !== null || undefined || NaN ?
                            localUserTheCar.classList.add(cssNav.localtionUserTheCar) :
                            undefined
                        setTimeout(() => {
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
                                itemsTheCar.querySelector('svg').style.fill = '#fff'
                                itemsTheCar.querySelector('h3').style.color = '#fff'
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
                            localUserTheCar.classList.add(cssNav.localtionUserTheCar)
                            itemsTheCar.querySelector('svg').style.fill = '#fff'
                            itemsTheCar.querySelector('h3').style.color = '#fff'
                            boxContentTheCar.style.animation = `${cssNavModalTheCar.open} 0.2s linear`
                        }, 0);
                    }, 0);
                }, 165);
            }, 0)
            :
            setTimeout(() => {
                boxContentTheCar.addEventListener('click', (e) => {
                    e.stopPropagation()
                })
                iconClose.addEventListener('click', (e) => {
                    setTimeout(() => {
                        boxContentTheCar.style.animation = `${cssNavModalTheCar.close} 0.2s linear`
                        localUserTheCar.classList.add(cssNav.closeLocaltionUser)
                        localUserTheCar.classList.remove(cssNav.localtionUserTheCar)
                        setTimeout(() => {
                            handleHoverNav()
                            itemsTheCar.querySelector('svg').style.fill = '#bbb'
                            itemsTheCar.querySelector('h3').style.color = '#bbb'
                            localUserTheCar.classList.remove(cssNav.closeLocaltionUser)
                            formTheCar.classList.remove(cssNavModalTheCar.js__modal_theCar)
                            document.body.style.overflowY = 'scroll'
                            document.body.style.willChange = 'overflow'
                            document.body.style.transition = 'all 0.2s'
                        }, 165);
                    }, 0);
                })
                window.scrollTo({ top: 0, behavior: "smooth" })
                formTheCar.style.top = `${clientHeightHeader + clientHeightNav}px`
                formTheCar.classList.add(cssNavModalTheCar.js__modal_theCar)
                document.body.style.overflow = 'hidden'
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
                    itemsTheCar.querySelector('svg').style.fill = '#fff'
                    itemsTheCar.querySelector('h3').style.color = '#fff'
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
                setTimeout(() => {
                    localUserTheCar.classList.add(cssNav.localtionUserTheCar)
                    itemsTheCar.querySelector('svg').style.fill = '#fff'
                    itemsTheCar.querySelector('h3').style.color = '#fff'
                    boxContentTheCar.style.animation = `${cssNavModalTheCar.open} 0.2s linear`
                }, 0);
            }, 0);
    }
}
