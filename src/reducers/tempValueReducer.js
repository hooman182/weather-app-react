const initialState = {
    tempValue: "c"
}
const tempValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TEMPERATURE_VALUE":
            return { tempValue: action.payload }
        default:
            return state
    }
}

export default tempValueReducer