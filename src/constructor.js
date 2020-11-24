import {renderCategories} from './index.js'

let collection;
if (localStorage.getItem('collection')) {
    collection = JSON.parse(localStorage.getItem('collection'))
} else {
    collection = []
}
const constructor = {

    categoryConstructor: function (name) {
        this.name = name;
        this.active = false;
        this.toDos = [];
    },

    // toDoConstructor: function (name, comment, priority) {
    //     this.name = name;
    //     this.comment = comment;
    //     this.priority = priority;
    //     this.status = false;
  
    // },

    addCategoryToArray: function (category) {
        collection.push(category);
        localStorage.setItem('collection', JSON.stringify(collection));
    },

    removeCategoryFromArray: function(category) {
        collection.splice(category, 1)
        localStorage.setItem('collection', JSON.stringify(collection));
        renderCategories()
    }

    // addToDoToCategory: function (category, toDo) {
    //     category.toDos.push(toDo);
    // },
}


  export {constructor}