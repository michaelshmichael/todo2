

const Tasks = {
    taskConstructor: function (name, dueDate, priority, notes) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = false;
    },
 
    addTaskToCategory: function () {
        let collection = JSON.parse(localStorage.getItem('collection'))
        let activeCategory = collection.find(category => category.active);
        let nameValue = document.getElementById('taskInputField').value
        let dueDateValue = document.getElementById('dueDate').value
        let priorityValue
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
        console.log(newTask)
        console.log(activeCategory)
        },
}

export {Tasks}
  