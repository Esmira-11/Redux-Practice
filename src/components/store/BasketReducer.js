export default function BasketReducer(state, action) {

    if (state == undefined)
        return []
    if (action.type == 'ADD_TO_BASKETS') {
        return [...state, action.payload]
    }
    else if (action.type == 'REMOVE_FROM_BASKETS') {
        let filteredBaskets = state.filter(q => q.id != action.payload);

        return [...filteredBaskets];
    }
    else if (action.type == 'EMPTY') {
        return []
    }
    else {
        return state;
    }

}