const setActiveCategory = (e) => {
    let collection = JSON.parse(localStorage.getItem('collection'))
    let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
    displayedCategories.forEach(category => {
        category.classList.remove('activeCategory')
    })
    let selectedCategoryNumber = e.target.id
    let activeCategory = displayedCategories[selectedCategoryNumber]
    activeCategory.classList.add('activeCategory')
    collection[selectedCategoryNumber].active = true
    localStorage.setItem('collection', JSON.stringify(collection));
}

export {setActiveCategory}