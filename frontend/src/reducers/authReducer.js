
export const initialState = {
    currentUser: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENTUSER':
            return{
                ...state,
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}