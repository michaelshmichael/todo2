import {editTaskListeners} from './index.js'
import {formatDistance} from 'date-fns'
import parseISO from 'date-fns/parseISO'

const Tasks = {
    
    taskConstructor: function (name, dueDate, priority, notes) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = false;
    },
 
    addTaskToCategory: function (nameValue) {
        let collection = JSON.parse(localStorage.getItem('collection'))
        let activeCategory = collection.find(category => category.active)
        let dueDateValue = document.getElementById('dueDate').value
        let priorityValue
        //Change this so there is a while loop checking it isn't empty
        if (document.getElementById('highPriority').checked) {
                priorityValue = 1
            } else if (document.getElementById('mediumPriority').checked) {
                priorityValue = 2
            } else if (document.getElementById('lowPriority').checked){
                priorityValue = 3
            } else {
                alert('Please Select a Priority Level')
        }
        let notesValue = document.getElementById('notes').value
        let newTask = new Tasks.taskConstructor (nameValue, dueDateValue, priorityValue, notesValue)
        activeCategory.tasks.push(newTask)
        
        localStorage.setItem('collection', JSON.stringify(collection));
        Tasks.renderTasks()
    },

    editTask: function(){
        let editInputTable = document.querySelector('.editInputTableActive')
        let editInputTableContainer = document.getElementById('editInputTableContainerActive')
        let editTaskFormTitle = document.getElementById('editTaskTitleForm')
        editInputTable.classList.remove('editInputTableActive')
        editInputTable.classList.add('editInputTable')
        editInputTableContainer.setAttribute('id', 'editInputTableContainer')
        

        let nameValueInit = editTaskFormTitle.textContent
        let nameArray = nameValueInit.split('')
        nameArray.splice(0, 17)
        let nameValue = nameArray.join('')
        let collection = JSON.parse(localStorage.getItem('collection'))
        let activeCategory = collection.find(category => category.active)
        let dueDateValue = document.getElementById('editDueDate').value
        let priorityValue
        if (document.getElementById('editHighPriority').checked) {
                priorityValue = 1
            } else if (document.getElementById('editMediumPriority').checked) {
                priorityValue = 2
            } else if (document.getElementById('editLowPriority').checked){
                priorityValue = 3
            } else {
                alert('Please Select a Priority Level')
        }
        let notesValue = document.getElementById('editNotes').value
        let newTask = new Tasks.taskConstructor (nameValue, dueDateValue, priorityValue, notesValue)
        activeCategory.tasks.push(newTask)
        
        localStorage.setItem('collection', JSON.stringify(collection));
        Tasks.renderTasks()
    },

    deleteTask: function(e) {
    let collection = JSON.parse(localStorage.getItem('collection'))
    let activeCategory = collection.find(element => element.active === true);
    if (confirm("Delete Task?")) { 
        let index = e.target.dataset.index
        activeCategory.tasks.splice(index, 1)
        localStorage.setItem('collection', JSON.stringify(collection));
        Tasks.renderTasks()
        }
    },

    deleteTaskAsEdit: function(e) {
        console.log('delete')
        let collection = JSON.parse(localStorage.getItem('collection'))
        let activeCategory = collection.find(element => element.active === true);
        let index = e.target.dataset.index
        activeCategory.tasks.splice(index, 1)
        localStorage.setItem('collection', JSON.stringify(collection));
    },

    renderTasks: function() {
        let collection = JSON.parse(localStorage.getItem('collection'))
        let counter = 0
        document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
        document.querySelectorAll('.completedTasksDisplay').forEach(e => e.remove());
        let activeCategory = collection.find(element => element.active);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.forEach(task => {
            let tasksDisplay = document.createElement('div');
            task.status ? tasksDisplay.setAttribute('class', 'completedTasksDisplay') : tasksDisplay.setAttribute('class', 'tasksDisplay')
            
            let taskInfoContainer = document.createElement('div')
            taskInfoContainer.setAttribute('class', 'taskInfoContainer')
            bottomRightContainer.appendChild(tasksDisplay)
            let priorityIndicator = document.createElement('div')

                if(task.priority === 1){
                    priorityIndicator.classList.add('highPriorityIndicator')
                } else if (task.priority === 2){
                    priorityIndicator.classList.add('mediumPriorityIndicator')
                } else if (task.priority === 3){
                    priorityIndicator.classList.add('lowPriorityIndicator')
                }

            let taskNameAndDueDateContainer = document.createElement('div')
            taskNameAndDueDateContainer.setAttribute('class', 'taskNameAndDueDateContainer')

            let taskName = document.createElement('div')
            taskName.setAttribute('class', 'taskName')
            taskName.textContent = `${task.name}`

            let dueDate = document.createElement('div')
            dueDate.setAttribute('class', 'dueDate')
            if (task.dueDate){
                let styledDate = formatDistance(parseISO(task.dueDate), new Date())
                dueDate.textContent = `Due in ${styledDate}`
            } else {
                dueDate.textContent = 'No due date'
            }

            let notesContainer = document.createElement('div')
            notesContainer.setAttribute('class', 'notesContainer')

            let notesHeading = document.createElement('div')
            notesHeading.setAttribute('class', 'notesHeading')
            notesHeading.textContent = 'Notes'

            let notesContent = document.createElement('div')
            notesContent.setAttribute('class', 'notesContent')
            notesContent.textContent = `${task.notes}`

            tasksDisplay.appendChild(priorityIndicator)
            tasksDisplay.appendChild(taskInfoContainer)
            taskInfoContainer.appendChild(taskNameAndDueDateContainer)
            taskNameAndDueDateContainer.appendChild(taskName)
            taskNameAndDueDateContainer.appendChild(dueDate)
            taskInfoContainer.appendChild(notesContainer)
            notesContainer.appendChild(notesHeading)
            notesContainer.appendChild(notesContent)
            
            let deleteEditAndCheckContainer = document.createElement('div')
            deleteEditAndCheckContainer.setAttribute('class', 'deleteEditAndCheckContainer')
            taskInfoContainer.appendChild(deleteEditAndCheckContainer)

            let deleteTaskIcon = document.createElement('i')
            deleteTaskIcon.setAttribute('class', 'fa fa-trash deleteTaskIcon')
            deleteTaskIcon.setAttribute('data-index', `${counter}`)
            deleteEditAndCheckContainer.appendChild(deleteTaskIcon)
            
            let editTaskIcon = document.createElement('i')
            editTaskIcon.setAttribute('class', 'fa fa-edit editTaskIcon')
            editTaskIcon.setAttribute('data-index', `${counter}`)
            deleteEditAndCheckContainer.appendChild(editTaskIcon)
            
            let checkboxComplete = document.createElement('i')
            checkboxComplete.setAttribute('class', 'fa fa-check-circle checkboxComplete')
            checkboxComplete.setAttribute('data-index', `${counter}`)
            
            deleteEditAndCheckContainer.appendChild(checkboxComplete)
            counter++
            })
        counter = 0
        editTaskListeners()
    },

    setTaskAsComplete: function(e) {
        let collection = JSON.parse(localStorage.getItem('collection'))
        let checkboxNumber = e.target.dataset.index
        let activeCategory = collection.find(element => element.active);
        let completedTask = activeCategory.tasks[checkboxNumber]
        completedTask.status ? completedTask.status = false : completedTask.status = true
        localStorage.setItem('collection', JSON.stringify(collection)); 
        Tasks.renderTasks()  
    },
    
    orderTasksByDate: function() {
        let collection = JSON.parse(localStorage.getItem('collection'))
        let activeCategory = collection.find(element => element.active);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.sort(function(a,b){
            return a.dueDate > b.dueDate ? 1 : a.dueDate < b.dueDate ? -1 : 0;
        })
        localStorage.setItem('collection', JSON.stringify(collection));
        Tasks.renderTasks()
    },

    orderTasksByImportance: function() {
        let collection = JSON.parse(localStorage.getItem('collection'))
        let activeCategory = collection.find(element => element.active);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.sort(function(a,b){ 
            return a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0;
        })
        localStorage.setItem('collection', JSON.stringify(collection)); 
        Tasks.renderTasks()  
    },

}

export {Tasks}
  