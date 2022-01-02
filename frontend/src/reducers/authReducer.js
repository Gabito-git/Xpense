
export const initialState = {
    checking: true,
    currentUser: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENTUSER':
            return{
                ...state,
                currentUser: action.payload
            }

        case 'FINISH_CHECKING':
            return{
                ...state,
                checking: false
            }

        case 'SIGN_OUT_AUTH':
            return{
                ...state,
                checking: false,
                currentUser: null
            }
    
        default:
            return state;
    }
}