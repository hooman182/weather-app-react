import SideBar from "./components/sidebar/TheSideBar"
import MainContent from "./components/main/MainContent"
import { useEffect, useState } from "react"
function App() {
  // const [location, setLocation] = useState({})
  // const [weather, setWeather] = useState({})

  useEffect(() => {

    // axios.get("https://api.weatherapi.com/v1/current.json?key=1db779ded4e849c989a175725221301&q=tehran&aqi=yes")
    //   .then(res => {
    //     setLocation(res.data.location)
    //     setWeather(res.data.current)
    //   })
    //   .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div className="app">
        <SideBar />
        <MainContent />
      </div>
    </>
  )
}

export default App
