import { useSelector } from "react-redux"
import Spinner from "../Spinner"
import MainBody from "./body/MainBody"
import MainHeader from "./header/MainHeader"

function MainContent() {
    const store = useSelector(state => state.data)
    return (
        <main className="main">
            {
                store == ""
                    ?
                    <Spinner />
                    :
                    <MainHeader data={store.forecast} />
            }
            {
                store == ""
                    ?
                    <Spinner />
                    :
                    <MainBody data={store} />
            }
        </main>
    )
}

export default MainContent