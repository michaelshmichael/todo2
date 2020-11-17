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
    const newCategory = Category(categoryName, [])
    newCategory.saveCategory()
    newCategory.displayCategory()
    categoryInputField.value = ''
})
