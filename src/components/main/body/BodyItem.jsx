function BodyItem(props) {
    return (
        <div className="main-body__content__item">
            <p className="main-body__content__item__title">{props.title}</p>
            <p className="main-body__content__item__body">
                <i className={props.icon}></i>
                <span>
                    {props.text}
                    {props.sub && <sub>{props.sub}</sub>}
                    {props.sup && <sup>{props.sup}</sup>}
                </span>
            </p>
        </div>
    );
}

export default BodyItem;