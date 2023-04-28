const base_URL = 'https://northwind.vercel.app/api';

// get all categories
export const getAllCategories = async () => {
    let globalData;
    await fetch(`${base_URL}/categories`)
        .then(resp => resp.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
}


// categories by ID
export const getCategoriesByID = async (id) => {
    let globalData;
    await fetch(`${base_URL}/categories/${id}`)
        .then(resp => resp.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
};

// delete category by ID
export const deleteCategoryByID = async (id) => {
    let globalData;
    await fetch(`${base_URL}/categories/${id}`, {
        method: 'DELETE'
    })
};


// post category
export const postCategory = async () => {
    await fetch(`${base_URL}/categories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    })
}

// put category by ID
export const editCAtegoryByID = async (id, category) => {
    await fetch(`${base_URL}/categories/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    })
}