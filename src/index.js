import {constructor} from './constructor.js'

const displayCategoryInput = document.getElementById('addCategoryButton')
const categoryInputField = document.getElementById('categoryInputField')
const submitCategory = document.getElementById('submitCategory')
let categoryInputTable = document.querySelector('.categoryInputTable')

const addListenersToAddCategory = () => {
    displayCategoryInput.addEventListener('click', () => {
        categoryInputTable.classList.remove('categoryInputTable')
        categoryInputTable.classList.add('categoryInputTableActive')
    })

    submitCategory.addEventListener('click', () => {
        let newCategoryName = categoryInputField.value
        let newCategory = new constructor.categoryConstructor(newCategoryName)
        constructor.addCategoryToArray(newCategory)
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
        categoryInputField.value = ''
        renderCategories()
    })
}
addListenersToAddCategory()

const addListenersForDeletingCategories = () => {
    let deleteCategoryIcons = Array.from(document.getElementsByClassName('deleteCategoryIcon'))
    deleteCategoryIcons.forEach(button => {
            button.addEventListener('click', function(e){
                let index = e.target.dataset.index
                constructor.removeCategoryFromArray(index)
            })
    })
}

const renderCategories = () => {
    let collection = JSON.parse(localStorage.getItem('collection'))
    let counter = 0
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
    addListenersForDeletingCategories()
}
renderCategories()

export {renderCategories}







