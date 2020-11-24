import {Categories} from './Categories.js'

const displayCategoryInput = document.getElementById('addCategoryButton')
const categoryInputField = document.getElementById('categoryInputField')
const submitCategory = document.getElementById('submitCategory')
let categoryInputTable = document.querySelector('.categoryInputTable')

const submitCategoryListeners = () => {

    displayCategoryInput.addEventListener('click', () => {
        categoryInputTable.classList.remove('categoryInputTable')
        categoryInputTable.classList.add('categoryInputTableActive')
    })

    submitCategory.addEventListener('click', () => {
        let newCategoryName = categoryInputField.value
        let newCategory = new Categories.categoryConstructor(newCategoryName)
        Categories.addCategoryToArray(newCategory)
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
        categoryInputField.value = ''
        Categories.renderCategories()
    })
}
submitCategoryListeners()

const editCategoryListeners = () => {
    
    let deleteCategoryIcons = Array.from(document.getElementsByClassName('deleteCategoryIcon'))
    deleteCategoryIcons.forEach(button => {
            button.addEventListener('click', function(e){
                let index = e.target.dataset.index
                Categories.removeCategoryFromArray(index)
            })
    })

    let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
        displayedCategories.forEach(category => {
            category.addEventListener('click', function(e){
                let selectedCategoryNumber = e.target.id
                let activeCategory = displayedCategories[selectedCategoryNumber]
                Categories.setActiveCategory(activeCategory, selectedCategoryNumber)
            })
    })
}

Categories.renderCategories()

export {submitCategoryListeners, editCategoryListeners}







