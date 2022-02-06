import SideBar from "./components/sidebar/TheSideBar"
import MainContent from "./components/main/MainContent"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchData } from "./actions"

function App() {
  const dispatch = useDispatch()

  useEffect(async () => {
    // dispatch(fetchData())
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
