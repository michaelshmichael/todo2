import {Category} from './category.js'

const displayCategoryInput = document.getElementById('addCategoryButton')
const submitCategory = document.getElementById('submitCategory')
const categoryInputField = document.getElementById('categoryInputField')
let categoryInputTable = document.querySelector('.categoryInputTable')


displayCategoryInput.addEventListener('click', () => {
    categoryInputTable.classList.remove('categoryInputTable')
    categoryInputTable.classList.add('categoryInputTableActive')
})

submitCategory.addEventListener('click', function(){
    const categoryName = categoryInputField.value
    const newCategory = Category(categoryName, ['example task'])
    newCategory.saveCategory()
    newCategory.renderCategories()
    categoryInputField.value = ''
})

let categories = Array.from(document.getElementsByClassName('newCategory'))
categories.forEach(category => {
    //category.addEventListener('click', displayCategoryHeading)
    //category.addEventListener('click', makeAllCategoriesInactive)
    category.addEventListener('click', Category.setActiveCategory)
})
