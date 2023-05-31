import cssHeader from './Header.module.scss'
export function showBarFindSearch() {

    let inputSearch = document.querySelector(`.${cssHeader.form__box_search}`)
    let input = inputSearch.querySelector(`input`)
    inputSearch.style.display = 'block'
    input.focus()
}