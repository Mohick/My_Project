import cssNavModalBuyCar from '../NavModalBuyCar.Module.scss'
import cssNavModalTheCar from '../../TheCar/NavModalTheCar.Module.scss'
import cssNavModalGuideBuyCar from '../../GuideBuyCar/NavModalGuideBuyCar.Module.scss'
import cssNavModalService from '../../service/NavModalService.Module.scss'
import cssNavModalGlobalMer from '../../GlobalMer/NavModalGlobalMer.Module.scss'
import cssNav from '../../../Nav.Module.scss'
import cssHeader from '../../../../Header/Header.Module.scss'
import { handleHoverNav } from '../../../handleHoverNav/handleHoverNav'
import { closeSubModal } from '../../Service/SubNavModal/handleSubModal/handleSubModal'
export function handleShowModalBuyCar() {

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
    let boxListItems = boxContentBuyCar.querySelector(`.${cssNavModalBuyCar.form__box_list}`)
    let clientHeightContent = boxListItems.clientHeight

    let formGuideBuyCar = document.querySelector(`.${cssNavModalGuideBuyCar.form}`)
    let showModalGuideBuyCar = document.querySelector(`.${cssNavModalGuideBuyCar.js__modal_guideBuyCar}`)
    let boxContentGuideBuyCar = document.querySelector(`.${cssNavModalGuideBuyCar.form__box_content}`)

    let formService = document.querySelector(`.${cssNavModalService.form}`)
    let showModalService = document.querySelector(`.${cssNavModalService.js__modal_service}`)
    let boxContentService = document.querySelector(`.${cssNavModalService.form__box_content}`)

    let formGlobalMer = document.querySelector(`.${cssNavModalGlobalMer.form}`)
    let showModalGlobalMer = document.querySelector(`.${cssNavModalGlobalMer.js__modal_globalMer}`)
    let boxContentGlobalMer = document.querySelector(`.${cssNavModalGlobalMer.form__box_content}`)

    let localUserTheCar = itemsTheCar.querySelector(`.${cssNav.localUser}`)
    let localUserBuyCar = itemsBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserGuideBuyCar = itemsGuideBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserService = itemsService.querySelector(`.${cssNav.localUser}`)
    let localUserGolbalCar = itemsGlobalCar.querySelector(`.${cssNav.localUser}`)

    let iconClose = document.querySelector(`.${cssNavModalBuyCar.form__box_close}`)


    if (showModalBuyCar !== null || undefined || NaN) {
        setTimeout(() => {
            localUserBuyCar.classList.add(cssNav.closeLocaltionUser)
            localUserBuyCar.classList.remove(cssNav.localtionUserBuyCar)
            boxContentBuyCar.style.animation = `${cssNavModalBuyCar.close} 0.2s linear`
            setTimeout(() => {

                itemsBuyCar.querySelector('h3').style.color = '#bbb'
                handleHoverNav()

                formBuyCar.classList.remove(cssNavModalBuyCar.js__modal_buyCar)
                localUserBuyCar.classList.remove(cssNav.closeLocaltionUser)
                document.body.style.overflowY = 'scroll'
                document.body.style.willChange = 'overflow'
                document.body.style.transition = 'all 0.2s'
            }, 165);
        }, 0);
    } else {
        (showModalGuideBuyCar || showModalService || showModalTheCar || showModalGlobalMer !== null || undefined || NaN) ? setTimeout(() => {
            showModalGuideBuyCar !== null || undefined || NaN ? boxContentGuideBuyCar.style.animation = `${cssNavModalGuideBuyCar.close} 0.2s linear` : undefined
            showModalService !== null || undefined || NaN ? boxContentService.style.animation = `${cssNavModalService.close} 0.2s linear` : undefined
            showModalTheCar !== null || undefined || NaN ? boxContentTheCar.style.animation = `${cssNavModalTheCar.close} 0.2s linear` : undefined
            showModalGlobalMer !== null || undefined || NaN ? boxContentGlobalMer.style.animation = `${cssNavModalGlobalMer.close} 0.2s linear` : undefined
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
            itemsTheCar.querySelector(`.${cssNav.localtionUserTheCar}`) !== null || undefined || NaN ?
                localUserTheCar.classList.remove(cssNav.localtionUserTheCar) :
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
                showModalGuideBuyCar !== null || undefined || NaN ? formGuideBuyCar.classList.remove(cssNavModalGuideBuyCar.js__modal_guideBuyCar) : undefined
                showModalService !== null || undefined || NaN ? formService.classList.remove(cssNavModalService.js__modal_service) : undefined
                showModalTheCar !== null || undefined || NaN ? formTheCar.classList.remove(cssNavModalTheCar.js__modal_theCar) : undefined
                showModalGlobalMer !== null || undefined || NaN ? formGlobalMer.classList.remove(cssNavModalGlobalMer.js__modal_globalMer) : undefined
                itemsTheCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                    localUserTheCar.classList.remove(cssNav.closeLocaltionUser) :
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
                    boxContentBuyCar.addEventListener('click', (e) => {
                        e.stopPropagation()
                    })
                    iconClose.addEventListener('click', (e) => {
                        setTimeout(() => {
                            localUserBuyCar.classList.remove(cssNav.localtionUserBuyCar)
                            localUserBuyCar.classList.add(cssNav.closeLocaltionUser)
                            boxContentBuyCar.style.animation = `${boxContentBuyCar.close} 0.2s linear`
                            setTimeout(() => {
                                itemsBuyCar.querySelector('h3').style.fill = '#bbb'
                                localUserBuyCar.classList.remove(cssNav.closeLocaltionUser)
                                formBuyCar.classList.remove(cssNavModalBuyCar.js__modal_buyCar)
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
                    })
                    closeSubModal()
                    formBuyCar.style.top = `${clientHeightHeader + clientHeightNav}px`
                    itemsTheCar.querySelector('svg').style.fill = '#bbb'
                    itemsTheCar.querySelector('h3').style.color = '#bbb'
                    itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
                    itemsService.querySelector('h3').style.color = '#bbb'
                    itemsGlobalCar.querySelector('h3').style.color = '#bbb'
                    formBuyCar.classList.add(cssNavModalBuyCar.js__modal_buyCar)
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
                            itemsTheCar.querySelector('svg').style.fill = '#bbb'
                            itemsTheCar.querySelector('h3').style.color = '#bbb'
                        }
                        localUserBuyCar.onmouseout = () => {
                            itemsBuyCar.querySelector('h3').style.color = '#fff'
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
                        localUserBuyCar.classList.add(cssNav.localtionUserBuyCar)
                        itemsBuyCar.querySelector('h3').style.color = '#fff'
                        boxContentBuyCar.style.animation = `${cssNavModalBuyCar.open} 0.2s linear`
                    }, 0);
                }, 0);
            }, 165);
        }, 0)
            :
            setTimeout(() => {
                boxContentBuyCar.addEventListener('click', (e) => {
                    e.stopPropagation()
                })
                iconClose.addEventListener('click', (e) => {
                    setTimeout(() => {
                        localUserBuyCar.classList.remove(cssNav.localtionUserBuyCar)
                        localUserBuyCar.classList.add(cssNav.closeLocaltionUser)
                        boxContentBuyCar.style.animation = `${cssNavModalBuyCar.close} 0.2s linear`
                        setTimeout(() => {
                            localUserBuyCar.classList.remove(cssNav.closeLocaltionUser)
                            formBuyCar.classList.remove(cssNavModalBuyCar.js__modal_buyCar)
                            itemsBuyCar.querySelector('h3').style.color = '#bbb'
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
                })
                window.scrollTo({ top: 0, behavior: "smooth" })
                formBuyCar.style.top = `${clientHeightHeader + clientHeightNav}px`
                formBuyCar.classList.add(cssNavModalBuyCar.js__modal_buyCar)
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
                    itemsTheCar.querySelector('svg').style.fill = '#bbb'
                    itemsTheCar.querySelector('h3').style.color = '#bbb'
                }
                localUserBuyCar.onmouseout = () => {
                    itemsBuyCar.querySelector('h3').style.color = '#fff'
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
                    localUserBuyCar.classList.add(cssNav.localtionUserBuyCar)
                    itemsBuyCar.querySelector('h3').style.color = '#fff'
                    boxContentBuyCar.style.animation = `${cssNavModalBuyCar.open} 0.2s linear`
                }, 0);
            }, 0);
    }
}