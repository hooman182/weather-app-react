import BodyItem from "./BodyItem"

function MainBody(props) {
    const { data } = props
    return (
        <section className="main-body">
            <h1>Today's Highlights</h1>
            <div className="main-body__content">
                <BodyItem title="Sunrise" icon="fas fa-arrow-up" text={data.forecast.forecastday[0].astro.sunrise.slice(0, -2)} sub="AM" />
                <BodyItem title="Sunset" icon="fas fa-arrow-down" text={data.forecast.forecastday[0].astro.sunset.slice(0, -2)} sub="PM" />
                <BodyItem title="Wind Status" icon="fas fa-wind" text={data.current.wind_kph} sub="km/h" />
                <BodyItem title="Humidity" icon="fas fa-tint" text={data.current.humidity} sup="%" />
                <BodyItem title="Visibility" icon="fas fa-eye" text={data.current.vis_km} sub="km" />
                <BodyItem title="UV Index" icon="far fa-sun" text={data.current.uv} />
            </div>
        </section>
    )
}

export default MainBody