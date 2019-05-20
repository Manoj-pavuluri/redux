const intial = {
    visible: false,
    version: '',
    alert: false,
    chooseQuestion: false
}

const PostReducers = (state = intial, action) => {
    switch (action.type) {
        case "OPEN_MODEL":
            return {
                ...state,
                visible: true
            }
        case "ClOSE_MODEL":
            return {
                ...state,
                visible: false
            }
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                version: action.payload.version
            }
        case "HANDLE_SUBMIT":
            return {
                ...state,
                visible: false,
                alert: true,
                version: ''
            }
        case "CHOOSE_QUESTION":
            return {
                ...state,
                chooseQuestion: true
            }
        default:
            return state;
    }
}
export default PostReducers;