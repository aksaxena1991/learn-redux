const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGNIN': 
        return !state;
        case 'SIGNOUT': 
        return state= false;
        default: 
        return state;
    }
}
export default loggedReducer;