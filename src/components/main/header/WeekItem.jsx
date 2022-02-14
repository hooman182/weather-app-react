import { useSelector } from "react-redux"
import { dayNameByDate } from "../../../utils/dateTime"

function WeekItem(props) {
    const temp = useSelector(state => state.temp.tempValue)
    const minTemp = temp === "c" ? props.data.day.mintemp_c : props.data.day.mintemp_f
    const maxTemp = temp === "c" ? props.data.day.maxtemp_c : props.data.day.maxtemp_f
    return (
        <div className="main-header__content-list__item">
            <p className="main-header__content-list__item__title">{dayNameByDate(props.data.date)}</p>
            <img src={props.data.day.condition.icon} alt={props.data.day.condition.text} />
            <div>
                <span>{maxTemp}°</span> 
                <span className="text--secondary">{minTemp}°</span>
            </div>
        </div>
    );
}

export default WeekItem;