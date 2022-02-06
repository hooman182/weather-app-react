import { useSelector } from "react-redux"
import Spinner from "../Spinner"
import SidebarBody from "./SidebarBody"
import SidebarFooter from "./SidebarFooter"
import SidebarHeader from "./SidebarHeader"

function SideBar() {
  const store = useSelector(state => state.data)
  return (
    <aside className="sidebar">
      <SidebarHeader />
      {store == "" && <Spinner />}
      {store.current && <SidebarBody data={store.current} />}
      {store.location && <SidebarFooter data={store.location} />}
    </aside>
  )
}

export default SideBar