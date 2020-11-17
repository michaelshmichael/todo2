import {Category} from './category.js'

const displayCategoryInput = document.getElementById('addCategoryButton')
const submitCategory = document.getElementById('submitCategory')
let categoryInputTable = document.querySelector('.categoryInputTable')


displayCategoryInput.addEventListener('click', () => {
    categoryInputTable.classList.remove('categoryInputTable')
    categoryInputTable.classList.add('categoryInputTableActive')
})

submitCategory.addEventListener('click', function(){
    const categoryName = document.getElementById('categoryInputField').value
    const newCategory = Category(categoryName, 0)
    newCategory.addName()
    newCategory.displayCategory()
})