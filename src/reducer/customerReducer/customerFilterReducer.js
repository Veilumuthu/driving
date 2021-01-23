const customerFilterReducerDefault = {
    text: "",
    number: "",
    name: ""
}

const customerFilterReducer = (state = customerFilterReducerDefault, action) => {
    switch (action.type) {
        case "TEXT_FILTER":
            return { ...state, text: action.text }
        case "NUMBER_FILTER":
            return { ...state, number: action.number }
        default:
            return state
    }
}

export default customerFilterReducer;