let categoryCollection = [];

function Category(name, tasks){
    
    const saveCategory = () => {
        let categoryInputTable = document.querySelector('.categoryInputTableActive')
        categoryCollection.push({name, tasks})
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
        console.log(categoryCollection)
    }

    const renderCategories = () => {
        let counter = 0
        bottomLeftCategoryContainer.textContent = ''
        categoryCollection.forEach(category => {
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
        })
        
    }

    const setActiveCategory = (e) => {
        let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
        displayedCategories.forEach(category => {
            category.classList.remove('activeCategory')
        })
        let selectedCategoryNumber = e.target.id
        let activeCategory = displayedCategories[selectedCategoryNumber]
        activeCategory.classList.add('activeCategory')
        categoryCollection[selectedCategoryNumber].active = true
    }
    //const setActiveCategory
    //const makeAllCategoriesInactive
    //const displayCategoryHeader

    return{name, tasks, saveCategory, renderCategories, setActiveCategory}
}

export {Category}