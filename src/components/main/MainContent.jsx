import { useState } from "react";

function MainContent() {
    const [tabValue, setTabValue] = useState("week")
    const [degValue, setDegValue] = useState("c")
    const [nightMode, setNightMode] = useState(false)
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "Saturday"]

    function tabClick(e) {
        setTabValue(e.target.id)
    }
    function degChangeHandle(e) {
        setDegValue(e.target.id)
    }
    return (
        <main className="main">
            <section className="main-header">
                <div className="main-header__nav">
                    <ul className="main-header__lists">
                        <li onClick={tabClick} id="today" className={tabValue == "today" ? "item-border" : "text-secondary"}>
                            Today
                        </li>
                        <li onClick={tabClick} id="week" className={tabValue == "week" ? "item-border" : "text-secondary"}>
                            Week
                        </li>
                    </ul>
                    <ul className="main-header__lists">
                        <li onClick={degChangeHandle} id="c" className={degValue == "c" ? "item-rounded" : ""}>°C</li>
                        <li onClick={degChangeHandle} id="f" className={degValue == "f" ? "item-rounded" : ""}>°F</li>
                    </ul>
                </div>
                <div className="main-header__content">
                    {
                        tabValue == "week"
                            ?
                            <div className="main-header__content-list">
                                {
                                    days.map(day =>
                                        <div className="main-header__content-list__item">
                                            <p>{day}</p>
                                            <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" />
                                            <div>
                                                <span>15°</span>
                                                <span>7°</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            :
                            <div className="">
                            </div>
                    }

                </div>
            </section>








            <section className="main-body">
                <h1>Today's Highlights</h1>
                <div className="main-body__content">
                    <div className="main-body__content-item">
                        <p className="main-body__content-item__title">Sunrise & Sunset</p>
                        <p className="main-body__content-item__text"><i class="fas fa-arrow-up"></i> 6:35 AM</p>
                        <p className="main-body__content-item__text"><i class="fas fa-arrow-down"></i> 5:42 PM</p>
                    </div>
                    <div className="main-body__content-item">
                        <p className="main-body__content-item__title">Wind Status</p>
                        <p className="main-body__content-item__text--big">7.70 <sub>km/h</sub></p>
                        <p className="subtitle"><i class="fas fa-compass"></i> WSW</p>
                    </div>
                    <div className="main-body__content-item">
                        <p className="main-body__content-item__title">Humidity</p>
                        <p className="main-body__content-item__text--big">12 <sup>%</sup></p>
                    </div>
                    <div className="main-body__content-item">
                        <p className="main-body__content-item__title">Visibility</p>
                        <p className="main-body__content-item__text--big">5.2 <sub>km</sub></p>
                    </div>
                </div>
                <div>
                    {/* <h1>hooman</h1>
                    <h1>hooman</h1>
                    <h1>hooman</h1>
                    <h1>hooman</h1> */}
                </div>
            </section>
        </main>
    )
}

export default MainContent