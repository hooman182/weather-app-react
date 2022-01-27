function SideBar(props) {
  // const location = props.location
  // const weather = props.weather
  const datetime = new Date()
  const time = datetime.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' })
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "Saturday"]
  setTimeout(() => { }, 1000)
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <form method="post" className="sidebar-form">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search for places..." className="sidebar-form__input" />
        </form>
      </div>
      <div className="sidebar-body">
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gridTemplateRows: '1fr', alignItems: 'center' }}>
          <img src="https://cdn.weatherapi.com/weather/128x128/night/143.png" className="sidebar-body__icon" />
          <p className="sidebar-body__title"><span>12</span><sup>°C</sup></p>
        </div>
        <p className="sidebar-body__text">Sunny</p>
        <p className="sidebar-body__text">{days[datetime.getDay()]}, <span className="text-secondary">{time}</span></p>
      </div>
      <div className="sidebar-footer">
        <p>tehran, tehran, iran</p>
      </div>
    </aside>
  );
}

export default SideBar;