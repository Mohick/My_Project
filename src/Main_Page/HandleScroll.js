import cssCar from "./car/Car.module.scss"
export default function handleSCroll() {
    return document.onscroll = function () {
        let titlemer = document.querySelector(`.${cssCar.form__container_Name_TradeMark_dropdown}`)
        let localTitleMer = titlemer !== null || undefined || NaN ? titlemer.getBoundingClientRect().bottom : undefined
        let tableTradeMark = document.querySelector('.js__form-nav-title')
        if (tableTradeMark != null || undefined) {
            let trademark = tableTradeMark.querySelector('.js__form-nav')

            let titleSedans = document.querySelector('.title-sedans')
            let titleSUV = document.querySelector('.title-suv')
            let titleCoupe = document.querySelector('.title-coupe')
            let formAside = document.querySelector('.form__aside')

            let localtion = trademark != null || undefined ? trademark.getBoundingClientRect().top : undefined
            let aside = formAside != null || undefined ? formAside.getBoundingClientRect().top : undefined
            let localtionSendans = titleSedans != null || undefined ? titleSedans.getBoundingClientRect().top : undefined
            let localtionSUV = titleSUV != null || undefined ? titleSUV.getBoundingClientRect().top : undefined
            let localtionCoupe = titleCoupe != null || undefined ? titleCoupe.getBoundingClientRect().top : undefined
            let endEvent = tableTradeMark != null || undefined ? tableTradeMark.getBoundingClientRect().bottom : undefined


            let clientHeight = trademark.clientHeight
            if (localtion < 0 && localtion != null || undefined) {
                trademark.style.position = 'sticky'
                trademark.style.position = '-webkit-sticky'
                trademark.style.top = '0'

            }
            if (aside < clientHeight && localtion != null || undefined) {
                formAside.style.position = 'sticky'
                formAside.style.position = '-webkit-sticky'
                formAside.style.top = `${clientHeight}px`

            }
            if (localtionSendans < clientHeight && localtion != null || undefined) {
                titleSedans.style.position = 'sticky'
                titleSedans.style.position = '-webkit-sticky'
                titleSedans.style.top = `${clientHeight}px`

            }
            if (localtionSUV < clientHeight && localtion != null || undefined) {
                titleSUV.style.position = 'sticky'
                titleSUV.style.position = '-webkit-sticky'
                titleSUV.style.top = `${clientHeight}px`

            }
            if (localtionCoupe < clientHeight && localtion != null || undefined) {
                titleCoupe.style.position = 'sticky'
                titleCoupe.style.position = '-webkit-sticky'
                titleCoupe.style.top = `${clientHeight}px`
            }
            if (endEvent < clientHeight - 50) {
                trademark != null || undefined ? trademark.style.position = 'relative' : undefined
                titleSedans != null || undefined ? titleSedans.style.position = 'relative' : undefined
                titleSUV != null || undefined ? titleSUV.style.position = 'relative' : undefined
                titleCoupe != null || undefined ? titleCoupe.style.position = 'relative' : undefined
                titleSedans != null || undefined ? titleSedans.style.top = `${0}px` : undefined
                titleSUV != null || undefined ? titleSUV.style.top = `${0}px` : undefined
                titleCoupe != null || undefined ? titleCoupe.style.top = `${0}px` : undefined
                formAside != null || undefined ? formAside.style.top = `${0}px` : undefined

            }
        }
        if (localTitleMer <= 0) {
            titlemer.style.position = 'sticky'
            titlemer.style.top = '0'
        }
    }

}