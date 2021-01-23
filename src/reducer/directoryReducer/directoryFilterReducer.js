const directoryFilterReducerDefault = {
    text: "",
    number: ""
}

const directoryFilterReducer = (state = directoryFilterReducerDefault, action) => {
    switch (action.type) {
        case "TEXT_FILTER":
            return { ...state, text: action.text }
        case "NUMBER_FILTER":
            return { ...state, number: action.number }
        default:
            return state
    }
}

export default directoryFilterReducer;