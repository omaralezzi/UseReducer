export const arrayReducer = (state, {type, payload}) => {
    switch(type) {
        case 'ADD':
            return [...state, payload]
        default:
            return state
    }
}

