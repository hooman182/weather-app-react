import { useSelector } from "react-redux"
import { time } from "../../../utils/dateTime"

function DayItem(props) {
  const temp = useSelector(state => state.temp.tempValue)
  const currentTimeClass =  props.data.time.slice(-5, -3) === time.slice(-5, -3) ? "bg--dark" : ""
  const getTemp = temp === "c" ? props.data.temp_c : props.data.temp_f
  return (
    <div className={`${currentTimeClass} main-header__content-list__item`}>
      <p className="main-header__content-list__item__title">
        {props.data.time.slice(-5)}
      </p>
      <img src={props.data.condition.icon} alt={props.data.condition.text} />
      <p className="text--secondary">{getTemp}°</p>
    </div>
  )
}

export default DayItem
