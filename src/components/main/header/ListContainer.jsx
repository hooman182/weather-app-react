import { useRef } from "react"
import DayItem from "./DayItem"
import WeekItem from "./WeekItem"

function ListContainer(props) {
  const { hour } = props.data[0]
  const listElement = useRef(null)

  function dataRender() {
      if (props.type === "week") {
        return props.data.map((item, index) => <WeekItem key={index} data={item} />)
      } else {
        return hour.map((item, index) => <DayItem key={index} data={item} />)
      }
  }

  let isDown = false
  let startX, scrollLeft
  function elemMouseDown(e) {
    isDown = true
    startX = e.pageX - listElement.current.offsetLeft
    scrollLeft = listElement.current.scrollLeft
  }
  function elemMouseUp() {
    isDown = false
  }
  function elemMouseLeave() {
    isDown = false
  }
  function elemMouseMove(e) {
    if (!isDown) return false
    e.preventDefault()
    const x = e.pageX - listElement.current.offsetLeft
    const move = x - startX
    listElement.current.scrollLeft = scrollLeft - move
  }

  return (
    <div
      className="main-header__content-list"
      ref={listElement}
      onMouseDown={elemMouseDown}
      onMouseMove={elemMouseMove}
      onMouseUp={elemMouseUp}
      onMouseLeave={elemMouseLeave}
    >
      { dataRender() }
    </div>
  )
}

export default ListContainer
