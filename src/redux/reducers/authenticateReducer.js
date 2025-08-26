let initialState = {
    id: '',
    password: '',
    authenticate: false
}

function authenticateReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "LOGIN_SUCCESS":
            console.log("sss")
            return { ...state, id: payload.id, password: payload.password, authenticate: true }
        default:
            return { ...state }
    }
}

export default authenticateReducer