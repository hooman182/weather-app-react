function SidebarFooter(props) {
    return (
        <>
            <div className="sidebar-footer">
                <p>{props.data.name}, {props.data.region}, {props.data.country}</p>
            </div>
        </>
    )
}

export default SidebarFooter