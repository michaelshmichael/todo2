import {Categories} from './Categories.js'
import {Tasks} from './Tasks.js'

const submitCategoryListeners = () => {
    const displayCategoryInput = document.getElementById('addCategoryButton')
    const categoryInputField = document.getElementById('categoryInputField')
    const submitCategory = document.getElementById('submitCategory')
    let categoryInputTable = document.querySelector('.categoryInputTable')

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
                Categories.displayCategoryHeading(selectedCategoryNumber)
            })
    })
}

const submitTaskListeners = () => {
    const addTaskButton = document.getElementById('addTaskButton')
    const inputTableContainer = document.getElementById('inputTableContainer')
    const inputTable = document.querySelector('.inputTable')
    
    addTaskButton.addEventListener('click', () => {
        inputTableContainer.setAttribute('id', 'inputTableContainerActive')
        inputTable.classList.add('inputTableActive')
        inputTable.classList.remove('inputTable')
    })

    submitButton.addEventListener('click', () => {
        inputTable.classList.toggle('inputTableActive')
        inputTableContainer.setAttribute('id', 'inputTableContainer')
        Tasks.addTaskToCategory()
    })

    cancelButton.addEventListener('click', () => {
        inputTableContainer.setAttribute('id', 'inputTableContainer')
        inputTable.classList.add('inputTable')
        inputTable.classList.remove('inputTableActive')
    })

   
}

const editTaskListeners = () => {
    let deleteTaskButtons = Array.from(document.getElementsByClassName('deleteTaskIcon'))
    deleteTaskButtons.forEach(button => {
        button.addEventListener('click', (e) => {
        Tasks.deleteTask(e)
        })
    })

    let completedTaskButtons = Array.from(document.getElementsByClassName('checkboxComplete'));
    completedTaskButtons.forEach(button => {
        button.addEventListener('click', function(e){
            Tasks.setTaskAsComplete(e)
        })
    })
}

const orderingTaskListeners = () => {
    const orderTaskByImportanceButton = document.getElementById('importanceButton')
    const orderTaskByDateButton = document.getElementById('dateButton')

    orderTaskByImportanceButton.addEventListener('click', function(){
        Tasks.orderTasksByImportance()
    })
    orderTaskByDateButton.addEventListener('click', function(){
        Tasks.orderTasksByDate()
    })
   
}

Categories.renderCategories()
submitCategoryListeners()
submitTaskListeners()

export {editCategoryListeners, editTaskListeners, orderingTaskListeners}







