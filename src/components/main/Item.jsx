function Item(props) {
    return (
        <div className="main-body__box">
            <p>{props.title}</p>
            <p><i class="fas fa-arrow-up"></i> 6:35 AM</p>
            <p><i class="fas fa-arrow-down"></i> 5:42 PM</p>
        </div>
    );
}

export default Item;