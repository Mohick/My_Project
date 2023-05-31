import cssModalNavMenuMobi from "../../../ModalNavMenuMobi/ModalNavMenuMobi.module.scss";
import cssHeader from "../Header.module.scss";


export function handleOnClickCar() {
    let form = document.querySelector(`.${cssModalNavMenuMobi.form}`)
    let showForm = document.querySelector(`.${cssModalNavMenuMobi.showModal}`)
    let formMpdal = document.querySelector(`.${cssModalNavMenuMobi.form__container__content}`)
    let formHeader = document.querySelector(`.${cssHeader.form}`)


    let formTheCar = document.querySelector(`.${cssModalNavMenuMobi.form__box__theCar}`)
    let formBuyCar = document.querySelector(`.${cssModalNavMenuMobi.form__box__buyCar}`)
    let formGuideBuyCar = document.querySelector(`.${cssModalNavMenuMobi.form__box__guideBuyCar}`)
    let formServeci = document.querySelector(`.${cssModalNavMenuMobi.form__box__serveci}`)
    let formGlobalMer = document.querySelector(`.${cssModalNavMenuMobi.form__box__globalMer}`)

    let backModalBefore = document.querySelector(`.${cssModalNavMenuMobi.form__box__back}`)

    let defaultModal = document.querySelector(`.${cssModalNavMenuMobi.form__container__body__default}`)

    let theCarModal = document.querySelector(`.${cssModalNavMenuMobi.form__container__body__therCar}`)

    let buyCarModal = document.querySelector(`.${cssModalNavMenuMobi.form__container__body__buyCar}`)
    let guideBuyCarModal = document.querySelector(`.${cssModalNavMenuMobi.form__container__body__guideBuyCar}`)
    let serveciModal = document.querySelector(`.${cssModalNavMenuMobi.form__container__body__serveci}`)
    let globalMerModal = document.querySelector(`.${cssModalNavMenuMobi.form__container__body__globalMer}`)
    let titleH2 = document.querySelector(`.${cssModalNavMenuMobi.form__box__title}`).querySelector('h2')
    formMpdal.onclick = function (e) {
        e.stopPropagation()
    }
    if (showForm != null || undefined || NaN) {
        setTimeout(() => {
            formMpdal.style.animation = `${cssModalNavMenuMobi.close} 0.2s linear`
            setTimeout(() => {
                form.classList.remove(cssModalNavMenuMobi.showModal)
                document.body.style.overflowY = 'scroll'
            }, 165);
        }, 0);
    }
    else {
        setTimeout(() => {
            let close = document.querySelector(`.${cssModalNavMenuMobi.form__box__close}`)
            formMpdal.style.animation = `${cssModalNavMenuMobi.open} 0.2s linear`
            document.body.style.overflow = 'hidden'
            window.scrollTo({ top: 0, behavior: "smooth" })
            form.style.top = formHeader != null || undefined || NaN ? `${formHeader.clientHeight}px` : undefined

            titleH2.innerHTML = `Các Dòng Xe`
            theCarModal.classList.add(cssModalNavMenuMobi.content__default)
            defaultModal.classList.remove(`${cssModalNavMenuMobi.content__default}`)
            backModalBefore.style.display = 'block'
            setTimeout(() => {
                form.classList.add(cssModalNavMenuMobi.showModal)
                setTimeout(() => {
                    backModalBefore.onclick = (e) => {
                        let li = e.target
                        let Nametittle = li.innerText
                        titleH2.innerHTML = Nametittle

                        setTimeout(() => {
                            buyCarModal.classList.remove(cssModalNavMenuMobi.content__default)
                            guideBuyCarModal.classList.remove(`${cssModalNavMenuMobi.content__default}`)
                            serveciModal.classList.remove(cssModalNavMenuMobi.content__default)
                            globalMerModal.classList.remove(`${cssModalNavMenuMobi.content__default}`)
                            theCarModal.classList.remove(cssModalNavMenuMobi.content__default)
                            defaultModal.classList.add(`${cssModalNavMenuMobi.content__default}`)
                            titleH2.innerHTML = ''
                            backModalBefore.style.display = 'none'
                        }, 0);
                    }
                    formTheCar.onclick = (e) => {
                        let li = e.target
                        let Nametittle = li.innerText
                        titleH2.innerHTML = Nametittle
                        theCarModal.classList.add(cssModalNavMenuMobi.content__default)
                        defaultModal.classList.remove(`${cssModalNavMenuMobi.content__default}`)
                        backModalBefore.style.display = 'block'
                    }
                    formBuyCar.onclick = (e) => {
                        let li = e.target

                        let Nametittle = li.innerText
                        titleH2.innerHTML = Nametittle

                        buyCarModal.classList.add(cssModalNavMenuMobi.content__default);

                        defaultModal.classList.remove(`${cssModalNavMenuMobi.content__default}`);
                        backModalBefore.style.display = 'block'

                    }
                    formGuideBuyCar.onclick = (e) => {
                        let li = e.target
                        let Nametittle = li.innerText
                        titleH2.innerHTML = Nametittle
                        guideBuyCarModal.classList.add(cssModalNavMenuMobi.content__default)
                        backModalBefore.style.display = 'block'
                        defaultModal.classList.remove(`${cssModalNavMenuMobi.content__default}`)


                    }
                    formServeci.onclick = (e) => {
                        let li = e.target
                        let Nametittle = li.innerText
                        titleH2.innerHTML = Nametittle

                        serveciModal.classList.add(cssModalNavMenuMobi.content__default)
                        backModalBefore.style.display = 'block'
                        defaultModal.classList.remove(`${cssModalNavMenuMobi.content__default}`)


                    }
                    formGlobalMer.onclick = (e) => {
                        let li = e.target
                        let Nametittle = li.innerText
                        titleH2.innerHTML = Nametittle
                        globalMerModal.classList.add(cssModalNavMenuMobi.content__default)
                        defaultModal.classList.remove(`${cssModalNavMenuMobi.content__default}`)
                        backModalBefore.style.display = 'block'
                    }
                }, 0);
            }, 165);
            close.onclick = function (e) {
                formMpdal.style.animation = `${cssModalNavMenuMobi.close} 0.2s linear`
                setTimeout(() => {
                    form.classList.remove(cssModalNavMenuMobi.showModal)
                    document.body.style.overflowY = 'scroll'
                }, 165);
            }
        }, 0);
    }

}