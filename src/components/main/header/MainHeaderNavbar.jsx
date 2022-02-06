import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tempValue } from "../../../actions";

function MainHeaderNavbar(props) {
    const [tabValue, setTabValue] = useState("week")
    const dispatch = useDispatch()
    const temp = useSelector(state => state.temp.tempValue)
    function tabClick(e) {
        setTabValue(e.target.id)
        props.getTabValue(e.target.id)
    }
    function tempChangeHandle(e) {
        dispatch(tempValue(e.target.id))
    }
    const listItemClass = value => temp === value ? "item--rounded" : ""
    const tabItemClass = value => tabValue === value ? "item--border" : "text--secondary"
    return (
        <div className="main-header__nav">
            <ul className="main-header__lists">
                <li onClick={tabClick} id="today" className={tabItemClass("today")}>
                    Today
                </li>
                <li onClick={tabClick} id="week" className={tabItemClass("week")}>
                    Week
                </li>
            </ul>
            <ul className="main-header__lists">
                <li onClick={tempChangeHandle} id="c" className={listItemClass("c")}>°C</li>
                <li onClick={tempChangeHandle} id="f" className={listItemClass("f")}>°F</li>
            </ul>
        </div>
    )
}

export default MainHeaderNavbar