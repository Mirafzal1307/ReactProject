import { categoryConstants } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: null
};

const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];

    for (let cat of categories) {

        if ( cat._id === parentId) {
            myCategories.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, [...cat.children, {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children
                }], category) : []
            })
        } else {

            myCategories.push({
                ...cat,
                children: cat.children && cat.children.length > 0 ? buildNewCategories(parentId, cat.children, category) : []
            })
        }
    }

    return myCategories;
}

export default (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_SECCESS:

            state = {
                ...state,
                categories: action.payload.categories
            }
            break

        case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break
        case categoryConstants.ADD_NEW_CATEGORY_SECCESS:
            const category = action.payload.category;

            const updateCategories = buildNewCategories(category.parentId, state.categories, category)
            console.log ( 'updated categories' , updateCategories)
            state = {
                ...state,
                categories: updateCategories,
                loading: false
            }
            break

        case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState

            }
    }

    return state;


}