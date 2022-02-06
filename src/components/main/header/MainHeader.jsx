import { useState } from "react"
import HeaderItem from "./HeaderItem"
import ListContainer from "./ListItem"
import MainHeaderNavbar from "./MainHeaderNavbar"

function MainHeader(props) {
    const [tabValue, setTabValue] = useState("week")
    const forecast = props.data.forecastday

    function tabClick(value) {
        setTabValue(value)
    }

    return (
        <section className="main-header">
            <MainHeaderNavbar getTabValue={tabClick} />
            <div className="main-header__content">
                {
                    tabValue === "week"
                        ?
                        <div className="main-header__content-list">
                            {forecast.map((item, index) => <HeaderItem data={item} key={index} />)}
                        </div>
                        :
                        <ListContainer data={forecast} />
                }
            </div>
        </section>
    )
}

export default MainHeader