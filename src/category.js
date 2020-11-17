function Category(name, tasks){
    const deleteCategory = () => {
        console.log(`Deleted ${name}`)
    }
    return{name, tasks, deleteCategory}
}

export {Category}