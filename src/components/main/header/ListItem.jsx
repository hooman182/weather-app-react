import { useRef } from "react";

function ListContainer(props) {
    const { hour } = props.data[0]

    const listElement = useRef(null)
    let isDown = false
    let startX, scrollLeft
    function elemMouseDown(e) {
        isDown = true
        startX = e.pageX - listElement.current.offsetLeft
        scrollLeft = listElement.current.scrollLeft
    }
    function elemMouseUp() {
        isDown = false
    }
    function elemMouseLeave() {
        isDown = false
    }
    function elemMouseMove(e) {
        if (!isDown) return false;
        e.preventDefault()
        const x = e.pageX - listElement.current.offsetLeft
        const move = x - startX
        listElement.current.scrollLeft = scrollLeft - move
    }

    return (
        <div className="main-header__content-list"
            ref={listElement}
            onMouseDown={elemMouseDown}
            onMouseMove={elemMouseMove}
            onMouseUp={elemMouseUp}
            onMouseLeave={elemMouseLeave}
        >
            {hour.map((item, index) =>
                <div className="main-header__content-list__item" key={index}>
                    <p className="main-header__content-list__item__title">{item.time.slice(-5)}</p>
                    <img src={item.condition.icon} alt={item.condition.text} />
                    <p className="text--secondary">{item.temp_c}°</p>
                </div>
            )}
        </div>
    )
}

export default ListContainer