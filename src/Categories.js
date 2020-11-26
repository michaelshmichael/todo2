import {editCategoryListeners} from './index.js'
import {Tasks} from './Tasks.js'

const Categories = {

    categoryConstructor: function (name) {
        this.name = name;
        this.active = false;
        this.tasks = [];
    },

    addCategoryToArray: function (category) {
        let collection
        if (localStorage.getItem('collection')) {
            collection = JSON.parse(localStorage.getItem('collection'))
        } else {
            collection = []
        }
        collection.push(category);
        localStorage.setItem('collection', JSON.stringify(collection));
    },

    removeCategoryFromArray: function(category) {
        let collection = JSON.parse(localStorage.getItem('collection'))
        collection.splice(category, 1)
        localStorage.setItem('collection', JSON.stringify(collection));
        Categories.renderCategories()
    },

    setActiveCategory: function (activeCategory, selectedCategoryNumber) {
        Categories.makeAllCategoriesInactive()
        let collection = JSON.parse(localStorage.getItem('collection'))
        let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
        displayedCategories.forEach(category => {
            category.classList.remove('activeCategory')
        })
        activeCategory.classList.add('activeCategory')
        collection[selectedCategoryNumber].active = true
        localStorage.setItem('collection', JSON.stringify(collection));
        console.table(collection)
        Tasks.renderTasks()
    },

    makeAllCategoriesInactive: function(){
        let collection = JSON.parse(localStorage.getItem('collection'))
        collection.forEach(category => {
            if(category.active){category.active = false}
            localStorage.setItem('collection', JSON.stringify(collection))
        })
    },

    displayCategoryHeading: function(selectedCategoryNumber) {
        let collection = JSON.parse(localStorage.getItem('collection'))
        topRightContainer.textContent = '';
        let selectedCategory = collection[selectedCategoryNumber]
        let categoryDisplay = document.createElement('h1')
        categoryDisplay.textContent = selectedCategory.name
        categoryDisplay.setAttribute('id', 'categoryHeading')
        topRightContainer.appendChild(categoryDisplay);
    },

    renderCategories: function () {
        let collection = JSON.parse(localStorage.getItem('collection'))
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
        editCategoryListeners()
    }
}

export {Categories}