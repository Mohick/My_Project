

export function findCarMer() {
    let showAll = document.querySelector('.js-showAll')
    let showMer = document.querySelector('.js-showMer')
    let showAMG = document.querySelector('.js-showAMG')
    let showMB = document.querySelector('.js-showMB')
    let bodyCarSedans = document.querySelector('.js__body-car-sedans')
    let bodyCarSUV = document.querySelector('.js__body-car-suv')
    let bodyCarCoupe = document.querySelector('.js__body-car-coupe')
    let bodyCarAll = document.querySelector('.js__body-car-all')
    let checkbox = document.querySelector('.js__checkbox')
    let bannedCheckbox = checkbox.querySelector('.rmCheckBox')
    bannedCheckbox.style.display = 'none'


    bodyCarSedans.style.display = 'flex'
    bodyCarSUV.style.display = 'none'
    bodyCarCoupe.style.display = 'none'

    let span = checkbox.querySelector('span')
    let input = checkbox.querySelector('input')
    input.style.cursor = 'pointer'
    input.style.border = '0.1rem solid #acacac'
    span.style.color = '#000'

    let svgSedans = bodyCarSedans.querySelector('svg')
    let h3Sedans = bodyCarSedans.querySelector('h3')
    svgSedans.style.fill = '#000'
    h3Sedans.style.color = '#000'
    h3Sedans.style.fontWeight = '700'

    let svgSUV = bodyCarSUV.querySelector('svg')
    let h3SUV = bodyCarSUV.querySelector('h3')
    svgSUV.style.fill = '#bbb'
    h3SUV.style.fontWeight = '500'
    h3SUV.style.color = '#bbb'
    let svgCoupe = bodyCarCoupe.querySelector('svg')
    let h3Coupe = bodyCarCoupe.querySelector('h3')
    svgCoupe.style.fill = '#bbb'
    h3Coupe.style.fontWeight = '500'
    h3Coupe.style.color = '#bbb'
    let h3All = bodyCarAll.querySelector('h3')
    h3All.style.color = '#bbb'

    let itemsBodyCarSedans = document.querySelector('.js__display-Sendans')
    itemsBodyCarSedans.style.display = 'block'
    let itemsBodyCarSUV = document.querySelector('.js__display-SUV')
    itemsBodyCarSUV.style.display = 'none'
    let itemsBodyCarCoupe = document.querySelector('.js__display-Coupe')
    itemsBodyCarCoupe.style.display = 'none'

    let svgMer = showMer.querySelector("svg")
    let svgAMG = showAMG.querySelector("svg")
    let svgMB = showMB.querySelector("svg")

    showMer.style.background = "#333"
    showAMG.style.background = "#fff"
    showMB.style.background = "#fff"
    showAll.style.background = "#fff"


    showAll.style.color = "#000"
    svgAMG.style.fill = "#000"
    svgMer.style.fill = "#fff"
    svgMB.style.fill = "#000"

    h3SUV.style.fontWeight = '500'
    h3Coupe.style.fontWeight = '500'
    h3All.style.fontWeight = '500'


    bodyCarSedans.onmouseover = (() => {
        svgSedans.style.fill = '#000'
        h3Sedans.style.color = '#000'
    })
    bodyCarSUV.onmouseover = (() => {
        svgSUV.style.fill = '#008dfc'
        h3SUV.style.color = '#008dfc'
    })
    bodyCarCoupe.onmouseover = (() => {
        svgCoupe.style.fill = '#008dfc'
        h3Coupe.style.color = '#008dfc'
    })
    bodyCarAll.onmouseover = (() => {
        h3All.style.color = '#008dfc'
    })
    bodyCarSedans.onmouseout = (() => {
        svgSedans.style.fill = '#000'
        h3Sedans.style.color = '#000'
    })
    bodyCarSUV.onmouseout = (() => {
        svgSUV.style.fill = '#bbb'
        h3SUV.style.color = '#bbb'
    })
    bodyCarCoupe.onmouseout = (() => {
        svgCoupe.style.fill = '#bbb'
        h3Coupe.style.color = '#bbb'
    })
    bodyCarAll.onmouseout = (() => {
        h3All.style.color = '#bbb'
    })
}


