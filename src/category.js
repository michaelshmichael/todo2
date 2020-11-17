let categoryCollection = [];
function Category(name, tasks){
    
    const saveCategory = () => {
        let categoryInputTable = document.querySelector('.categoryInputTableActive')
        categoryCollection.push(name)
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
    }

    const displayCategory = () => {
        let counter = 0
        bottomLeftCategoryContainer.textContent = ''
        categoryCollection.forEach(category => {
            let newCategoryContainer = document.createElement('p')
            newCategoryContainer.classList.add('newCategory')
            newCategoryContainer.textContent = category
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
    return{name, tasks, saveCategory, displayCategory}
}

export {Category}