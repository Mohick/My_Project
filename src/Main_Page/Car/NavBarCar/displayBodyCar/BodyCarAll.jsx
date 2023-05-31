
export function showAll() {
    let bodyCarSedans = document.querySelector('.js__body-car-sedans')
    let bodyCarSUV = document.querySelector('.js__body-car-suv')
    let bodyCarCoupe = document.querySelector('.js__body-car-coupe')
    let bodyCarAll = document.querySelector('.js__body-car-all')

    

    let svgSedans = bodyCarSedans.querySelector('svg')
    let h3Sedans = bodyCarSedans.querySelector('h3')
    svgSedans.style.fill = '#bbb'
    h3Sedans.style.color = '#bbb'
    h3Sedans.style.fontWeight='500'

    let svgSUV = bodyCarSUV.querySelector('svg')
    let h3SUV = bodyCarSUV.querySelector('h3')
    svgSUV.style.fill = '#bbb'
    h3SUV.style.color = '#bbb'
    h3SUV.style.fontWeight='500'

    let svgCoupe = bodyCarCoupe.querySelector('svg')
    let h3Coupe = bodyCarCoupe.querySelector('h3')
    svgCoupe.style.fill = '#bbb'
    h3Coupe.style.color = '#bbb'
    h3Coupe.style.fontWeight='500'

    let h3All = bodyCarAll.querySelector('h3')
    h3All.style.color = '#000'
    h3All.style.fontWeight='700'


    let itemsBodyCarSedans = document.querySelector('.js__display-Sendans')
    itemsBodyCarSedans.style.display = 'block'
    let itemsBodyCarSUV = document.querySelector('.js__display-SUV')
    itemsBodyCarSUV.style.display = 'block'
    let itemsBodyCarCoupe = document.querySelector('.js__display-Coupe')
    itemsBodyCarCoupe.style.display = 'block'

    bodyCarSedans.onmouseover = (() => {
        svgSedans.style.fill = '#008dfc'
        h3Sedans.style.color = '#008dfc'
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
        h3All.style.color = '#000'
    })
    bodyCarSedans.onmouseout = (() => {
        svgSedans.style.fill = '#bbb'
        h3Sedans.style.color = '#bbb'
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
        h3All.style.color = '#000'
    })
}