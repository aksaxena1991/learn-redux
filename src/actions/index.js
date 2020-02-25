export const increment = (val) => {
    return {
        type: 'INCREMENT',
        payload: val
    }
}
export const decrement = (val) => {
    return {
        type: 'DECREMENT',
        payload: val
    }
}
export const signin = () => {
    return {
        type: 'SIGNIN'
    }
}
export const signout = () => {
    return {
        type: 'SIGNOUT'
    }
}