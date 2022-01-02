export const setCurrentUser = ( currentUser ) =>({
    type: 'SET_CURRENTUSER',
    payload: currentUser
})

export const finishChecking = () => ({
    type: 'FINISH_CHECKING'
})

export const signOutAuth = () => ({
    type: 'SIGN_OUT_AUTH'
})