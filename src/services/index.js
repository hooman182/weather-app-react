import axios from "axios"

async function ipApi() {
    try {
        const { data } = await axios
            .get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IP_API_KEY}`)
        return data
    } catch (error) {
        throw `We have some problems here! \n ${error}`
    }
}

async function weatherApi(value = "london") {
    try {
        const { data } = await axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_Weather_API_KEY}&q=${value}&days=7&aqi=no&alerts=no`)
        return data
    } catch (error) {
        throw `We have some problems here! \n ${error}`
    }
}

export { ipApi, weatherApi }