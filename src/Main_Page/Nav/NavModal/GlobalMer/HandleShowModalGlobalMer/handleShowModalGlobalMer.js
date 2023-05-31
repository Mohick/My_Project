import cssNavModalTheCar from '../../TheCar/NavModalTheCar.Module.scss'
import cssNavModalBuyCar from '../../BuyCar/NavModalBuyCar.Module.scss'
import cssNavModalService from '../../service/NavModalService.Module.scss'
import cssNavModalGlobalMer from '../NavModalGlobalMer.Module.scss'
import cssNavModalGuideBuyCar from '../../GuideBuyCar/NavModalGuideBuyCar.Module.scss'
import cssNav from '../../../Nav.Module.scss'
import cssHeader from '../../../../Header/Header.Module.scss'
import { closeSubModal } from '../../Service/SubNavModal/handleSubModal/handleSubModal'
export function handleshowModalGlobalMer() {

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

    let boxListItems = boxContentGlobalMer.querySelector(`.${cssNavModalGlobalMer.form__box_list}`)
    let clientHeightContent = boxListItems.clientHeight

    let localUserTheCar = itemsTheCar.querySelector(`.${cssNav.localUser}`)
    let localUserBuyCar = itemsBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserGuideBuyCar = itemsGuideBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserService = itemsService.querySelector(`.${cssNav.localUser}`)
    let localUserGolbalCar = itemsGlobalCar.querySelector(`.${cssNav.localUser}`)

    let iconClose = document.querySelector(`.${cssNavModalGlobalMer.form__box_close}`)

    if (showModalGlobalMer !== null || undefined || NaN) {
        setTimeout(() => {
            localUserGolbalCar.classList.remove(cssNav.localtionUserGolbalMer)
            localUserGolbalCar.classList.add(cssNav.closeLocaltionUser)
            boxContentGlobalMer.style.animation = `${cssNavModalGlobalMer.close} 0.2s linear`
            setTimeout(() => {
                formGlobalMer.classList.remove(cssNavModalGlobalMer.js__modal_globalMer)
                localUserGolbalCar.classList.remove(cssNav.closeLocaltionUser)
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
            }, 165);
        }, 0);
    } else {
        (showModalBuyCar || showModalService || showModalTheCar || showModalGuideBuyCar !== null || undefined || NaN) ?
            setTimeout(() => {
                showModalGuideBuyCar !== null || undefined || NaN ? boxContentGuideBuyCar.style.animation = `${cssNavModalGuideBuyCar.close} 0.2s linear` : undefined
                showModalService !== null || undefined || NaN ? boxContentService.style.animation = `${cssNavModalService.close} 0.2s linear` : undefined
                showModalTheCar !== null || undefined || NaN ? boxContentTheCar.style.animation = `${cssNavModalTheCar.close} 0.2s linear` : undefined
                showModalBuyCar !== null || undefined || NaN ? boxContentBuyCar.style.animation = `${cssNavModalBuyCar.close} 0.2s linear` : undefined
                itemsBuyCar.querySelector(`.${cssNav.localtionUserBuyCar}`) !== null || undefined || NaN ?
                    localUserBuyCar.classList.add(cssNav.closeLocaltionUser) :
                    undefined
                itemsGuideBuyCar.querySelector(`.${cssNav.localtionUserGuideBuyCar}`) !== null || undefined || NaN ?
                    localUserGuideBuyCar.classList.add(cssNav.closeLocaltionUser) :
                    undefined
                itemsService.querySelector(`.${cssNav.localtionUserService}`) !== null || undefined || NaN ?
                    localUserService.classList.add(cssNav.closeLocaltionUser) :
                    undefined
                itemsTheCar.querySelector(`.${cssNav.localtionUserGolbalMer}`) !== null || undefined || NaN ?
                    localUserTheCar.classList.add(cssNav.closeLocaltionUser) :
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
                itemsTheCar.querySelector(`.${cssNav.localtionUserTheCar}`) !== null || undefined || NaN ?
                    localUserTheCar.classList.remove(cssNav.localtionUserTheCar) :
                    undefined
                setTimeout(() => {
                    showModalGuideBuyCar !== null || undefined || NaN ? formGuideBuyCar.classList.remove(cssNavModalGuideBuyCar.js__modal_guideBuyCar) : undefined
                    showModalService !== null || undefined || NaN ? formService.classList.remove(cssNavModalService.js__modal_service) : undefined
                    showModalTheCar !== null || undefined || NaN ? formTheCar.classList.remove(cssNavModalTheCar.js__modal_theCar) : undefined
                    showModalBuyCar !== null || undefined || NaN ? formBuyCar.classList.remove(cssNavModalBuyCar.js__modal_buyCar) : undefined
                    itemsBuyCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                        localUserBuyCar.classList.remove(cssNav.closeLocaltionUser) :
                        undefined
                    itemsGuideBuyCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                        localUserGuideBuyCar.classList.remove(cssNav.closeLocaltionUser) :
                        undefined
                    itemsService.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                        localUserService.classList.remove(cssNav.closeLocaltionUser) :
                        undefined
                    itemsTheCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                        localUserGolbalCar.classList.remove(cssNav.closeLocaltionUser) :
                        undefined
                    setTimeout(() => {
                        boxContentGlobalMer.addEventListener('click', (e) => {
                            e.stopPropagation()
                        })
                        iconClose.addEventListener('click', (e) => {
                            setTimeout(() => {
                                localUserGolbalCar.classList.remove(cssNav.localtionUserGolbalMer)
                                localUserGolbalCar.classList.add(cssNav.closeLocaltionUser)
                                boxContentGlobalMer.style.animation = `${cssNavModalGlobalMer.close} 0.2s linear`
                                setTimeout(() => {
                                    formGlobalMer.classList.remove(cssNavModalGlobalMer.js__modal_globalMer)
                                    localUserGolbalCar.classList.remove(cssNav.closeLocaltionUser)
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
                                }, 165);
                            }, 0);
                        })
                        closeSubModal()
                        formGlobalMer.style.top = `${clientHeightHeader + clientHeightNav}px`
                        itemsTheCar.querySelector('svg').style.fill = '#bbb'
                        itemsTheCar.querySelector('h3').style.color = '#bbb'
                        itemsBuyCar.querySelector('h3').style.color = '#bbb'
                        itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
                        itemsService.querySelector('h3').style.color = '#bbb'
                        clientHeightContent > 500 ? boxListItems.style.overflowY = 'scroll' : boxListItems.style.overflowY = 'hidden'
                        formGlobalMer.classList.add(cssNavModalGlobalMer.js__modal_globalMer)
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
                                itemsBuyCar.querySelector('h3').style.color = '#bbb'
                            }
                            localUserGuideBuyCar.onmouseout = () => {
                                itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
                            }
                            localUserService.onmouseout = () => {
                                itemsService.querySelector('h3').style.color = '#bbb'
                            }
                            localUserGolbalCar.onmouseout = () => {
                                itemsGlobalCar.querySelector('h3').style.color = '#fff'
                            }
                            localUserGolbalCar.classList.add(cssNav.localtionUserGolbalMer)
                            itemsGlobalCar.querySelector('h3').style.color = '#fff'
                            boxContentGlobalMer.style.animation = `${cssNavModalGlobalMer.open} 0.2s linear`
                        }, 0);
                    }, 0);
                }, 165);
            }, 0)
            :
            setTimeout(() => {
                boxContentGlobalMer.addEventListener('click', (e) => {
                    e.stopPropagation()
                })
                iconClose.addEventListener('click', (e) => {
                    setTimeout(() => {
                        boxContentGlobalMer.style.animation = `${cssNavModalGlobalMer.close} 0.2s linear`
                        localUserGolbalCar.classList.remove(cssNav.localtionUserGolbalMer)
                        localUserGolbalCar.classList.add(cssNav.closeLocaltionUser)
                        setTimeout(() => {
                            formGlobalMer.classList.remove(cssNavModalGlobalMer.js__modal_globalMer)
                            localUserGolbalCar.classList.remove(cssNav.closeLocaltionUser)
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
                        }, 165);
                    }, 0);
                })
                window.scrollTo({ top: 0, behavior: "smooth" })
                formGlobalMer.style.top = `${clientHeightHeader + clientHeightNav}px`
                clientHeightContent > 500 ? boxListItems.style.overflowY = 'scroll' : boxListItems.style.overflowY = 'hidden'
                formGlobalMer.classList.add(cssNavModalGlobalMer.js__modal_globalMer)
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
                    itemsBuyCar.querySelector('h3').style.color = '#bbb'
                }
                localUserGuideBuyCar.onmouseout = () => {
                    itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
                }
                localUserService.onmouseout = () => {
                    itemsService.querySelector('h3').style.color = '#bbb'
                }
                localUserGolbalCar.onmouseout = () => {
                    itemsGlobalCar.querySelector('h3').style.color = '#fff'
                }
                setTimeout(() => {
                    localUserGolbalCar.classList.add(cssNav.localtionUserGolbalMer)
                    itemsGlobalCar.querySelector('h3').style.color = '#fff'
                    boxContentGlobalMer.style.animation = `${cssNavModalGlobalMer.open} 0.2s linear`
                }, 0);
            }, 0);
    }
}
