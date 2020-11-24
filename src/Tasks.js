 
const Tasks = {
    taskConstructor: function (name, comment, priority) {
        this.name = name;
        this.comment = comment;
        this.priority = priority;
        this.status = false;
    },
 
    addTaskDoToCategory: function (category, task) {
            category.tasks.push(task);
        },
}
  