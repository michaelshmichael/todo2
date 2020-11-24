import {addListenersForActiveCategory} from './index.js'
import {addListenersForDeletingCategories} from './index.js'

let collection
if (localStorage.getItem('collection')) {
    collection = JSON.parse(localStorage.getItem('collection'))
} else {
    collection = []
}

const Categories = {
    categoryConstructor: function (name) {
        this.name = name;
        this.active = false;
        this.toDos = [];
    },

    addCategoryToArray: function (category) {
        collection.push(category);
        localStorage.setItem('collection', JSON.stringify(collection));
    },

    removeCategoryFromArray: function(category) {
        collection.splice(category, 1)
        localStorage.setItem('collection', JSON.stringify(collection));
        renderCategories()
    },

    setActiveCategory: function (activeCategory, selectedCategoryNumber) {
        collection.forEach(category => {
            if(category.active){category.active = false}
            localStorage.setItem('collection', JSON.stringify(collection))
        })
        let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
        displayedCategories.forEach(category => {
            category.classList.remove('activeCategory')
        })
        activeCategory.classList.add('activeCategory')
        collection[selectedCategoryNumber].active = true
        localStorage.setItem('collection', JSON.stringify(collection));
        console.table(collection)
        //renderTasks()
    },

    renderCategories: function () {
        let counter = 0
        bottomLeftCategoryContainer.textContent = ''
        if(collection){
        collection.forEach(category => {
            let newCategoryContainer = document.createElement('p')
            newCategoryContainer.classList.add('newCategory')
            newCategoryContainer.textContent = category.name
            bottomLeftCategoryContainer.appendChild(newCategoryContainer)
            newCategoryContainer.setAttribute('id', `${counter}`)
            newCategoryContainer.setAttribute('data-index', `${counter}`)
    
            let deleteCategoryIcon = document.createElement('i')
            deleteCategoryIcon.setAttribute('class', 'fa fa-trash deleteCategoryIcon')
            deleteCategoryIcon.setAttribute('data-index', `${counter}`)
            newCategoryContainer.appendChild(deleteCategoryIcon)
            counter ++
        })}
        addListenersForDeletingCategories()
        addListenersForActiveCategory()
    }
}

export {Categories}