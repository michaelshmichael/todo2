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
    const taskFormTitle = document.getElementById('taskTitleForm')
    const taskInputField = document.getElementById('taskInputField')

    const dueDateForm = document.getElementById('dueDate')
    const notes = document.getElementById('notes')
    // const highPriority = document.getElementById('highPriority')
    // const mediumPriority = document.getElementById('mediumPriority')
    // const lowPriority = document.getElementById('lowPriority')

    // const editInputTableContainer = document.getElementById('editInputTableContainer')
    // const editInputTable = document.querySelector('.editInputTable')
    
    addTaskButton.addEventListener('click', () => {
        let collection = JSON.parse(localStorage.getItem('collection'))
        let nameValue = document.getElementById('taskInputField').value

        let activeCategory = collection.find(category => category.active);
        if (activeCategory == undefined){
            alert('Please Select a Category')
        } else if(!nameValue){
            alert('Please Enter a Value')
        } else if(nameValue){
            inputTableContainer.setAttribute('id', 'inputTableContainerActive')
            inputTable.classList.add('inputTableActive')
            inputTable.classList.remove('inputTable')
            taskFormTitle.innerHTML = `Enter details for ${nameValue}`
            dueDateForm.value = ''
            notes.value = ''
            //Need to set priority at null
        }
    })

    submitButton.addEventListener('click', () => {
        let nameValue = taskInputField.value
        inputTable.classList.remove('inputTableActive')
        inputTable.classList.add('inputTable')
        inputTableContainer.setAttribute('id', 'inputTableContainer')
        Tasks.addTaskToCategory(nameValue)
        taskInputField.value = ''
    })

    cancelButton.addEventListener('click', () => {
        inputTableContainer.setAttribute('id', 'inputTableContainer')
        inputTable.classList.add('inputTable')
        inputTable.classList.remove('inputTableActive')
    })

    editSubmitButton.addEventListener('click', () =>{
        Tasks.editTask()
    })

    // editCancelButton.addEventListener('click', () => {
    //     editInputTableContainer.setAttribute('id', 'editInputTableContainer')
    //     editInputTable.classList.add('editInputTable')
    //     editInputTable.classList.remove('editInputTableActive')
    // })
}

const editTaskListeners = () => {
    
    let deleteTaskButtons = Array.from(document.getElementsByClassName('deleteTaskIcon'))
    deleteTaskButtons.forEach(button => {
        button.addEventListener('click', (e) => {
        Tasks.deleteTask(e)
        })
    })

    const editInputTableContainer = document.getElementById('editInputTableContainer')
    const editInputTable = document.querySelector('.editInputTable')
    const editTaskFormTitle = document.getElementById('editTaskTitleForm')
    const editDueDateForm = document.getElementById('editDueDate')
    const editNotes = document.getElementById('editNotes')
    const editHighPriority = document.getElementById('editHighPriority')
    const editMediumPriority = document.getElementById('editMediumPriority')
    const editLowPriority = document.getElementById('editLowPriority')
    
    let editTaskButtons = Array.from(document.getElementsByClassName('editTaskIcon'))

    editTaskButtons.forEach(button => {
        button.addEventListener('click', (e) =>{
            let editIndex = e.target.dataset.index
            let collection = JSON.parse(localStorage.getItem('collection'))
            let activeCategory = collection.find(category => category.active);
            let task = activeCategory.tasks[editIndex]
            editInputTableContainer.setAttribute('id', 'editInputTableContainerActive')
            editInputTable.classList.add('editInputTableActive')
            editInputTable.classList.remove('editInputTable')
            editTaskFormTitle.textContent = `Edit details for ${task.name}`
            editDueDateForm.value = task.dueDate
            //This needs to be better - gets stuck on High
            if (`${task.priority}` == 1) {
                editHighPriority.setAttribute('checked', 'x')
            } else if (`${task.priority}` == 2) {
                editMediumPriority.setAttribute('checked', 'x')
            } else {
                editLowPriority.setAttribute('checked', 'x')
            }
            editNotes.value = task.notes
            Tasks.deleteTaskAsEdit(editIndex)
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
    const renderAllTasksButton = document.getElementById('allTasksButton')

    orderTaskByImportanceButton.addEventListener('click', function(){
        Tasks.orderTasksByImportance()
    })

    orderTaskByDateButton.addEventListener('click', function(){
        Tasks.orderTasksByDate()
    })

    renderAllTasksButton.addEventListener('click', function(){
        Tasks.renderAllTasks()
    })
   
}

Categories.renderCategories()
Categories.makeAllCategoriesInactive()
orderingTaskListeners()
submitCategoryListeners()
submitTaskListeners()

export {editCategoryListeners, editTaskListeners}







