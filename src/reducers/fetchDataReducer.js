const fetchDataReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return action.payload
        case "SEARCH_DATA":
            return action.payload
        default:
            return state
    }
}

export default fetchDataReducer