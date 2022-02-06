import { useSelector } from "react-redux"
import { getDayName, time } from "../../utils/dateTime"

function SidebarBody(props) {
    const temp = useSelector(state => state.temp.tempValue)
    const getTemp = temp === "c" ? props.data.temp_c : props.data.temp_f
    return (
        <>
            <div className="sidebar-body">
                <div>
                    <img src={props.data.condition.icon} className="sidebar-body__icon" />
                    <p className="sidebar-body__title"><span>{getTemp}</span><sup>°{temp}</sup></p>
                </div>
                <p className="sidebar-body__text">{props.data.condition.text}</p>
                <p className="sidebar-body__text">
                    {getDayName()}, <span className="text-secondary">{time}</span>
                </p>
            </div>
        </>
    )
}

export default SidebarBody