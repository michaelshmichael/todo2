function createCategory(name, tasks, active){
    let collection
        if (localStorage.getItem('collection')) {
            collection = JSON.parse(localStorage.getItem('collection'))
        } else {
            collection = []
        }
    
    const saveCategory = () => {
        let categoryInputTable = document.querySelector('.categoryInputTableActive')
        collection.push({name, tasks, active})
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
        localStorage.setItem('collection', JSON.stringify(collection));
        console.table(collection)
    }

    const deleteCategory = () => {
        return console.log('deleted')
        // let index = e.target.dataset.index
        // collection.splice(index,1)
        // console.table(collection)
    }
    return{name, tasks, active, saveCategory, deleteCategory}
}

export {createCategory}