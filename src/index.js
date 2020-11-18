import {createCategory} from './category.js'
import {renderCategories} from './renderCategories.js'

const displayCategoryInput = document.getElementById('addCategoryButton')
const submitCategory = document.getElementById('submitCategory')
const categoryInputField = document.getElementById('categoryInputField')
let categoryInputTable = document.querySelector('.categoryInputTable')
let collection = JSON.parse(localStorage.getItem('collection'))


const addListeners = () => {
displayCategoryInput.addEventListener('click', () => {
    categoryInputTable.classList.remove('categoryInputTable')
    categoryInputTable.classList.add('categoryInputTableActive')
})

submitCategory.addEventListener('click', function(){
    const categoryName = categoryInputField.value
    let newCategory = createCategory(categoryName, ['example task'], false)
    newCategory.saveCategory()
    console.table(collection)
    categoryInputField.value = ''
    renderCategories()
})

let deleteCategoryIcons = Array.from(document.getElementsByClassName('deleteCategoryIcon'))
    deleteCategoryIcons.forEach(button => {
        button.addEventListener('click', function(e){
            collection = JSON.parse(localStorage.getItem('collection'))
            let index = e.target.dataset.index
            collection.splice(index, 1)
            localStorage.setItem('collection', JSON.stringify(collection))
            renderCategories()
        })
  })
}
addListeners()
renderCategories()
export {addListeners}






