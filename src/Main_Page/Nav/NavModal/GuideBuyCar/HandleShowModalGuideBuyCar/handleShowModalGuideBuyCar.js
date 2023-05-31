import cssNavModalGuideBuyCar from '../NavModalGuideBuyCar.Module.scss'
import cssNavModalTheCar from '../../TheCar/NavModalTheCar.Module.scss'
import cssNavModalBuyCar from '../../BuyCar/NavModalBuyCar.Module.scss'
import cssNavModalService from '../../service/NavModalService.Module.scss'
import cssNavModalGlobalMer from '../../GlobalMer/NavModalGlobalMer.Module.scss'
import cssNav from '../../../Nav.Module.scss'
import cssHeader from '../../../../Header/Header.Module.scss'
import { closeSubModal } from '../../Service/SubNavModal/handleSubModal/handleSubModal'
export  function handleShowModalGuideBuyCar() {
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

    let localUserTheCar = itemsTheCar.querySelector(`.${cssNav.localUser}`)
    let localUserBuyCar = itemsBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserGuideBuyCar = itemsGuideBuyCar.querySelector(`.${cssNav.localUser}`)
    let localUserService = itemsService.querySelector(`.${cssNav.localUser}`)
    let localUserGolbalCar = itemsGlobalCar.querySelector(`.${cssNav.localUser}`)

    let iconClose = document.querySelector(`.${cssNavModalGuideBuyCar.form__box_close}`)

    if (showModalGuideBuyCar != null || undefined || NaN) {
        setTimeout(() => {
            localUserGuideBuyCar.classList.add(cssNav.closeLocaltionUser)
            localUserGuideBuyCar.classList.remove(cssNav.localtionUserGuideBuyCar)
            boxContentGuideBuyCar.style.animation = `${cssNavModalTheCar.close} 0.2s linear`
            setTimeout(() => {
                formGuideBuyCar.classList.remove(cssNavModalGuideBuyCar.js__modal_guideBuyCar)
                localUserGuideBuyCar.classList.remove(cssNav.closeLocaltionUser)
                itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
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
    else {
        (showModalBuyCar || showModalService || showModalTheCar || showModalGlobalMer !== null || undefined || NaN) ?
            setTimeout(() => {
                showModalBuyCar !== null || undefined || NaN ? boxContentBuyCar.style.animation = `${cssNavModalBuyCar.close} 0.2s linear` : undefined
                showModalService !== null || undefined || NaN ? boxContentService.style.animation = `${cssNavModalService.close} 0.2s linear` : undefined
                showModalTheCar !== null || undefined || NaN ? boxContentTheCar.style.animation = `${cssNavModalTheCar.close} 0.2s linear` : undefined
                showModalGlobalMer !== null || undefined || NaN ? boxContentGlobalMer.style.animation = `${cssNavModalGlobalMer.close} 0.2s linear` : undefined
                itemsTheCar.querySelector(`.${cssNav.localtionUserTheCar}`) !== null || undefined || NaN ?
                    localUserTheCar.classList.add(cssNav.closeLocaltionUser) :
                    undefined
                itemsService.querySelector(`.${cssNav.localtionUserService}`) !== null || undefined || NaN ?
                    localUserService.classList.add(cssNav.closeLocaltionUser) :
                    undefined
                itemsBuyCar.querySelector(`.${cssNav.localUserBuyCar}`) !== null || undefined || NaN ?
                    localUserBuyCar.classList.add(cssNav.closeLocaltionUser) :
                    undefined
                itemsGlobalCar.querySelector(`.${cssNav.localtionUserGolbalMer}`) !== null || undefined || NaN ?
                    localUserGolbalCar.classList.add(cssNav.closeLocaltionUser) :
                    undefined
                itemsTheCar.querySelector(`.${cssNav.localtionUserTheCar}`) !== null || undefined || NaN ?
                    localUserTheCar.classList.remove(cssNav.localtionUserTheCar) :
                    undefined
                itemsService.querySelector(`.${cssNav.localtionUserService}`) !== null || undefined || NaN ?
                    localUserService.classList.remove(cssNav.localtionUserService) :
                    undefined
                itemsBuyCar.querySelector(`.${cssNav.localtionUserBuyCar}`) !== null || undefined || NaN ?
                    localUserBuyCar.classList.remove(cssNav.localtionUserBuyCar) :
                    undefined
                itemsGlobalCar.querySelector(`.${cssNav.localtionUserGolbalMer}`) !== null || undefined || NaN ?
                    localUserGolbalCar.classList.remove(cssNav.localtionUserGolbalMer) :
                    undefined
                setTimeout(() => {
                    showModalBuyCar !== null || undefined || NaN ? formBuyCar.classList.remove(cssNavModalBuyCar.js__modal_buyCar) : undefined
                    showModalService !== null || undefined || NaN ? formService.classList.remove(cssNavModalService.js__modal_service) : undefined
                    showModalTheCar !== null || undefined || NaN ? formTheCar.classList.remove(cssNavModalTheCar.js__modal_theCar) : undefined
                    showModalGlobalMer !== null || undefined || NaN ? formGlobalMer.classList.remove(cssNavModalGlobalMer.js__modal_globalMer) : undefined
                    itemsTheCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                        localUserTheCar.classList.remove(cssNav.closeLocaltionUser) :
                        undefined
                    itemsService.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                        localUserService.classList.remove(cssNav.closeLocaltionUser) :
                        undefined
                    itemsBuyCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                        localUserService.classList.remove(cssNav.closeLocaltionUser) :
                        undefined
                    itemsGlobalCar.querySelector(`.${cssNav.closeLocaltionUser}`) !== null || undefined || NaN ?
                        localUserGolbalCar.classList.remove(cssNav.closeLocaltionUser) :
                        undefined
                    setTimeout(() => {
                        boxContentGuideBuyCar.addEventListener('click', (e) => {
                            e.stopPropagation()
                        })
                        iconClose.addEventListener('click', (e) => {
                            setTimeout(() => {
                                boxContentGuideBuyCar.style.animation = `${cssNavModalGuideBuyCar.close} 0.2s linear`
                                localUserGuideBuyCar.classList.remove(cssNav.localtionUserGuideBuyCar)
                                localUserGuideBuyCar.classList.add(cssNav.closeLocaltionUser)
                                setTimeout(() => {
                                    formGuideBuyCar.classList.remove(cssNavModalGuideBuyCar.js__modal_guideBuyCar)
                                    localUserGuideBuyCar.classList.remove(cssNav.closeLocaltionUser)
                                    document.body.style.overflowY = 'scroll'
                                    itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
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
                        itemsTheCar.querySelector('svg').style.fill = '#bbb'
                        itemsTheCar.querySelector('h3').style.color = '#bbb'
                        itemsBuyCar.querySelector('h3').style.color = '#bbb'
                        itemsService.querySelector('h3').style.color = '#bbb'
                        itemsGlobalCar.querySelector('h3').style.color = '#bbb'
                        formGuideBuyCar.style.top = `${clientHeightHeader + clientHeightNav}px`
                        formGuideBuyCar.classList.add(cssNavModalGuideBuyCar.js__modal_guideBuyCar)
                        setTimeout(() => {
                            itemsGuideBuyCar.querySelector('h3').style.color = '#fff'
                            localUserGuideBuyCar.classList.add(cssNav.localtionUserGuideBuyCar)
                            boxContentGuideBuyCar.style.animation = `${cssNavModalGuideBuyCar.open} 0.2s linear`
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
                                itemsGuideBuyCar.querySelector('h3').style.color = '#fff'
                            }
                            localUserService.onmouseout = () => {
                                itemsService.querySelector('h3').style.color = '#bbb'
                            }
                            localUserGolbalCar.onmouseout = () => {
                                itemsGlobalCar.querySelector('h3').style.color = '#bbb'
                            }

                        }, 0);
                    }, 0);
                }, 165);
            }, 0)
            :
            setTimeout(() => {
                boxContentGuideBuyCar.addEventListener('click', (e) => {
                    e.stopPropagation()
                })
                iconClose.addEventListener('click', (e) => {
                    setTimeout(() => {
                        boxContentGuideBuyCar.style.animation = `${cssNavModalGuideBuyCar.close} 0.2s linear`
                        localUserGuideBuyCar.classList.remove(cssNav.localtionUserGuideBuyCar)
                        localUserGuideBuyCar.classList.add(cssNav.closeLocaltionUser)
                        setTimeout(() => {
                            formGuideBuyCar.classList.remove(cssNavModalGuideBuyCar.js__modal_guideBuyCar)
                            localUserGuideBuyCar.classList.remove(cssNav.closeLocaltionUser)
                            itemsGuideBuyCar.querySelector('h3').style.color = '#bbb'
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
                formGuideBuyCar.style.top = `${clientHeightHeader + clientHeightNav}px`
                formGuideBuyCar.classList.add(cssNavModalGuideBuyCar.js__modal_guideBuyCar)
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
                    itemsGuideBuyCar.querySelector('h3').style.color = '#fff'
                }
                localUserService.onmouseout = () => {
                    itemsService.querySelector('h3').style.color = '#bbb'
                }
                localUserGolbalCar.onmouseout = () => {
                    itemsGlobalCar.querySelector('h3').style.color = '#bbb'
                }

                setTimeout(() => {
                    localUserGuideBuyCar.classList.add(cssNav.localtionUserGuideBuyCar)
                    itemsGuideBuyCar.querySelector('h3').style.color = '#fff'
                    boxContentGuideBuyCar.style.animation = `${cssNavModalGuideBuyCar.open} 0.2s linear`
                }, 0);
            }, 0);
    }
}
