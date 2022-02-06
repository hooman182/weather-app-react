import { useSelector } from "react-redux"
import Spinner from "../Spinner"
import MainBody from "./body/MainBody"
import MainHeader from "./header/MainHeader"

function MainContent() {
    const store = useSelector(state => state.data)
    return (
        <main className="main">
            {
                store.length === 0
                    ?
                    <Spinner />
                    :
                    <MainHeader data={store.forecast} />
            }
            {
                store.length === 0
                    ?
                    <Spinner />
                    :
                    <MainBody data={store} />
            }
        </main>
    )
}

export default MainContent