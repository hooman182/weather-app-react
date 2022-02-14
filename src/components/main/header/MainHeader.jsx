import { useState } from "react";
import ListContainer from "./ListContainer";
import MainHeaderNavbar from "./MainHeaderNavbar";

function MainHeader(props) {
  const [tabValue, setTabValue] = useState("week");
  const forecast = props.data.forecastday;
  function tabClick(value) {
    setTabValue(value);
  }

  return (
    <section className="main-header">
      <MainHeaderNavbar getTabValue={tabClick} />
      <div className="main-header__content">
        {
            tabValue === "week"
            ?
            <ListContainer data={forecast} type="week" />
            :  
            <ListContainer data={forecast} type="today" />
        }
      </div>
    </section>
  );

}

export default MainHeader;
