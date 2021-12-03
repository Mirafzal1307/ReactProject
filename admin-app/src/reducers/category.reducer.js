import { categoryConstants } from "../actions/constants";

const initState = {
    categories: [],
    loading: false,
    error: null
};

const buildNewCategories = (categories, category) => {
    let myCategories = [];

    for (let cat of categories) {
        myCategories.push({
            ...cat,
            children: cat.children && cat.children.length > 0 ? buildNewCategories(cat.children, category) : []
        })
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
            const updateCategories = buildNewCategories(state.categories, action.payload.category)
            console.log(updateCategories)
            state = {
                ...state,
                categories: buildNewCategories(state.categories, action.payload.category),
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