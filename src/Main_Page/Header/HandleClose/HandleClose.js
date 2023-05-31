
export function handleOnClick() {
    let input = document.querySelector('.js__search')
    let close = document.querySelector('.js-close')

    if (close) {
        input.focus()
        input.value = ''
        close.style.display = 'none'
    }
}