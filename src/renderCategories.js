import {addListeners} from './index.js'

const renderCategories = () => {
    let counter = 0
    let collection = JSON.parse(localStorage.getItem('collection'))
    bottomLeftCategoryContainer.textContent = ''
    if(collection){
    collection.forEach(category => {
        let newCategoryContainer = document.createElement('p')
        newCategoryContainer.classList.add('newCategory')
        newCategoryContainer.textContent = category.name
        bottomLeftCategoryContainer.appendChild(newCategoryContainer)
        newCategoryContainer.setAttribute('id', `${counter}`)
        newCategoryContainer.setAttribute('data-index', `${counter}`)

        let deleteCategoryIcon = document.createElement('i')
        deleteCategoryIcon.setAttribute('class', 'fa fa-trash deleteCategoryIcon')
        deleteCategoryIcon.setAttribute('data-index', `${counter}`)
        newCategoryContainer.appendChild(deleteCategoryIcon)
        counter ++
    })}
    addListeners()
}

export {renderCategories}