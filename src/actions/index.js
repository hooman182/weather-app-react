import { weatherApi, ipApi } from "../services/index"

const fetchData = () => async dispatch => {
    const data = await weatherApi("London")
    dispatch({
        type: "FETCH_DATA",
        payload: data
    })
}

const searchData = (value) => async dispatch => {
    const data = await weatherApi(value)
    dispatch({
        type: "SEARCH_DATA",
        payload: data
    })
}

const tempValue = (value) => ({
    type: "TEMPERATURE_VALUE",
    payload: value
})

export { fetchData, searchData, tempValue }