let categoryCollection = [];
let counter = 0


function Category(name, tasks){
    
    const addName = () => {
        let categoryInputTable = document.querySelector('.categoryInputTableActive')
        categoryCollection.push(name)
        console.log(categoryCollection)
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
    }

    const displayCategory = () => {
        categoryCollection.forEach(category => {
            bottomLeftCategoryContainer.textContent = ''
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
    return{name, tasks, addName, displayCategory}
}

export {Category}